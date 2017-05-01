/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import { Provider } from "@angular/core";
import { ThermiteApp, ThermiteAppConfigToken } from "./app";

export function provideMock(mock: any): Provider[] {

    return [{
        deps: [ThermiteAppConfigToken],
        provide: ThermiteApp,
        useFactory: (config: { [key: string]: string }): ThermiteApp => mock.initializeApp(config)
    }];
}
