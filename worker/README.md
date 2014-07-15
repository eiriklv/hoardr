Hoardr - Worker
===============

#### Install dependencies (some might need to use `sudo` for various reasons):
* `brew/apt-get install nodejs`
* `brew/apt-get install redis`
* `brew/apt-get install mongodb`
* `npm install -g mocha`
* `npm install -g gulp`
* `npm install`

#### Environment variables:
* `DEBUG` - Debug output (* for all) (optional)
 * example: `*`
* `NODE_ENV` - Environment ('development', 'staging', 'production')
 * example: `development`
* `MONGO_URL` - MongoDB url (including authentication)
 * example: `mongodb://user:pass@localhost:27017/mydatabase`
* `REDIS_URL` - Redis url (including authentication)
 * example: `redis://user:pass@localhost:6379`
* `REDIS_DB` - Redis database number (0-15)
 * example: `1` - defaults to `0`

#### Run tests:
* `npm test`

#### Run the application:
* set environment variables
* `node app`
* alternatively create a shellscript for the above (for development)

#### Development shellscript example:
```sh
#!/bin/sh

export DEBUG="*" \
export NODE_ENV="development" \
export MONGO_URL="mongodb://localhost/hoardr" \
export REDIS_URL="redis://localhost:6379" \
export REDIS_DB=0 \

node app
```
