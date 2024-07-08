# Welcome to Flight Service

## Project setup
  -clone the project on your local
  -Exercise `npm install` on the same path as of your root directory of the downloaded project
  - Create a `.env` file in the root directory and add the following environment variable
       -`PORT=3000`
  -Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

  ....
  {
  "development": {
    "username": <Your_DB_lOGIN_NAME>,
    "password": <Your_DB_Password>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }  
}

-Once you have added DB config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create` and then executr `npx sequelize db:migrate`

## DB Design
 - Airplane
 - Flight
 - Airport
 - City

 -A flight belongs to an airplane but one airplane can be used in multiple flights
 -A city has many airports, but a flight belongs to one airport
 -One airport can have many flights, but a flight belongs to one airport.


## Tables

### City -> id,name,created_at, updated_at

### Airport -> id,name,address,city_id, created_at, updated_at

Relationhip -> city has many airports and Airport belongs to one city (onre to many)
 
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer