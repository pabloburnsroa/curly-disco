# Monsters App

Using this app as a way to build react fundamentals and skills.
Created using npx create-react-app

Entry point for each react app is index.js
React and react-dom packages required to build our apps.

```
ReactDOM.render (
  <App>,
  document.getElementById('root')
)
```

Renders code within the `<App>` component at root element located in the public folder created by react, includes index.html and root div that have the app rendered into.

`npm build` will optimize the code in our app. Lowest possible memory app.

### Babel and webpack

What do they do?
Babel condenses the react code and compiles is it into very basic javascript that browswers can understand.
Webpack - makes code more efficient, breaks code into chunks so user only gets the relevant portion of it.

## Classes vs Hooks

### Class components

Important to know when the app re-renders
See App.js for example of how we form a class component to render.

## What is this App all about?

Rolodex that displays user profiles (monsters).

## React.StrictMode

With react 18, `<React.StrictMode>` is now double rendering to catch anything that might be going wrong...
