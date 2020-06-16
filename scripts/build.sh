#!/bin/bash

# Script to build && deploys this repo to AWS EC2 instance
DOCKER_IMAGE="portfolio-ui"
DOCKER_USER="graber4"
TAG=""

parseTag() {
  while [ "$1" != "" ]; do
    case $1 in
        -t | --tag )            shift
                                TAG=$1
                                ;;
    esac
    shift
  done
}

build() {
  BUILD_SUCCESS=false
  npm run build && BUILD_SUCCESS=true

  if [[ ! $BUILD_SUCCESS ]]; then
    exit 1
  fi

  docker build -t "${DOCKER_IMAGE}" .
  docker tag "${DOCKER_IMAGE}" "${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
  # Push the newly tagged image to dockerhub
  docker push "${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
}

parseTag "$@"

if [[ -z $TAG ]]; then
  # Grep version from package json
  TAG=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | sed 's/^ *//g')
fi

build