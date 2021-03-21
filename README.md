# React Promo Code App
This is a simple promo code app, where you can search for service and reveal promo codes. The app would display a list of promo codes.
Pull promo codes from the API (https://github.com/leadstar116/nestjs-promo-code-app). <br/>
As default, it is showing 10 promo codes.

## Used Stacks:
- React
- Redux
- Redux Thunk
- Webpack
- Unit Testing

## Main Functionalities of App

### Home page (browse with search)
- The page would be located on the root url ​`/` - display the users in a grid.
- Show each promo code data
- Ability to filter service by name.
- Ability to reset filter.
- Ability to copy promo code to the clipboard.
- Ability to change service status to “Activated” by clicking on the “Activate bonus” button.


## Screenshots
You can check video here: https://www.screencast.com/t/E1Lm0Ml9
<source src="https://content.screencast.com/users/SupremeDev/folders/Capture/media/53c5a8d0-bd20-4255-be25-f490dad967eb/TechSmithCapture.mp4" type="video/mp4">

# Project Run
This project is running with webpack, babel and yarn.

## API
You would need to download promo-code-app API and run it first (https://github.com/leadstar116/nestjs-promo-code-app).<br />
Or I hosted this API on the heroku so maybe you can just use it. (https://nestjs-promo-code-app.herokuapp.com/api) <br />

You can check more details about the API in it's repository.

## Available Scripts

In the project directory, you can run:

### `yarn install`
To install dependencies, please download the repository and run the command `yarn install`
I used
- yarn: v1.22.10
- node: v12.14.1

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
