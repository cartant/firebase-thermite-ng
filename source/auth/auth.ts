/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import * as firebase from "firebase";

import { Injectable, NgZone } from "@angular/core";
import { ThermiteAuth } from "firebase-thermite/auth";
import { ThermiteApp } from "../app";
import { enterZone } from "../zone";

export { ThermiteAuth };

function authFactory(app: firebase.app.App, ngZone: NgZone): ThermiteAuth {

    return new ThermiteAuth(app, enterZone(ngZone));
}

export const ThermiteAuthProvider = {
    deps: [ThermiteApp, NgZone],
    provide: ThermiteAuth,
    useFactory: authFactory
};
