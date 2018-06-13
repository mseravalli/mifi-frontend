#!/bin/bash
VERSION=$(jq -r '.version' package.json)
ng build --prod
docker build -t mseravalli/mifi-frontend:${VERSION} .
docker push mseravalli/mifi-frontend:${VERSION}
