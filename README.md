# PCW (Private Cloud Watcher)

Manage all your private cloud resources with this little web app.

### Core 3rd-party depencencies

PCW requires an API RESTful webservice to work. You'll need the following Endpoint's URIs:

| HTTP Verb | URI                     | Success | Error | Description                                |
|-----------|-------------------------|---------|-------|--------------------------------------------|
| GET       | {domain}/user           | 200     | 404   | Gets all users. (Accepts queries params)   |
| POST      | {domain}/user           | 201     | 404   | Inserts a user into DB/ Persistence layer. |
| GET       | {domain}/user/:username | 200     | 404   | Gets a user by username.                   |

In addition, you'll need a persitance layer (Redis) or a database instance running on the cloud to store data.

You are able to use any Webservice architecture (Serverless, Instance-based, etc..).

Works better with AWS (Amazon Web Services), but you can use GCP (Google Cloud Platform), DigitalOcean or Heroku.

## Extras

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
