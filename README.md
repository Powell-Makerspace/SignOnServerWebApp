# SigninAdminSite

This project serves to provide a usable administrative portal for the Sign-In server 
application. The application provides a means for easily signing into the powell makerspace
and for correcting and managing membership information.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) 
version 6.2.9. 

## Development server

### Generating the client library

This angular application makes use of swagger and an auto-generated client library for 
handling communication with the backend server. This swagger client library lives in the
`src/app/api` directory. However, this generated code is not kept in git and will need
to be generated upon first cloning the repo. The client code can be generated by running
the `npm run swagger` command.

### Starting the development Server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will 
automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` 
directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
