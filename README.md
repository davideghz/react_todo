# React Todo App
Todo list App in React and Firebase.

## Install webpack
```
npm install webpack -g
```

## Install packages and project dependencies
Head to project folder and run
```
npm install
```

## Setup firebase
create new folder ~/config
create new files `test.env` and `development.env` in ~/config and add following code in each file:
```
API_KEY=***
AUTH_DOMAIN=***
DATABASE_URL=***
STORAGE_BUCKET=***
```
Head to firebase.google.com, login and create two new applications (one for testing and the other for dev).
In Project settings click on "Add firebase to your webapp".

In `test.env` and `development.env` substitute `***` with the actual keys from Firebase.
