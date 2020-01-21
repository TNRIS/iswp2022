# Interactive State Water Plan (ISWP) 2022

Web application for the 2022 Texas State Water Plan.

## Developing

### Prerequesites:

1. Install [Node](https://nodejs.org/en/download/) >=8.16.1
2. Install AWS Command Line Interface and configure with AWS credentials (IAM Key, Secret, Region). http://docs.aws.amazon.com/cli/latest/userguide/installing.html
3. Install [Yarn](https://yarnpkg.com/en/docs/install) >=1.1
4. Download a copy of the water plan data sqlite3 database (https://s3.amazonaws.com/tnris-misc/iswp/2022/cache.db) and place it at `./src/app/db/cache.db`
5. Install dependencies: cd into `./src` and run `yarn install`
6. Install the custom Webfont by following the instructions in 'Webfont' section below

#### Webfont

Download a copy of the licensed web font we are using from S3 at tnris-misc/iswp/2017/gill-sans.zip and unzip the contents to app/public/static/webfonts/ (this requires credentials to our S3 bucket). If you are using a fork of this you can just remove the custom font usage in `layout.swig` and in `main.scss`.

This command should do it for you (requires aws cli and credentials): cd into `./src` and run `aws s3 cp s3://tnris-misc/iswp/2017/gill-sans.zip gill-sans.zip; unzip gill-sans.zip -d app/public/static/webfonts/; rm gill-sans.zip`


### Developing
All commands run from src directory: `cd src` from project root

Upon the first local build, errors on startup may be related to the initial webpack assets not existing yet. If you encounter errors on the initial build, try running `yarn run webpack` and then continue to run the commands below.

* `yarn run dev-start` in a terminal to continuously build client-side scripts and css and serve the application. view at http://localhost:3333.

* `yarn test` to run the test scripts

### Deploying

#### Production

1. make sure you can build the app locally, then just hop over to deployments repo and follow those instructions

#### Staging

You can also build and run the app with `NODE_ENV` set to "staging" to make a version that serves a non-indexed robots.txt and does not use the production Google Analytics code. Otherwise follow the Production steps from above.

#### Temp Code changes for 2022 data while in progress. TODO!

these can be reverted after data is clean and finalized.

1. `src/app/public/src/util/CustomPropTypes.es`, line 63; CapitalCost requirement should be reinstated once all null values have been populated.-- `.isRequired`
2. `src/app/public/src/util/CustomPropTypes.es`, line 64; OnlineDecade requirement should be reinstated once all null values have been populated. 'OneOf' for decade options should be reinstated also-- `.oneOf(constants.DECADES).isRequired`
