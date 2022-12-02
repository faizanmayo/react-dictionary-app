# react-dictionary-app
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

How to use App
1: Write word in search field to get the meanings and related words. 2: If you want to add new word in dictionary then write word in search and click on ADD WORD button the word will added and toast message show in bottom of app. #: If you delete specific word from the dictionary. write word in input field and click the DELETE button, the confitmation popup modal will show, then click the delete button , word will deleted from the Api.

Tools And Languages.
following are tools and languages we used for this project.

1: React Material UI library for UI components. 2: SCSS (for styling) 3: Javascipt and react.

API Information
Our API's are built in ROR and they are hosted on heoku, they might lag a bit because of that.

Search Dictionary GET API https://test-dictionary-app.herokuapp.com/api/v1/dictionaries/search?word= Works when you search a word in the serach bar.

Add Word to Dictionary Post API https://test-dictionary-app.herokuapp.com/api/v1/dictionaries/add?word= Adds a word to dictionary through dialog box.

Delete Word from Dictionary Post API https://test-dictionary-app.herokuapp.com/api/v1/dictionaries/remove?word= Delete's a wod to dictionary through dialog box
