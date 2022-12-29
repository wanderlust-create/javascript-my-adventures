<img src="https://user-images.githubusercontent.com/67713820/209890826-96c8d88e-98b5-4e4b-b59f-d8b0e853287a.png"><br>

<p align="center">
<h2>This app serves as a RESTful API to access data from My Adventures database </h2>
    <br> 
</p>

----------

## 📝 Table of Contents

- [Packages](#packages)
- [Folder Structure](#folder_structure)
- [Setup](#setup)
- [API Documents](#api-docs)
- [Schema](#schema)
- [Contributor](#contributor)

----------
## 🎁 Packages <a name = "packages"></a>

- [Express](https://www.npmjs.com/package/express)
- [Knex](https://knexjs.org/guide/)
- [Objection](https://vincit.github.io/objection.js/api/objection/)
- [pg](https://www.npmjs.com/package/pg)
- [Winston](https://www.npmjs.com/package/winston)
- [Yup](https://www.npmjs.com/package/yup)
- [Swagger JS Docs](https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/)
- [Swagger UI Express](https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/)
- [nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
----------
## 📂 Folder Structure <a name = "folder_structure"></a>
- `src/api` Controllers, daos, models, reqBody Validation, routes, & services
- `src/config` databse access & access to .env configuration variables
- `src/db` migration, seed, & seed source data
- `src/docs` postman import API docs
- `src/utils` logger & setup

----------
## 💻 Setup  <a name = "setup"></a>

#### Requirements:

- [PostgreSQL](https://www.postgresql.org/)
- [Node.js](https://nodejs.org/en/)

#### Installation:

1. Clone the repository `git@github.com:wanderlust-create/javascript-my-adventures.git`
2. Install node packages `cd javascript-my-adventures` then `npm install`
3. Rename `.env.example` to `.env` and enter environment variables
4. Run `npm start` to start the application
5. Open your local browser and verify the javascript-my-adventures app is working by accessing `http://localhost:<your env PORT>`

#### Database setup:

1. Create a PostgreSQL database using the same name, owner, and password you have in your .env file
2. You can now load the script via a npm command: `npm run migrate`. 

#### Database seeding:

1. In `src.db/sources` you'll find files that can be used for seeding the database. Make sure that the database and its tables were created before executing the seed script. 
2. You can now load the script via a npm command: `npm run seed`. 

----------
## 🗺 Schema  <a name = "schema"></a>
![csa-schema](https://user-images.githubusercontent.com/67713820/209966291-29992855-b2c0-4401-86ae-29720e39fb08.png)

----------
## 💼 API Documentation  <a name = "api-docs"></a>

### Data returned from API:

#### For My Adventure Users:
- Create, List, Get One, Update, and Delete endpoints
- List all the user-cities on a joins table
- Add a city to a user joins table with a userId and cityId
- Delete a user-city entry on the joins table

#### For My Adventure Cities:
- Create, List, Get One, Update, and Delete endpoints

#### For My Adventure City Events:
- Create, List, Get One, Update, and Delete endpoints
- Filter eventss for a specific city via a CityId
- Filter events for a specific User via a UserId

#### You can access the Swagger Documentation by:
- Connecting to your local network and access `http://localhost:<your_local_PORT>/api-docs`

#### You can import a Postman collection by either:
1. Import the JSON doc on `http://localhost:<your_local_PORT>/api-docs.json` when connected to your local network
2. Import the document stored in `src/api/docs`
----------

## Contributor   <a name = "contributor"></a>
👩🏽‍🎤 Tamara Dowis |  [GitGub](https://github.com/wanderlust-create)  |  [LinkedIn](https://www.linkedin.com/in/tamara-dowis/)
