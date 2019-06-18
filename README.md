```
Add an SSH key to your GitHub account

$ git clone git@github.com:ericson-cepeda/fe-app-react-native-js.git
$ git submodule update --init
$ yarn # npm install
$ react-native start # --reset-cache

```
### For iOS:

https://github.com/kmagiera/react-native-gesture-handler/issues/494
* Add `*.h` library
  1. Right click on Libraries => Add files.
  2. Select the library:
       
       `../node_modules/react-native-gesture-handler/ios/RNGestureHandler.xcodeproj`

* Add `*.a` build phase
    1. Build the project
    1. Select the root of the project => Build phases => Link binary

    1. Add the binary: `libRNGestureHandler.a`

### For Android:

#### Issues with Gesture handler and SVG icons?

```
# brew link --overwrite cocoapods
$ react-native link react-native-gesture-handler
$ react-native link react-native-vector-icons
$ react-native link react-native-svg
$ react-native link react-native-svghistory
```

### Adding individual modules

#### FontAwesome
```
npm i react-native-vector-icons
/usr/local/bin/react-native --verbose  link react-native-vector-icons
npm i --save react-native-svg # **
npm i --save @fortawesome/fontawesome-svg-core 
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-native-fontawesome
npm i --save @fortawesome/free-brands-svg-icons
````

- Issue with the icons:
https://github.com/bartgryszko/react-native-circular-progress/issues/156
  ```
  npm i --save react-native-circular-progress react-native-svg
  react-native link react-native-svg
  ```

#### Adding a new view
* Add Views/File.js
* Add tab to Navigation/NavTabs/index.js
  ```
  <FontAwesomeIcon name="File" icon={['fas', 'home']} />
  ```
* Import screen and add route to Navigation/routes.js

  ```
  import File from '../Views/File';
  {name: 'File', screen: file, icon: 'account-circle'},
  ```