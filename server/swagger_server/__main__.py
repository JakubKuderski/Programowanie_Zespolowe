#!/usr/bin/env python3

import connexion

from swagger_server import encoder
from swagger_server.database import database



def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Foto Portfolio Project'}, pythonic_params=True)
    database.connect()
    app.run(port=8080)


if __name__ == '__main__':
    main()