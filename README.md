## SHORTNER

This is a sample spring-boot project to demonstrate redis cache with spring-boot, react-typescript 
and angular-typescript front ends containerized 
in Docker.

## Functionality
A URL shortener is a simple tool that takes a long URL and simplifies it.

for example bitly.com and tinyurl.com.

In this challenge you will be creating your own URL shortener with 2 front ends react and angular, springboot api and a redis
as a database.


## Requirements
* Java 11
* Apache Maven 3.5.0 or higher
* Node v12.22.1 or higher
* Docker


## How to Run

- Clone the project
- Configure Redis application.yml
- Start Docker
- Build the project
```
cd app/
mvn clean install
```
- Run the application alone
    You should have a redis db up and configured 
    with the host name in the application.properties
```
java -jar target/shortener-0.0.1.jar
```
- Make sure your redis-server is up and running
- Use the postman to test the application.

## Using docker

- Build the app project
```
cd app/
mvn clean install
cd ..
```
- Run using docker-compose
```
docker-compose up --build 
```

## Using makefile

- Run the entire solution
```
make all
```
- Run the setup
``` 
make build
```
- Run the test
```
make test
```
