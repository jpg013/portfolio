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

deploy() {
  # SSH into ec2 instance
  ssh -i ~/.ssh/ec2_ubuntu_20_1.pem ubuntu@ec2-54-237-112-235.compute-1.amazonaws.com
  
  # stop / cleanup the existing container
  docker stop "${DOCKER_IMAGE}"
  docker rm "${DOCKER_IMAGE}"
  docker pull "${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
  # Run the new image on port 3000
  docker run -d -p 3000:80 --name "${DOCKER_IMAGE}" "${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
}

parseTag "$@"

if [[ -z $TAG ]]; then
  echo "Invalid Tag Argument"
  exit 1
fi

build && deploy