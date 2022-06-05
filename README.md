
## Database Setup

1. Start your postgres docker container using [docker-compose](./docker-compose.yml) file.<br>
   `docker-compose up -d`
2. Check if docker container is up.<br>
   `docker-compose ps`
3. Enter the bash shell of postgres's container.<br>
   `docker-compose exec postgres bash`
4. Connect to postgres DB server using default "postgres" user.<br>
   `psql -U postgres`
5. Create database and DB user that your app eventually uses:
> CREATE DATABASE todo_app;<br>
> CREATE USER todo;<br>
> ALTER USER todo WITH ENCRYPTED password 'todo';<br>
> GRANT ALL PRIVILEGES ON DATABASE todo_app TO todo;<br>

## Backend Server Setup

### Starting the development server.

1. Fetch the required packages. <br>
`yarn`


2. Start the development server with the following command. This will start the server in your local machine in port *8000*. <br>
 `yarn start:dev`

### Running automated tests.
To run the automated tests, execute the following command. <br>
`yarn test`