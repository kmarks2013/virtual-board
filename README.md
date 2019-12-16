# Virtual Board

This application provides a virtual whiteboard for users to track to-dos, inspirational quotes, general thoughts, and doodles

## Authors

- [Kenny Marks](https://github.com/kmarks2013)
- [Matt Werner](https://github.com/mrwerner392)

## Features

- Create an account
- Rename your whiteboard
- Update to-dos list
- Update inspirational quotes
- Update general thoughts
- Create a doodle
- Change marker color
- Update account information
- Delete account

## Live Version

To create your own whiteboard, access the live version of this application at [firebaseapp.com](https://virtual-board-fa036.firebaseapp.com/)

## Installation and Local Testing

To test this application locally, first clone the master branch onto your machine and navigate into the directory. Then follow these steps:

1. Navigate to backend folder with `cd virtual-board-backend`
2. `bundle install`
3. `rails db:create && rails db:migrate`
4. (Optional) Edit seeds file or use current information and run `rails db:seed`
5. Start local server with `rails s`
6. Navigate to frontend folder with `cd ../virtual-board-frontend`
7. Run `open app/index.html` to open and test the application in your browser

## Technologies

- JavaScript ES6
- Ruby on Rails
- Active Model Serializer
- Postgresql
- HTML5
- Vanilla CSS

## Demo

View our video demo [here](https://youtu.be/WmptC7f5CX4)
