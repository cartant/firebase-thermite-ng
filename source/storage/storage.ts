/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import * as firebase from "firebase/app";
import "firebase/storage";

import { Injectable, NgZone } from "@angular/core";
import { ThermiteStorage } from "firebase-thermite/storage";
import { ThermiteApp } from "../app";
import { enterZone } from "../zone";

export { ThermiteStorage };

function storageFactory(app: firebase.app.App, ngZone: NgZone): ThermiteStorage {

    return new ThermiteStorage(app, enterZone(ngZone));
}

export const ThermiteStorageProvider = {
    deps: [ThermiteApp, NgZone],
    provide: ThermiteStorage,
    useFactory: storageFactory
};
