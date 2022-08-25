# Kinde Starter Kit - React with Express API

## Register an account on Kinde

To get started set up an account on [Kinde](https://app.kinde.com/register).

## Setup your local environment

Clone this repo or download as a zip.

The React frontend of the application lives in the `client` folder and the ExpressJS API backend in the `server` folder.

### Frontend

Inside the `/client` directory install dependencies with `npm i`.

Make a copy of `.env_sample` and name it simply `.env`. Rename the value of `REACT_APP_KINDE_DOMAIN` to the `Token host` value from the Kinde `App Keys` page.

e.g

```
REACT_APP_KINDE_DOMAIN=https://your_kinde_subdomain.kinde.com
```

### Set your Callback and Logout URLs

Your user will be redirected to Kinde to authenticate. After they have logged in or registered they will be redirected back to your React application.

You need to specify in Kinde which url you would like your user to be redirected to in order to authenticate your app.

On the App Keys page set `Redirect url` to `http://localhost:3000`

> Important! This is required for your users to successfully log in to your app.

You will also need to set the url they will be redirected to upon logout. Set the `Logout url` to http://localhost:3000.

### Start your app

From the `/client` directory run `npm start` in a terminal and navigate to `http://localhost:3000`.

Click on `Sign up` and register your first user for your business!

### View users in Kinde

If you navigate to the "Users" page within Kinde you will see your newly registered user there.

## Setup the server

Inside the `/server` directory install dependencies with `npm i`.

Make a copy of `.env_sample` and name it simply `.env`. Rename the value of `KINDE_URL` to the `Token host` value from the Kinde `App Keys` page.

e.g

```
KINDE_URL=https://your_kinde_subdomain.kinde.com
```

Run `npm start` to boot up the Express server on port 5000.

### Test health check endpoint

Visit [http://localhost:5000/v1](http://localhost:5000/v1) in the browser which should return JSON with a 200 reponse code and a status of `running`.

### Test protected endpoints

Make sure both frontend and backend are running. In the browser navigate to [http://localhost:3000](http://localhost:3000) and either sign in or register a user.

You will be redirected to the logged in view of this starter kit which includes a "Fetch books" button.

Clicking this button will render a list of books fetched from the protected API.
