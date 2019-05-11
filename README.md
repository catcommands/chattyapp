# To learn more about my projects, 
please visit [My Profile](https://github.com/JeffShah)

#About Chatty-App Project
Chatty allows users to communicate with each other without having to register accounts. It uses React, a popular front-end library created and used heavily by Facebook as well as modern tools for Node including Webpack and Babel.
- When any connected user sends a chat message, all connected users receive and display the message
- When any connected user changes their name, all connected users are notified of the name change.
- Every notification (messages or change of username) has a unique id which can be seen inside cmd.
- Header will display the count of connected users
- When the number of connected users changes, this count will be updated for all connected users.



# Incognito Mode
This ChattApp also works with incognito mode.

# Project Organization
I have organaized this project in two perspective folders to make it easier for users to understand how different files and folders work in their perspective ways: 
- [Frontend](https://github.com/JeffShah/chattyapp/tree/master/frontend) 
- [Backend](https://github.com/JeffShah/chattyapp/tree/master/backend)

# React Boilerplate

A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:JeffShah/chattyapp.git
cd chattyapp
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies in alphabetical order:

- babel-core
- [babel-loader](https://github.com/babel/babel-loader)
- babel-preset-es2015
- babel-preset-react
- css-loader
- express
- node-sass
- prettier
- react
- react-dom
- sass-loader
- sockjs-client
- style-loader
- webpack
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- webSocket
- uuid

For updated list of dependencies, [please click here](https://github.com/JeffShah/chattyapp/blob/master/frontend/package.json) and [here](https://github.com/JeffShah/chattyapp/blob/master/backend/chatty_server/package.json)


## Screenshots:

[Send message](https://github.com/JeffShah/chattyapp/blob/master/screenshots/sendmessage.png)
[Change username](https://github.com/JeffShah/chattyapp/blob/master/screenshots/changeusername.png)
[How many users online](https://github.com/JeffShah/chattyapp/blob/master/screenshots/howmanyusers.png)
[Incognito mode](https://github.com/JeffShah/chattyapp/blob/master/screenshots/incognitomode.png)