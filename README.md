This is a resume page I built for myself.

If you want to use this template for your self edit the following files
app/scripts/app.js
app/images/profile.jpg
app/docs/Nigel_David_Resume_xxxx.pdf

Note: If you want to host it on IBM Cloud/Bluemix edit manifest.yml. Follow the steps in the IBM Cloud Hosting Info section below. If you're an IBM employee make sure to use the command cf login --sso with the windows command prompt (no third party CLI).

Credit for the bootstrap template comes from https://github.com/BlackrockDigital/startbootstrap-resume.

Current features and tools:
Bootstrap
AngularJS 1.x
NPM
ExpressJS

Future features:
Lazy loading of experience collection
Add favicon
Loop through skills as an array instead of as a item in a collection
Unit test with Jasmine and Karma

IBM Cloud Hosting Info:

The Node.js app uses [Express Framework](https://expressjs.com) and [Cloudant noSQL DB service](https://console.bluemix.net/catalog/services/cloudant-nosql-db) to add information to a database and then return information from a database to the UI. To learn more about how the app connects to Cloudant, see the [Cloudant library for Node.js](https://www.npmjs.com/package/cloudant).

The following steps are the general procedure to set up and deploy your app to IBM Cloud. See more detailed instructions in the [Getting started tutorial for Node.js](https://console.bluemix.net/docs/runtimes/nodejs/getting-started.html#getting-started-with-node-js-on-bluemix).