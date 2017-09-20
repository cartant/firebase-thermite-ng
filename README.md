# firebase-thermite-ng

[![NPM version](https://img.shields.io/npm/v/firebase-thermite-ng.svg)](https://www.npmjs.com/package/firebase-thermite-ng)
[![Build status](https://img.shields.io/travis/cartant/firebase-thermite-ng.svg)](http://travis-ci.org/cartant/firebase-thermite-ng)
[![dependency status](https://img.shields.io/david/cartant/firebase-thermite-ng.svg)](https://david-dm.org/cartant/firebase-thermite-ng)
[![devDependency Status](https://img.shields.io/david/dev/cartant/firebase-thermite-ng.svg)](https://david-dm.org/cartant/firebase-thermite-ng#info=devDependencies)
[![peerDependency Status](https://img.shields.io/david/peer/cartant/firebase-thermite-ng.svg)](https://david-dm.org/cartant/firebase-thermite-ng#info=peerDependencies)
[![Greenkeeper badge](https://badges.greenkeeper.io/cartant/firebase-thermite-ng.svg)](https://greenkeeper.io/)

### What is it?

`firebase-thermite-ng` contains the Angular modules for `firebase-thermite` - a library of RxJS observables for Firebase.

### Why might you need it?

You might need it if the official Angular library for Firebase - [AngularFire2](https://github.com/angular/angularfire2) - does not suit your requirements.

### How does it differ from AngularFire2?

The differencees between `firebase-thermite` and AngularFire2 are listed [here](https://github.com/cartant/firebase-thermite#differences).

In addition to those, `firebase-thermite-ng` differs from AngularFire2 in that it ensures subscribers execute within the Angular zone. With AngularFire2, subscribers execute within the zone in which the observable was created.

## Usage

```ts
import {
  ThermiteAuthModule,
  ThermiteDatabaseModule,
  ThermiteModule
} from "firebase-thermite-ng";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    ...
    ThermiteModule.initializeApp({
      apiKey: "...",
      authDomain: "...",
      databaseURL: "...",
      messagingSenderId: "...",
      storageBucket: "..."
    }),
    ThermiteAuthModule,
    ThermiteDatabaseModule
  ]
})
class AppModule {}
```

With the modules imported, `ThermiteAuth` and `ThermiteDatabase` are then available for injection into components, etc.

`ThermiteAuth` implements [`firebase.auth.Auth`](https://firebase.google.com/docs/reference/js/firebase.auth.Auth) and `ThermiteDatabase` implements [`firebase.database.Database`](https://firebase.google.com/docs/reference/js/firebase.database.Database) and both include additional methods that create observables. See [`auth/auth.ts`](https://github.com/cartant/firebase-thermite/blob/master/source/auth/auth.ts) and [`database/database.ts`](https://github.com/cartant/firebase-thermite/blob/master/source/database/database.ts) in `firebase-thermite`.