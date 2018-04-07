#! /bin/bash
docker run \
    --rm \
    --mount type=bind,src=${PWD},target=/local \
    jimschubert/swagger-codegen-cli:2.2.3 generate -i http://172.19.0.1:8282/api/_swagger -l typescript-fetch -o /local
