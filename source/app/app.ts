/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import {
    Inject,
    Injectable,
    InjectionToken,
    ModuleWithProviders,
    NgModule
} from "@angular/core";

import { ThermiteApp } from "firebase-thermite/app";
import { firebase } from "../firebase";

export const ThermiteAppConfigToken = new InjectionToken<{ [key: string]: string }>("ThermiteAppConfigToken");
export const ThermiteAppNameToken = new InjectionToken<string>("ThermiteAppNameToken");

export { ThermiteApp };

export function appFactory(
    config: { [key: string]: string },
    name?: string
): ThermiteApp {

    let app: firebase.app.App;

    try {
        if (name) {
            app = firebase.initializeApp(config, name);
        } else {
            app = firebase.initializeApp(config);
        }
    } catch (error) {
        // tslint:disable-next-line
        console.log(error);
        app = firebase.app(null);
    }
    return new ThermiteApp(app);
}

export const ThermiteAppProvider = {
    deps: [ThermiteAppConfigToken, ThermiteAppNameToken],
    provide: ThermiteApp,
    useFactory: appFactory
};
