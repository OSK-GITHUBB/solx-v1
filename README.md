About:

SolX Finance is an exchange running on Solana.

App:

Webb-App optimized for Google Cloud Platform (GCP) App Engine

Need to have npm installed, helpful to have nvm. 

to run on GCP App Engine:

1- make sure you are on the correct version (NodeJS v16.19.0)

nvm ls

if not on correct version:

nvm use v16.19.0

2- Make sure the app is running ok on local:

npm start

3- Build the app for production:

npm run build

4- Deploy to GCP App Engine 

gcloud app deploy

5- See the deployment on browser:

gcloud app browse