#!/bin/bash

dockerPush() {
  IMAGE="portfolio-ui"
  USER="graber4"
  BUILD_SUCCESS=false

  npm run build && BUILD_SUCCESS=true

  if [[ ! $BUILD_SUCCESS ]]; then
    exit 1
  fi

  docker build -t "${IMAGE}" .
  docker tag "${IMAGE}" "${USER}/${IMAGE}:0.0.3"
  docker push "${USER}/${IMAGE}:0.0.3"
}

dockerPush