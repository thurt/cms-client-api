#! /bin/bash

docker run \
    --rm \
    --mount type=bind,src=${PWD},target=/local \
    jimschubert/swagger-codegen-cli:2.2.3 generate \
    -i https://learned-stone-189802.appspot.com/api/_swagger \
    -l typescript-fetch \
    -o /local
