/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import * as firebase from "firebase";

import { Injectable, NgZone } from "@angular/core";
import { ThermiteDatabase } from "firebase-thermite/database";
import { ThermiteApp } from "../app";
import { enterZone } from "../zone";

export { ThermiteDatabase };

function databaseFactory(app: firebase.app.App, ngZone: NgZone): ThermiteDatabase {

    return new ThermiteDatabase(app, enterZone(ngZone));
}

export const ThermiteDatabaseProvider = {
    deps: [ThermiteApp, NgZone],
    provide: ThermiteDatabase,
    useFactory: databaseFactory
};
