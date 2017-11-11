# README

## Initialization

* run `npm install`
* go to client directory and run `npm install`

## Editing code

* server side code is inside **server** directory
* client side code is inside **client** directory
* static content should be placed inside **server/public** directory
* connection to mongodb is provided. Replace `YOUR_DATABASE_NAME_HERE` and `YOUR_COLLECTION_NAME` with your preference
* provide data object inside `setDefaults.js`

## running app

* start mongodb server
* start redis server
* run `npm start`, starts server on localhost port 5000
* go to client directory and run `npm start`, starts server on port 3000
* requests sent from client uses `proxy` to reach server

## testing

* for testing client side code include tests inside **tests** folder, then run `npm test`

## features

* add features of your app here
