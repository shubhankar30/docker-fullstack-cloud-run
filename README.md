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