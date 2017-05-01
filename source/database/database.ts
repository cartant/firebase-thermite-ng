/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import * as firebase from "firebase/app";
import "firebase/database";

import { Injectable } from "@angular/core";
import { ThermiteDatabase } from "firebase-thermite/database";
import { ThermiteApp } from "../app";

export { ThermiteDatabase };

function databaseFactory(app: firebase.app.App): ThermiteDatabase {

    return new ThermiteDatabase(app);
}

export const ThermiteDatabaseProvider = {
    deps: [ThermiteApp],
    provide: ThermiteDatabase,
    useFactory: databaseFactory
};
