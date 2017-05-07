/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import "firebase/app";

import { NgModule } from "@angular/core";
import { ThermiteAppProvider } from "./app";

@NgModule({
    declarations: [],
    exports: [],
    imports: [],
    providers: [ThermiteAppProvider]
})
export class ThermiteAppModule {}
