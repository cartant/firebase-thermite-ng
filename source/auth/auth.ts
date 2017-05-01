/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import * as firebase from "firebase/app";
import "firebase/auth";

import { Injectable } from "@angular/core";
import { ThermiteAuth } from "firebase-thermite/auth";
import { ThermiteApp } from "../app";

export { ThermiteAuth };

function authFactory(app: firebase.app.App): ThermiteAuth {

    return new ThermiteAuth(app);
}

export const ThermiteAuthProvider = {
    deps: [ThermiteApp],
    provide: ThermiteAuth,
    useFactory: authFactory
};
