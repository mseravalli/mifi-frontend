#!/bin/bash -xe
VERSION=$(jq -r '.version' package.json)
ng build --prod
docker build -t mseravalli/mifi-frontend:${VERSION} .

docker tag mseravalli/mifi-frontend:${VERSION} mseravalli/mifi-frontend:latest

docker push mseravalli/mifi-frontend:${VERSION}
docker push mseravalli/mifi-frontend:latest
