#!/bin/bash
ng build --prod
docker build -t mseravalli/mifi-frontend:$(cat VERSION) .
