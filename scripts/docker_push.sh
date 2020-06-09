#!/bin/bash

dockerPush() {
  IMAGE="portfolio-ui"
  USER="graber4"
  BUILD_SUCCESS=false
  TAG="0.0.4"

  npm run build && BUILD_SUCCESS=true

  if [[ ! $BUILD_SUCCESS ]]; then
    exit 1
  fi

  docker build -t "${IMAGE}" .
  docker tag "${IMAGE}" "${USER}/${IMAGE}:${TAG}"
  docker push "${USER}/${IMAGE}:${TAG}"
}

dockerPush