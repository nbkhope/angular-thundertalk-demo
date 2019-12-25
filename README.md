# Angular Thundertalk Demo

A demo of a single-page application using AngularJS and a Rails backend.

![AngularJS Demo](screenshot_smaller.png)

## Team

* [taodav](https://github.com/taodav)
* [nbkhope](https://github.com/nbkhope)

## Live demo on Heroku

http://share-your-thoughts.herokuapp.com

## Presentation Slides

https://prezi.com/y26anp9tpeo1/untitled-prezi/

## Installation

Run bundle to install all dependencies:

```
bundle install
```

Create, migrate, and seed the database:

```
bin/rake db:create db:migrate db:seed
```

Run the Rails server:

```
bin/rails s
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Frontend

The Rails server only serves a single view: **application.html.erb** in `app/views/layouts/`, which contains the single-page application as an Angular app. Inside that file, the scripts for Angular is included using a `javascript_include_tag` Rails helper. That will include everything that is required in `app/assets/javascripts/application.js`. That includes `angular`, `angular-ui-router`, and `angular-rails-templates`.

You can find the main script for the actual Angular application in `app/assets/javascripts/app.js`. That file defines the angular module for the application and establishes the routes (or states). The default state is 'home'. Note app.js is included from application.js because of the ` //= require_tree .` line.

You can find anything related to `home` inside the directory `app/assets/javascripts/home/`. There are two files there:

* **_home.html** contains the template for the home page
* **mainCtrl.js** contains the definition to the MainCtrl, a controller that takes care of the posts

You can find the service to communicate with the database to add/retrieve/upvote the posts in the file `app/assets/javascripts/posts/posts.js`. The service is implemented as a factory and uses [$http](https://docs.angularjs.org/api/ng/service/$http) to communicate with the server (this is similar to doing Ajax calls).
