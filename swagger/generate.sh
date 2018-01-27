#! /bin/bash

docker run \
    --rm \
    --mount type=bind,src=${PWD},target=/local \
    swaggerapi/swagger-codegen-cli \
        generate \
        -i https://learned-stone-189802.appspot.com/api/_swagger \
        -l typescript-fetch \
        -o /local
