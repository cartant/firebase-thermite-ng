/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import { Injectable, NgZone } from "@angular/core";
import { ThermiteMessaging } from "firebase-thermite/messaging";
import { ThermiteApp } from "../app";
import { firebase } from "../firebase";
import { enterZone } from "../zone";

export { ThermiteMessaging };

function messagingFactory(app: firebase.app.App, ngZone: NgZone): ThermiteMessaging {

    return new ThermiteMessaging(app, enterZone(ngZone));
}

export const ThermiteMessagingProvider = {
    deps: [ThermiteApp, NgZone],
    provide: ThermiteMessaging,
    useFactory: messagingFactory
};
