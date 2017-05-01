/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */
/*tslint:disable:no-unused-expression*/

import * as firebase from "firebase/app";
import "firebase/database";

import { inject, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { ThermiteApp } from "./app";

import {
    firebaseApiKey,
    firebaseAuthDomain,
    firebaseDatabaseUrl,
    firebaseStorageBucket,
    timeout
} from "../constants-spec";

import { ThermiteModule } from "../module";

describe("app", function (): void {

    /*tslint:disable-next-line:no-invalid-this */
    this.timeout(timeout);

    let app: ThermiteApp;

    afterEach(() => {

        return app ? app.delete() : Promise.resolve();
    });

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                ThermiteModule.initializeApp({
                    apiKey: firebaseApiKey,
                    authDomain: firebaseAuthDomain,
                    databaseURL: firebaseDatabaseUrl,
                    storageBucket: firebaseStorageBucket
                }, "temporary")
            ]
        });
    });

    beforeEach(inject([ThermiteApp], (app_: ThermiteApp) => {

        app = app_;
    }));

    it("should implement auth", () => {

        expect(app).to.respondTo("delete");
    });

    it("should implement database", () => {

        expect(app).to.respondTo("database");
    });

    it("should implement delete", () => {

        expect(app).to.respondTo("delete");
    });

    it("should implement messaging", () => {

        expect(app).to.respondTo("messaging");
    });

    it("should implement storage", () => {

        expect(app).to.respondTo("storage");
    });
});
