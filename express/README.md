# Express API Starter

How to use this template:

```sh
npx create-express-api --directory my-api-name
```

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
* [cors](https://www.npmjs.com/package/cors)
  * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [jest](https://www.npmjs.com/package/jest)
  * Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm test
```

## Development

```
npm run dev
```


{
  "type": "service_account",
  "project_id": "minimalist-415400",
  "private_key_id": "5320d535f29a6d4b90d2a9688ce8f3663704c638",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDbpvhfMBENvqPh\nlNH4tyedCHC1M6mH/aX3JQRdKi+pC/GTEujtBM65vHXltv+7gK9UjAXFP0oX+jcG\n6hNYUwl/RGZua7KZ3FMOu1kaQmL9NN8cZP6Z0adkcM7ykVLoz/sGu4aiTLks7ARW\ntdd0sQcoJ8bzRSikVpezkKO7fOQWbaQdPGj7UmnmfEVkVfyatVuT1QZ0MUtsGJhj\nYfDfpThEctEVm6yh0gR9bQ9UbeVy1keHEkma0o3Va6Nk5zNyfA/TdfXOUlu/O8QC\nXzIHDzW/yXyYkONcGj98AD8XRz/amJ3LHA7mCIJqM16iQyuhphmfnXAXo0ki+WWn\nfS3+Kgx7AgMBAAECggEAB6+1UXSOpVwgsLQ8IjVSkeiOM/yCLt4CWdnj1bQ0JXjj\nc+G9l59v8e0+mO4SYZpGth8NsFr6i/+J5CGM9eSk2IHEm5HfqQn5gc33igmhrrnv\na1vhG4PeS+r+Ycmkg5hnlVMWLxfop9RGObyP/hUqYXLZLYEj1bvOSQ6xCvMyO9Lo\nyY5humbc4xxVUbYCPeZ22ykdIaRW6yJdMfj4I9CHz2jqLZ5G+7AMuhq2jScmjZwe\nbUnJQUjtLagMjfm7yk+jcRfg3fIN7SbsR6b6tQW2Z8ZGjlNGxhJ0TjQrydurN7p1\n/yxtt1bsVD1eXw5vlX3tiP7KDHVnEtjwnzUN/Bp01QKBgQDyamx+ZRw04tS4XFzy\nzOVEhyXHfLaD86KSDET+DnsnIxVAekS/fVXbxYkiC4qw25GjhuIxeAhJBeyH9j0H\noSE6vjreSYGZSU8lpPaJgASXJhEdlcUahUKIHEt184J/cydL0wJAJ4pTIbnNVhTN\n2zxPeIb62fsXP2mvZq0jUYxgjQKBgQDn9f4bJxG2duJvEgO2PtwZ5eXKdrCDQvXV\nH4dM4EljYcnz3PsmXPTca5F5IMyHuUd1hss+HvVmk4sjqHSJZ2OdWvY4/JNpPWb0\nA5mfUXAOc7DrRk0TveJyNh6wPmNpnibXC4xTNQhuekEYkNAvfWp/C2BFLol6XNGC\n54YA9ghzJwKBgQCfmcnMfa1QdHcw2j6n7JaVw5Tv/f/8aA+EsGdMDSSv470+MkHJ\nAS/h/fAHZintvuHoFAogH7L0wN21tj0AJOnHzy7a4vJchZOCaVWXuZ1MFlf2boDS\nsSHYkyhrg+NLHfmlRkuZCW9cxDucISyZS9otSGE2DwXtjGZ8gNFFC4+skQKBgCBp\nAaE/mzz4bXkBdl1PeSdxNONOJCmjAIBP0HLQX9CwCCy3sqvQjzIBIalgCNPp8m8c\nb2d1oeo8MVPBJM9SD9wbqo2Z1Or+dlUf76YQFe0fAxhMkVZx0KMOpskPXoqSW3Du\nnyO9JDlzgYbyLPSFvIyVxVTFRNZBA9EbkmCt/84/AoGAfsUU/sFdOHNAbGbjdTd2\nu7NNuW58muAihp0RncrVDfMOJGdESZKdmE1RBoDg87FkBuM9OM8+N8Pv7JSuII9G\n70z85TjssA9IbaSg52NEcU4pTqqeJOCOZMg+//v/ZHR9vuCV92gwn99DaLkPUc3E\nJiJkeGN37eqo/QtAs8ropAk=\n-----END PRIVATE KEY-----\n",
  "client_email": "blogai@minimalist-415400.iam.gserviceaccount.com",
  "client_id": "116607954673264458550",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/blogai%40minimalist-415400.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
