/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import { NgModule } from "@angular/core";
import { ThermiteAppModule } from "../app";
import { ThermiteAuthProvider } from "./auth";

@NgModule({
    declarations: [],
    exports: [],
    imports: [ThermiteAppModule],
    providers: [ThermiteAuthProvider]
})
export class ThermiteAuthModule {}
