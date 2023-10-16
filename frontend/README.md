**Template for web project with auth micro app integrated**

## Features integrated in this template

You’ll be able to add some changes to the code to activate following features

1. Auth micro app
2. Header and nav bar layout
3. Unit test library(React testing library)
4. Sentry
5. Amplify
6. SonarCloud
7. Typescript
8. Webpack
9. Redux pipeline
10. Infra market web component library integration
11. eslint and husky

---

## Changes to make

Changes related to project/repository name.

1. Go back to the **package.json** page and set your project name
2. Change env files to create your own url key. This will be localhost url for .env file.
3. Create a project in sentry and use give it's dsn in env files. Search **your-sentry-dsn** and replace all the places.
4. Go to **.sentryclirc** and change the sentry project name(search **your-sentry-project**).
5. Setup SonarCloud project and give its name in **sonar-project.properties**(search **your_project_repo_name**)
6. Setup Amplify to deploy it. yml file is same for all the project.
7. Set your project name in **index.html** file(search **Your Project Name**)
8. Set your app title in **locale** files(search **Your App Title**)
9. Change the platform for login micro app in Login component(search **your_app_platform**)

Changes related to your project requirement
1. Add more modules in **Sidebar** component for which you need sidebar navigation

Note: Use yarn

---
