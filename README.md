## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Bug Reproduction

Generate the static site and start the development server on `http://localhost:3000`

```bash
# npm
npm run test
```

When navigating to "/trailing/", the data is refetched from the api, but when going to "/" or "/about", the data is correctly loaded from the payload.