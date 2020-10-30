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

## Docker Commands
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