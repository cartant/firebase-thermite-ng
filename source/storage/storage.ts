/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import * as firebase from "firebase/app";
import "firebase/storage";

import { Injectable } from "@angular/core";
import { ThermiteStorage } from "firebase-thermite/storage";
import { ThermiteApp } from "../app";

export { ThermiteStorage };

function storageFactory(app: firebase.app.App): ThermiteStorage {

    return new ThermiteStorage(app);
}

export const ThermiteStorageProvider = {
    deps: [ThermiteApp],
    provide: ThermiteStorage,
    useFactory: storageFactory
};
