/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import * as firebase from "firebase/app";
import "firebase/messaging";

import { Injectable } from "@angular/core";
import { ThermiteMessaging } from "firebase-thermite/messaging";
import { ThermiteApp } from "../app";

export { ThermiteMessaging };

function messagingFactory(app: firebase.app.App): ThermiteMessaging {

    return new ThermiteMessaging(app);
}

export const ThermiteMessagingProvider = {
    deps: [ThermiteApp],
    provide: ThermiteMessaging,
    useFactory: messagingFactory
};
