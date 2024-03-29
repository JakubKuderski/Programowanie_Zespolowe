# Swagger generated server

## Overview
This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project. By using the
[OpenAPI-Spec](https://github.com/swagger-api/swagger-core/wiki) from a remote server, you can easily generate a server stub.  This
is an example of building a swagger-enabled Flask server.

This example uses the [Connexion](https://github.com/zalando/connexion) library on top of Flask.

## Requirements
Python 3.9+
MySQL Server 8.0+

## Baza danych
Nasza aplikacja korzysta z RDBMS MySQL. Aby uruchomić aplikacje, należy zainstalować lokalnie
na komputerze serwer MySQL.
```bash
sudo apt update
sudo apt install mysql-server
```

Potem należy uruchomić serwer:
```bash
sudo service mysql start
```

następnie należy zaimportować schemat bazy danych do serwera:
```bash
cd swagger_server/database
sudo mysql < db_schema.sql
```

#### UWAGA
Należy (prawdopodobnie) zmienić w pliku
 ```
swagger_server/database/database.ini
```
pole `host` na `localhost`
```ini
[mysql]
host=localhost
database=foto_portfolio
user=prog_zesp
password=prog_zesp
port=3306
```

## Usage
To run the server, please execute the following from the root directory:

```
pip3 install -r requirements.txt
python3 -m swagger_server
```

and open your browser to here:

```
http://localhost:8080/ui/
```

Your Swagger definition lives here:

```
http://localhost:8080/swagger.json
```

To launch the integration tests, use tox:
```bash
sudo pip install tox
tox
```

## Running with Docker

Żeby uruchomić aplikację wraz z bazą danych w kontenerze, należy uruchomić docker-compose

```bash
# building the image
docker-compose -f docker-compose.dev.yml build

# starting up a container
docker-compose -f docker-compose.dev.yml up
```
#### UWAGA 
Przy korzystaniu z docker-compose należy zmienić w pliku 
```
swagger_server/database/database.ini
```
pole `host` na `mysqld`.
```ini 
[mysql]
host=mysqldb
database=foto_portfolio
user=prog_zesp
password=prog_zesp
port=3306
```

Jeśli chcesz ponownie załadować plik `db_schema.sql` do bazy danych, należy usunąć kontener z bazą danych i pamięć, na przykład
za pomocą tych komend:
```bash
docker rm -v $(docker ps -a -f "name=server_mysqldb*" --format "{{.Names}}")
docker volume rm server_mysql server_mysql_config
```