# ella-tech_management
NestJS service with PostgreSQL and TypeORM that manages users and products, and records a transaction history. 

## Setup & Run
## Clone the repository
    [git clone https://github.com/bkgithello/ella-tech_management.git]
    cd ella-tech_management

## Start services with Docker Compose
    docker compose up -d --build

## Check containers are running
    docker compose ps

## Run migrations (if needed)
    docker compose exec api npm run migration:run


# REST API endpoints:

POST /users → Create a new user
http://localhost:3000/users
{
    "name":"bk2",
    "email":"bk2@bk2.com"
}

GET /users → Get all user
http://localhost:3000/users

POST /products → Create a new product
http://localhost:3000/products
{
    "name": "gun 3",
    "quantity": 4,
    "price": 50
}

GET /Products → Get all products
http://localhost:3000/products

PUT /products/adjust → Update product quantity/price and record a transaction
http://localhost:3000/products/6
 {
        "name": "gun 2 updated again",
        "quantity": 5,
        "price": 55
    }

GET /status/:productId → Get current product details
http://localhost:3000/products/5

GET /transactions → List all stock adjustment transactions

DELETE /products:productId → Delete
http://localhost:3000/products/6



