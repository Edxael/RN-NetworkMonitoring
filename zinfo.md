# Notes while in Develop

### Drawer Navigator installation Error
After installing the [Drawer Navigator](https://reactnavigation.org/docs/drawer-navigator), the app was failing to start with various errors, it came back when I modyfi the file: `babel.config.js` To be like is shown below:  
```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin']
  };
};
```
Also run a different command to start the app: `npx expo start --clear`  


---
