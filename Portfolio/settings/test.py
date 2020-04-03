import json

with open('secrets.json') as f:
    secrets = json.loads(f.read())
    print(secrets)