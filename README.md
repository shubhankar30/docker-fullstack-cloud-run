# Web and API Docker (Production on Cloud Run)

# Development
To run the containers locally,
```
docker-compose up --build
```
To run in background
```
docker-compose up -d --build
```

# Production
- Build Server and Web Client Images
- Push the images to GCR (Google Container Registry)
- Loaded in Cloud Run

For this project,
- Client
```
docker build -t gcr.io/futura-data-logger-development/client:latest ./client
```
```
docker push gcr.io/futura-data-logger-development/client:latest
```

- Server
```
docker build -t gcr.io/futura-data-logger-development/server:latest ./server
```
```
docker push gcr.io/futura-data-logger-development/server:latest
```

## Docker Commands

Generic:
```
docker build -t gcr.io/${PROJECT_ID}/${IMAGE_NAME} ./client
```
```
docker push gcr.io/${PROJECT_ID}/${IMAGE_NAME}
```

Cleanup:
```
docker volume rm $(docker volume ls -qf dangling=true)
```
Additional commands:

List dangling volumes:
```
docker volume ls -qf dangling=true
```
List all volumes:
```
docker volume ls
```

## Misc
Cloudbuild Cloud Run deployment permissions denied
https://stackoverflow.com/questions/62783869/why-am-i-seeing-this-error-error-gcloud-run-deploy-permission-denied-the-c

https://www.alibabacloud.com/blog/building-a-restful-api-with-express-postgresql-and-node-using-es6_594137

https://stackoverflow.com/questions/21105748/sequelize-js-how-to-use-migrations-and-sync

```
...
"scripts": {
  "dev": "grunt && sequelize db:migrate && sequelize db:seed:all && node bin/www",
  "start": "sequelize db:migrate && sequelize db:seed:all && node bin/www"
},
...
```
