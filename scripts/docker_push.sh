#!/bin/bash

dockerPush() {
  IMAGE="portfolio-ui"
  USER="graber4"
  BUILD_SUCCESS=false
  TAG="0.0.5"

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
}

dockerPush