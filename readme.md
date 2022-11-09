# Kinde Starter Kit - React with Express API

## Register an account on Kinde

To get started set up an account on [Kinde](https://app.kinde.com/register).

## Setup your local environment

Clone this repo and install dependencies by running `npm i`

Make a copy of `.env_sample` and name it simply `.env`. Set the following values from the Kinde `Settings -> Applications -> Frontend app` page.

- `REACT_APP_KINDE_CLIENT_ID` with the `Client ID` value
- `REACT_APP_KINDE_DOMAIN` with the `Domain` value

e.g

```
REACT_APP_KINDE_CLIENT_ID=your_client_id
REACT_APP_KINDE_DOMAIN=https://your_kinde_subdomain.kinde.com
```

## Set your Callback and Logout URLs

Your user will be redirected to Kinde to authenticate. After they have logged in or registered they will be redirected back to your React application.

You need to specify in Kinde which url you would like your user to be redirected to in order to authenticate your app.

On the `Settings -> Applications -> Frontend app` page set `Allowed callback URLs` to `http://localhost:3000`

> Important! This is required for your users to successfully log in to your app.

You will also need to set the url they will be redirected to upon logout. Set the ` Allowed logout redirect URLs` to http://localhost:3000.

## Start your app

Run `npm start` in a terminal and navigate to `http://localhost:3000`.

Click on `Sign up` and register your first user for your business!

## View users in Kinde

If you navigate to the "Users" page within Kinde you will see your newly registered user there. 🚀

## Setup the server

Inside the `/server` directory install dependencies with `npm i`.

Make a copy of `.env_sample` and name it simply `.env`. Rename the value of `KINDE_URL` to the `Domain` value from the Kinde `Settings -> Applications -> Frontend app` page.

e.g

```
KINDE_URL=https://your_kinde_subdomain.kinde.com
```

Run `npm start` to boot up the Express server on port 6161.

### Test health check endpoint

Visit [http://localhost:6161/v1](http://localhost:6161/v1) in the browser which should return JSON with a 200 reponse code and a status of `running`.

### Test protected endpoints

Make sure both frontend and backend are running. In the browser navigate to [http://localhost:3000](http://localhost:3000) and either sign in or register a user.

You will be redirected to the logged in view of this starter kit which includes a "Fetch books" button.

Clicking this button will render a list of books fetched from the protected API.
