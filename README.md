# Protractor-Framework

This repo shows the basic framework for automation/unit testing for Angular websites via sample angular website [ https://juliemr.github.io/protractor-demo/ ].

## Table of contents

1. Overview
2. Pre-requisites
3. Execution Commands

## OVERVIEW

Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.


--------------
## PREREQUISITES


## Node.js
Protractor is a Node.js program. To run Protractor, you will need to have Node.js installed. Check the version of node you have by running node --version. It should be greater than v0.10.0.

Node.js comes with the Protractor npm package, which you can use to install Protractor.


## Installing Protractor

Use npm to install Protractor globally (omit the -g if you’d prefer not to install globally): npm install -g protractor

Use npm to install Protractor to local: npm install -g protractor --save-dev


## Installing jasmine-data-provider

Use npm to install jasmine-data-provider to local: npm i jasmine-data-provider --save-dev


## Installing protractor-jasmine2-html-reporter

Use npm to install protractor-jasmine2-html-reporter to local: npm i protractor-jasmine2-html-reporter --save-dev

--------------

## EXECUTION COMMANDS

Use below commands in Termincal of your local existing framework directory

### 1. webdriver-manager update
Update the Web driver manager. The web driver manager is used for running the tests against the angular web application in a specific browser. After Protractor is installed, the web driver manager needs to be updated to the latest version. This can be done by running the following command in the command prompt.

### 2. webdriver-manager start
Start the web driver manager. This step will run the web driver manager in the background and will listen to any tests which run via protractor.

Use below command in another Termincal of your local existing framework directory
1. protractor test
