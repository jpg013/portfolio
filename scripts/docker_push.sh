#!/bin/bash

# Script to build && deploys this repo to AWS EC2 instance
DOCKER_IMAGE="portfolio-ui"
DOCKER_USER="graber4"
TAG=""

dockerPush() {
  BUILD_SUCCESS=false
  TAG="0.0.6"

  npm run build && BUILD_SUCCESS=true

  if [[ ! $BUILD_SUCCESS ]]; then
    exit 1
  fi

  docker build -t "${IMAGE}" .
  docker tag "${IMAGE}" "${USER}/${IMAGE}:${TAG}"
  docker push "${USER}/${IMAGE}:${TAG}"

  # SSH into ec2
  ssh_ec2_ubuntu_1
  docker stop portfolio
  docker rm portfolio
  docker pull "${USER}/${IMAGE}:${TAG}"
  docker run -d -p 3000:80 --name portfolio "${USER}/${IMAGE}:${TAG}"
}

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

deploy() {
  # SSH into ec2
  ssh_ec2_ubuntu_1
  docker stop portfolio
  docker rm portfolio
  docker pull "${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
  docker run -d -p 3000:80 --name portfolio "${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
}

parseTag "$@"

if [[ -z $TAG ]]; then
  echo "Invalid Tag Argument"
  exit 1
fi

build && deploy