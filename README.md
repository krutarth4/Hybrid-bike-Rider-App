# README

# BikeRider App

The directory structure of this project is taken from the example project of dev-latest-ui. This Project is based on the cross-platform framework Ionic .

- [Getting Started](about:blank#getting-started)
    - [Source Code & Project Structure](about:blank#source-code--project-structure)
    - [Install the Prerequisites](about:blank#install-the-prerequisites)
- [Recommended Configuration](about:blank#recommended-configuration)
    - [Disable Auto-Save](about:blank#disable-auto-save)
- [Transpiling & Running the App](about:blank#transpiling--running-the-app)
    - [Browser](about:blank#browser)
    - [Android Device](about:blank#android-device)
- [Troubleshooting](about:blank#troubleshooting)
    - [Hook for before_prepare cannot be started](about:blank#hook-for-beforeprepare-cannot-be-started)
    - [Gradle cannot be found](about:blank#gradle-cannot-be-found)
        - [A. Install Gradle](about:blank#a-install-gradle)
        - [B. Fix Cordova’s Detection Mechanism](about:blank#b-fix-cordovas-detection-mechanism)
        - [C. Install Gradle Manually](about:blank#c-install-gradle-manually)
        - [D. Install Android Studio](about:blank#d-install-android-studio)
    - [Source path does not exist](about:blank#source-path-does-not-exist)

## Getting Started

This section describes the setup for the local development environment.

### Source Code & Project Structure

Check out the source code from Gitlab create a new development branch:

```bash
git clone ssh://git@gitlab-cos.b.dfki.de:10022/smart-mobility/opensourcelabmobilityapp.git

git checkout dev_latest_ui
```

Take a look on the page *[Project Structure](https://ionicframework.com/docs/v3/intro/tutorial/project-structure/)* of the Ionic docs to get an idea on how Ionic apps usually look like and the development conventions. Moreover, it explains the roles of the individual components.

> Important: Compared to Cordova projects, the source files are located in /src and not in /www. The /www directory contains generated files which will be overwritten when building the project.
> 

So far, the only added view is Home (see sidebar in burger menu). It contains the Leaflet-based map and shows the user’s current position. It contains forms to enter the start and destination, and makes a REST API call using GET to get the position of all users. The code of the REST API call is located in the file `/rest-api/rest-api.ts`. To add a new view to the project, you can use `ionic generate page`.

### Install the Prerequisites

The following list shows software prerequisites for development, and for running the app. Following, the software that needs to be installed manually before installing the remaining packages automatically:

<aside>
💡 For Mac users: make sure [Homebrew](https://brew.sh/) is installed

</aside>

- **Android SDK**
    - The easiest way is to use the Android Studio (GUI) which can be found on [Android Developer](https://developer.android.com/studio/index.html#downloads), and then to install the `Android SDK Build Tools version >= 26.x`
    - Alternatively, you can use the sdk-tools (see section *[Command line tools only](https://developer.android.com/studio/index.html#downloads)*) and install the build tools using the `sdkmanager`:
        - See the available versions of the build-tools: `sdkmanager --list | grep build`
        - Install a specific version: `sdkmanager "build-tools;29.0.2"`
        - See the [Android user guide](https://developer.android.com/studio/command-line/sdkmanager#install_packages) for more details
- **Gradle** – tested with v^5.6.1
    - This is only needed if you did not install Android Studio, as Gradle is part of Android Studio (but advised to install gradle directly if not building an app through android studio)
    - Gradle is available on its official *[Releases](https://gradle.org/releases/)* page
        
        ![Screenshot 2023-06-13 at 09.32.32.png](README%20a463e78d645840099e77c63a94093b5b/Screenshot_2023-06-13_at_09.32.32.png)
        
- **Java JDK 8** – tested with v1.8.0_191
    - The latest Java version will not work, therefore it is important to stick to Java 8.
    - Java8 installer is available at [oracle.com](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
    - Make sure that `java -version` prints a version number starting with `1.8.x`.
- **Apache ANT** – tested with v1.10.5
    - Windows: ANT just needs to be extracted and added to the path
        - Download the ZIP version from **ant.apache.org**
        - Set `ANT_HOME` to the Apache ANT directory, e.g., `set ANT_HOME=C:\tools\apache-ant-1.10.5`
    - MacOS: Use brew and run `brew install ant`
- **Node.js** – tested with v16.15.1
    - Install using the installers available at [nodejs.org](https://nodejs.org/en/)
    - Install using : `brew install node`
- **Cordova CLI** – tested with v9.0.0
    - Install using `npm install -g cordova`
- **Ionic** framework – tested with v6.16.3
    - Install using: `npm install -g ionic`
- Npm version: tested with [v8.11](https://docs.npmjs.com/cli/v6/commands/npm-install)
- To check the installed version `ionic info`
    
    ![Screenshot 2023-06-27 at 09.40.22.png](README%20a463e78d645840099e77c63a94093b5b/Screenshot_2023-06-27_at_09.40.22.png)
    

## Recommended Configuration

This section describes the recommended configuration.

### Disable Auto-Save

Starting from Cordova v7, auto-saving is enabled by default. However, it may cause problems due to the fact that Cordova’s `plugin.xml` and npm’s `package.json` interpret file paths differently, and auto-saving will write the same paths into both configuration files.

Autosave can be disabled by executing: `cordova config set autosave false`.

## Transpiling & Running the App

This section explains the steps to run the application in a browser (e.g., for debugging) and to build an APK that can be installed on an Android device.

**NOTE:** The instructions following assume that you have installed **all prerequisites** described in the *[Install the Prerequisites](about:blank#install-the-prerequisites)* section.

## Installing nearby plugin

The cordova nearby plugin is developed by DFKI. It is advised to download the plugin locally and add the path of the plugin to the config.xml

Clone the repo (make sure you have access to the repo and the connectionis over a secure Wlan or over DFKI vpn)

```bash
git clone https://gitlab-cos.b.dfki.de/socialwear/cordova-plugin-nearby-mesh-network.git
```

Add the cloned repo path to the `Package.json` file under devdependencies 

```bash
"cordova-plugin-nearby-meshnetwork": <path to the nearby plugin folder>,
```

## Steps to follow to build APK  successfully

- [ ]  Make sure ionic, angular gradle and cordova are glocally installed on the computer
- [ ]  Make sure you are on dev_latest_ui branch
- [ ]  delete any node_module folder, platform folder and android folder if present
- [ ]  start fresh with npm install
    - [ ]  Check if there is any error present
    - [ ]  download the dependency manually
- [ ]  create platform files and add all the plugin `ionic cordova platform add android`
    - [ ]  cordova plugin can not be installed ~ [troubleshoot](https://www.notion.so/README-a463e78d645840099e77c63a94093b5b?pvs=21)
- [ ]  prepare the android file `ionic cordova prepare android`
- [ ]  now run `ionic serve`
    - [ ]  make sure there is no error and the project compiles correclty
- [ ]  Now when project is successfully compiled try building an apk
    - [ ]  make sure as stated in [](https://www.notion.so/README-a463e78d645840099e77c63a94093b5b?pvs=21) [Prerequisites](https://www.notion.so/README-a463e78d645840099e77c63a94093b5b?pvs=21) and gradle is running
    - [ ]  If come accross any error use google (as it is your best friend) to solve it
- [ ]  Have fun learning and building the apk

### Browser

In order to run [ionic app](https://ionicframework.com/docs/developing/previewing) in web browser, run `ionic serve` in the console you should see a web browser open a window of your web application. For current version not suitable as FCM plugin is not supported by the browser hence connection with backend will fail every-time. 

If compiling the app is successful then you should see compilation information and at the end you should see an http link with a port where your application is running 

![Screenshot 2023-06-13 at 20.56.28.png](README%20a463e78d645840099e77c63a94093b5b/Screenshot_2023-06-13_at_20.56.28.png)

You can stop the app server by pressing CTRL+C. As an alternative to `ionic serve` which opens the browser automatically, you can use `ionic serve -b` which does not open your default browser.

Changes in `src` will automatically be detected, compiled, and the served web page will be updated. In general, there is no need to stop and restart the application server during development.

### Android Device

To build the Android APK, the following steps are required to do **once**:

- Add the Android platform to Cordova: `ionic cordova platform add android`.
    - To outline all pre-installed plugins in the project environment, type: `cordova platforms ls`.
        
        ![Screenshot 2023-06-13 at 21.16.57.png](README%20a463e78d645840099e77c63a94093b5b/Screenshot_2023-06-13_at_21.16.57.png)
        
        ![Screenshot 2023-06-13 at 21.17.32.png](README%20a463e78d645840099e77c63a94093b5b/Screenshot_2023-06-13_at_21.17.32.png)
        

Thereafter the app is ready to be build. To build an Android APK, run `ionic cordova build android` for building the Android APK, or `ionic cordova run android` for building the APK and installing it on the first available Android device.

A message like *The plugin @ionic/cli-plugin-cordova is not installed. Would you like to install it and continue? (Y/n)* should appear. Accept it by typing `Y`.

For any further instruction or advance flags refer to the docuementation provided by [Ionic](https://ionicframework.com/docs/cli/commands/cordova-build) itself

## Debugging

### Chrome Browser

Make sure the developer mode is switched on in the device

go to the URL in chrome to see the enlisted emulator or connected devices

[chrome://inspect/#devices](chrome://inspect/#devices)

### Android studio IDE

You can also see debug logs in logcast of android studio which provides Device level logs too. 

## Troubleshooting

Following the steps to troubleshoot common problems are given.

## ionic cordova plugin

if there are some plugin which are not installing beacuse of other plugin version mismatch then just use —force flag 

native-geocoder problem : 

```bash
ionic cordova plugin add cordova-plugin-nativegeocoder --force 
```

if any other problem with other plugin related to swift version error solve it as statet above 

### Hook for before_prepare cannot be started

It might be necessary on *nix systems to set the `executable` flag for the build script `hooks/before_prepare/build-mmir.js`. To do that, run `chmod -R u+x hooks`.

### Gradle cannot be found

Currently, there is a problem with integrating Android’s build system `gradle` into `cordova` properly. If you get an error message that `gradle` could not be found, please try the following solutions.

### A. Install Gradle

As mentioned in the [Prerequisites](about:blank#prerequisites) section, if you just installed the `sdk-tools`, instead of the whole Android Studio, you need to manually install Gradle. If you manually installed Gradle, it might be necessary to add Gradle to the PATH such that it can be found when running `gradle` in a terminal.

### B. Fix Cordova’s Detection Mechanism

> Use this method, if you have Android Studio installed in a non-default location
> 

Open the file `platforms/android/cordova/lib/check_reqs.js` and find implementation of function `module.exports.get_gradle_wrapper`.

Within the function, add the following code right before `if (module.exports.isDarwin()) {...`, resulting in:

```jsx
var program_dir;if (process.env['ANDROID_STUDIO_HOME']){  // ADDED LINE    androidStudioPath = path.join(process.env['ANDROID_STUDIO_HOME'], 'gradle');  // ADDED LINE} else if (module.exports.isDarwin()) {  // MODIFIED LINE    ...}
```

Set the environment variable `ANDROID_STUDIO_HOME` to the path where you installed Android Studio. For example, on *nix systems run `export=/path/to/android`.

### C. Install Gradle Manually

Install `gradle` into the default location, so that Cordova’s build script will correctly detect its presence. For install instructions, see the [Prerequisites](about:blank#prerequisites). Make sure the gradle daemon is running locally before compiling APK

### D. Install Android Studio

Install Android Studio into the default location, so that Cordova’s build script will correctly detect its presence.

![Screenshot 2023-06-27 at 17.53.01.png](README%20a463e78d645840099e77c63a94093b5b/Screenshot_2023-06-27_at_17.53.01.png)

## Google API key

The Rest provider contains also the information the communicate with the googlemap autocomplete service this is why it is required to create a googleapi account in order to get an API key and to put it in the code: 1. [Get an API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) 2. put the API key in the Resprovider configuration. The Restprovider `.ts`file is called `rest-api.ts` and could be found in the services folder `src/app/services/rest-api/rest-api.service.ts` .

```
// the Google API key
  mykey:string = "<add google API key>"
```

## Geopify API

Please refer to the [documentation](https://apidocs.geoapify.com/playground/icon/) to generate an API for the markers. The current version uses online marker as during development it is easier to change the marker configuration without making any changes locally for the icon.

To generate an api : go to [ProjectDashboard](https://myprojects.geoapify.com/projects) and create your own api.

The main purpose of the geopify usage was to create custom made api automatically from web and use it in our app. Rather than storing a lot of icons with different colours, Geopify allows to create and have custom made icon through an API call.

### Troubleshooting FCM plugin error

- If you are using `ionic serve` and gets an error because of FCM plug .
- install the plugins first as the FCM service is currently used directly through plugin

```bash
ionic cordova platform add android 
```

if some plugin is missing : 

ionic cordova plugin add <missing_plugin_name> --force

ionic cordova prepare android