/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */
/*tslint:disable:no-unused-expression*/

import * as firebase from "firebase/app";
import "firebase/auth";

import { inject, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { ThermiteApp } from "../app";
import { ThermiteAuth } from "./auth";
import { timeout } from "../constants-spec";
import { app } from "../firebase-spec";
import { ThermiteAuthModule } from "./module";

describe("auth", function (): void {

    /*tslint:disable-next-line:no-invalid-this */
    this.timeout(timeout);

    let auth: ThermiteAuth;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ThermiteAuthModule],
            providers: [
                { provide: ThermiteApp, useValue: app }
            ]
        });
    });

    beforeEach(inject([ThermiteAuth], (auth_: ThermiteAuth) => {

        auth = auth_;
    }));

    it("should expose authState", () => {

        expect(auth).to.have.property("authState");
    });

    it("should implement onAuthStateChanged", () => {

        expect(auth).to.respondTo("onAuthStateChanged");
    });
});
