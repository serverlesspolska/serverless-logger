# serverless-logger
Simple logger for Lambda functions that has two cool features:
* displays filename as a prefix to each log message
* hides log messages when running tests.

If you want to see logs when running tests on you local machines just set environment variable `DEBUG` to value `ON`. For example:
```
DEBUG=ON npm run test
```

Underneath it uses regular `console.log()`.
