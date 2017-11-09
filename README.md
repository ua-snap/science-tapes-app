# Science Tapes mobile app

This is a mobile app prototype for the Science Tapes audio series. It implements several key features:

- Pulls metadata and audio files for each episode from a Drupal 8 web services endpoint.
- Plays audio files using the [Ionic Audio for Ionic 3](https://github.com/arielfaur/ionic-audio) plugin.
- Pops up a feedback survey when an episode finishes (only once per episode).

The full-fledged version of this app will need to:

- Submit feedback from the survey form to either an email address, Drupal web services endpoint, or both.
- Provide a way to deliver supporting visual materials for each episode. For example, figures, or occasional video animations.
- Provide support for background notifications. The app should pop up a message when a new episode is available and possibly other news as well. [Firebase](https://firebase.google.com/) may be needed for this.

This prototype has been tested on the following software versions:

- Ionic 3.13.0
- Cordova 7.0.1
- Ubuntu 14.04.5 LTS
- Android 5.01

It has not been tested on iOS yet.

## Installation

1. Follow [Ionic's instructions to install Ionic and Cordova](http://ionicframework.com/docs/v1/guide/installation.html).
1. Clone this repository.
1. Inside the repository directory, install dependencies:

   ```
   npm install
   ionic cordova platform add android
   ```

1. Add the real episode JSON endpoint URL to `src/providers/episode-service/episode-service.ts`.

1. Run the app:

   To run on the Android emulator:

   ```
   ionic cordova emulate android
   ```

   To run on a real Android device, connected via USB:

   ```
   ionic cordova run android
   ```