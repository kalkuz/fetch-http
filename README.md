[![npm version](https://badge.fury.io/js/@kalkuz%2Ffetch-http.svg)](https://badge.fury.io/js/@kalkuz%2Ffetch-http)

# Fetch HTTP

A simple HTTP client for Browsers.

> **Warning**
> If you want to use this package in a Node.js, you should use [@kalkuz/node-fetch-http](https://github.com/kalkuz/node-fetch-http) instead.

## Installation

You can install this package using npm:

```bash
npm install @kalkuz/fetch-http
```

Using yarn:

```bash
yarn add @kalkuz/fetch-http
```

## Usage

### Importing The Package
  
  For configuring the package, you can use the default export:

  ```javascript
  import FetchHttp from '@kalkuz/fetch-http';

  FetchHttp.Configurate(...);
  ```

  Or you can use the named export:

  ```javascript
  import { Configurate } from '@kalkuz/fetch-http';

  Configurate(...);
  ```

  For supported types of HTTP requests, you can use the named export:

  ```javascript
  import { Get, Post, Put, Patch, Delete } from '@kalkuz/fetch-http';
  ```

## Configuring The Package

  Configuration is optional. If you don't configure the package, it will use the default configuration.

  The default configuration is:

  ```javascript
  {
    baseUrl: '',
    getAuthorization: () => '',
  }
  ```

### Configuring The Base URL

  The `baseUrl` parameter will be used as the base URL for all requests. Example:

  ```javascript
  // Configured URL: https://example.com/api/v1

  Get('/users');

  // Final URL: https://example.com/api/v1/users
  ```

  If you don't want to use a base URL, you can pass an empty string as the `baseUrl` parameter or skip the configuration. When you skip configuration of `baseUrl`, you can pass the full URL as the first parameter of the HTTP request function.

  ```javascript
  Get('https://example.com/api/v1/users');

  // Final URL: https://example.com/api/v1/users
  ```

  If you configured the `baseUrl` parameter and you want to use another full URL endpoint, you can pass the full URL as the optionalApiAddress parameter of the HTTP request function. Example:

  ```javascript
  // Configured URL: https://example.com/api/v1

  Configurate({ baseUrl: 'https://example.com/api/v1' });

  // Get(endpoint, headers, optionalApiAddress)
  Get('/users', null, 'https://example.com/api/v2');

  // Post(endpoint, body, headers, optionalApiAddress)
  Post('/users', { name: 'John Doe' }, null, 'https://example.com/api/v2')

  // Final URL: https://example.com/api/v2/users
  ```
  
### Configuring The Authorization Header

  The `getAuthorization` function will be used to get the authorization header for all requests.

  The `getAuthorization` function will be called before every request and it should return the authorization header value. Example:

  ```javascript
  Configurate({
    getAuthorization: () => {
      const token = localStorage.getItem('token');

      // as bearer token
      return `Bearer ${token}`;
      // or as basic auth
      return `${token}`;
    },
  });

  // If you send a request:
  Get('/users');

  // Headers will be something like:
  {
    ...
    'Content-Type': 'application/json',
    authorization: 'Bearer %YOUR_TOKEN%', 
    // or
    authorization: '%YOUR_TOKEN%',
  }
  ```

### Promise Based
  
  All HTTP request functions return a promise. Example:
  
  ```javascript
  Get('/users')
    .then((response) => {
      // response is a json
      // response.json() is applied before
    })
    .catch((error) => {
      // handle the error
    });
  ```

## License

[MIT License](https://github.com/kalkuz/fetch-http/blob/master/LICENCE)
