# BFF GraphQL Proxy

ExpressJS Server to proxy GraphQL requests to the GraphQL Backend For Frontend, to avoid CORS issues when developing locally.

## Setup

`npm run i`

### Change backend Url

Change proxied backend url in `index.js`

### Change Port 

Change port in `index.js`, `Dockerfile` and `docker-compose` (if used)

## Run

`npm run dev` 

or

`docker-compose up -d`

## Usage

POST the graphql request to `http://localhost:4000/graphql`
```
e.g.
curl --location --request POST 'http://localhost:4000/graphql' \
--header 'Content-Type: application/json' \
-- header 'Authorization: Bearer token (if required)' \
--data-raw '{"query":" query article($id: ID!) { article(id: $id){ id title } }","variables":{"id": 1}}'
```