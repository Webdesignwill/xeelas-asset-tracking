Prerequisites
=============

Development
-----------
- Git
- Gulp CLI globally

    $ npm install gulp-cli -g

- SASS Gem
- Bootstrap -v bootstrap@4.1
- Node v8.4.0  (noted in runtime.txt)
- Heroku toolbelt, to be able to deploy to Heroku from command

Deployment
-----------
Once the code is committed to master branch, then the staging environment is updated with the latest version.

Running Front-end
----------
After the repository has been cloned, change directory to the frontend root of
the application (same level as package.json), run the following to install
required packages :

    $ npm install

To then develop using the hot module replacement, simply run :

    $ npm run start:dev

Then open a browser to localhost:5000

Live Reload
-----------
The project uses LiveReload for instant updating of the CSS on the page.
