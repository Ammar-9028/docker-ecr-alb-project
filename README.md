# CloudDesk - Docker ECR CI/CD Demo

A responsive project dashboard built with HTML, CSS and JavaScript. This app is intended for a learning project using Docker, Amazon ECR, GitHub Actions, EC2, an Application Load Balancer and a Target Group.

## Run locally
Open `index.html` in a browser.

## Build and run with Docker
```bash
docker build -t clouddesk .
docker run -d --name clouddesk -p 8080:80 clouddesk
```
Open http://localhost:8080

## Stop and remove
```bash
docker rm -f clouddesk
```

## Deployment notes
- The container listens on port 80.
- For an EC2 Target Group using instance port 8080, publish the container with `-p 8080:80`.
- Configure the Target Group health check path as `/`.
- Do not commit AWS access keys or other secrets to this repository.
