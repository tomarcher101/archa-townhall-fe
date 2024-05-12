# Instructions

## Installation

1. Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script).
2. Activate node 19.5.0 by running `nvm use` in this directory.
3. Install project dependencies `npm i`.

## To test on local machine

4. Set the `API_URL` in `api.ts` to the localhost address you are exposing the Django server to.
5. Run the app `npm run dev`.

## To test on local network

4. Set the `API_URL` in `api.ts` to the ngrok address you are exposing the Django server to.
5. Run the app `npm run dev -- --host`.

## Tests

1. Run `npm run test`.
