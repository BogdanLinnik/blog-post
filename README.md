# API Readme

### Ruby version
 2.5.3

### System dependencies
  1. Mysql as database;
  2. Redis for background jobs;

### Additional used gems
  1. jbuilder - for building json responses;
  2. gem-cors - for making cross-origin AJAX posibble;
  3. pry - for debuging;
  4. seedbank - for simplify work with seeds;
  5. redis - for using redis as adapter for action cable and active job;

### Configuration
  1. `bundle install`
  2. copy config/database.yml.example to config/database.yml and fill it with Your database configuration data;
  3. copy config/cable.yml.example to config/cable.yml and fill it with Your cable configuration data - You can change 
     redis adapter to Your prefared adapter;  

### Database creation
1. `rails db:create`

### Database initialization
1. `rails db:setup`
  
### Services (job queues, cache servers, search engines, etc.)
  1. Mysql service;
  2. If You use not async cable adapter, Your sevice should be working too (In my case it was redis-server)

### Start api server:
1. `rails s`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Client Readme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Project preparation
  1. `npm i --save`
  2. `yarn i --save`
  3.  copy .env.example to .env - There is PORT constant which will specify You client server on 8000 port

### Start client server:

1. `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### Used libraries

1. Material UI as Responsive front-end component library
2. Material UI icons for icons usage;
3. Action cable - for simplify work with websockets;
4. Axios - for simlify requests to server;
5. React-material-ui-form-validator - for simplify custom form rules generation;

## Not solved tasks:
* No test coverage

## Difficulties:
* Setting up basic project environments - this third app version - first was generated using rails-react gem, second react_on_rails, and last one - separated client and api apps;

* Problem with creating/updating user file, but it was easily fixed by changing request headers and used formData for building request;

* Breadcrumbs was created mannualy and hardcoded, in post show page has a problem with react lifecycle - When I'm 
  updating navbar, I actually update App component state, and this updates post compenent, I get maximum update deep error,     thats why I'm still using axios request there instead of redux action;
