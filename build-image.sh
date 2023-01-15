#!/usr/bin/env -S bash -xe
VERSION=$(jq -r '.version' package.json)
# this works on nginx
./node_modules/@angular/cli/bin/ng.js build --configuration=production
docker build -t mseravalli/mifi-frontend:${VERSION} .

docker tag mseravalli/mifi-frontend:${VERSION} mseravalli/mifi-frontend:latest

docker push mseravalli/mifi-frontend:${VERSION}
docker push mseravalli/mifi-frontend:latest
