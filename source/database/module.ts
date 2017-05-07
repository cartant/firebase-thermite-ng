/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import "firebase/database";

import { NgModule } from "@angular/core";
import { ThermiteAppModule } from "../app";
import { ThermiteDatabaseProvider } from "./database";

@NgModule({
    declarations: [],
    exports: [],
    imports: [ThermiteAppModule],
    providers: [ThermiteDatabaseProvider]
})
export class ThermiteDatabaseModule {}
