# Interactive State Water Plan (ISWP) 2022

Web application for the 2022 Texas State Water Plan.

## Developing

### Prerequesites:

1. Install [Node](https://nodejs.org/en/download/) >=8.16.1
2. Install AWS Command Line Interface and configure with AWS credentials (IAM Key, Secret, Region). http://docs.aws.amazon.com/cli/latest/userguide/installing.html
3. Download a copy of the water plan data sqlite3 database (https://s3.amazonaws.com/tnris-droc/iswp/2022/cache.db) and place it at `./src/app/db/cache.db`
4. Install dependencies: cd into `./src` and run `npm install`
5. Install the custom Webfont by following the instructions in 'Webfont' section below

#### Webfont

Download a copy of the licensed web font we are using from S3 at tnris-droc/iswp/2017/gill-sans.zip and unzip the contents to app/public/static/webfonts/ (this requires credentials to our S3 bucket). If you are using a fork of this you can just remove the custom font usage in `layout.swig` and in `main.scss`.

This command should do it for you (requires aws cli and credentials): cd into `./src` and run `aws s3 cp s3://tnris-droc/iswp/2017/gill-sans.zip gill-sans.zip; unzip gill-sans.zip -d app/public/static/webfonts/; rm gill-sans.zip`


### Developing
All commands run from src directory: `cd src` from project root

Upon the first local build, errors on startup may be related to the initial webpack assets not existing yet. If you encounter errors on the initial build, try running `npm run webpack` and then continue to run the commands below.

* `npm run dev-start` in a terminal to continuously build client-side scripts and css and serve the application. view at http://localhost:3333.

* `npm test` to run the test scripts

#### Production Build

1. Set `NODE_ENV` to "production"
2. Run `npm install` to install dependencies
3. Run `npm run webpack` to build production client side assets
4. Run the application with `npm start`. You can optionally set the `APP_PORT` environment variable to specify the port to listen to, otherwise 3333 will be used.

#### Deployment

1. Run the app locally via instructions above
2. Test locally to ensure changes are ready for production
3. Commit all changes and merge into the 'master' branch. the ci/cd build will automatically rebuild and deploy the application into production

#### Temp Code changes for 2022 data while in progress. TODO!

these can be reverted after data is clean and finalized.

1. `src/app/public/src/util/CustomPropTypes.es`, line 63; CapitalCost requirement should be reinstated once all null values have been populated.-- `.isRequired`
2. `src/app/public/src/util/CustomPropTypes.es`, line 64; OnlineDecade requirement should be reinstated once all null values have been populated. 'OneOf' for decade options should be reinstated also-- `.oneOf(constants.DECADES).isRequired`
