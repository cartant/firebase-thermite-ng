/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import { ModuleWithProviders, NgModule } from "@angular/core";

import {
    ThermiteAppConfigToken,
    ThermiteAppModule,
    ThermiteAppNameToken,
    ThermiteAppProvider
} from "./app";

@NgModule({
    declarations: [],
    exports: [],
    imports: [],
    providers: []
})
export class ThermiteModule {

    static initializeApp(config: { [key: string]: string }, name?: string): ModuleWithProviders {
    return {
        ngModule: ThermiteAppModule,
        providers: [
            { provide: ThermiteAppConfigToken, useValue: config },
            { provide: ThermiteAppNameToken, useValue: name }
        ]
    };
  }
}
