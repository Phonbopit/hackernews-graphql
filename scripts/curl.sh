#!/bin/sh

curl -X POST http://localhost:4000/graphql \
 -H "Content-Type: application/json" \
 --data-raw '{"query": "query { hello }"}'