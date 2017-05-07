/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */
/*tslint:disable:no-unused-expression*/

import * as firebase from "firebase";

import { inject, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { ThermiteApp } from "../app";
import { timeout } from "../constants-spec";
import { ThermiteDatabase } from "./database";
import { app } from "../firebase-spec";
import { ThermiteDatabaseModule } from "./module";

describe("database", function (): void {

    /*tslint:disable-next-line:no-invalid-this */
    this.timeout(timeout);

    let database: ThermiteDatabase;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ThermiteDatabaseModule],
            providers: [
                { provide: ThermiteApp, useValue: app }
            ]
        });
    });

    beforeEach(inject([ThermiteDatabase], (database_: ThermiteDatabase) => {

        database = database_;
    }));

    it("should implement infiniteList", () => {

        expect(database).to.respondTo("infiniteList");
    });

    it("should implement info", () => {

        expect(database).to.respondTo("info");
    });

    it("should implement key", () => {

        expect(database).to.respondTo("key");
    });

    it("should implement list", () => {

        expect(database).to.respondTo("list");
    });

    it("should implement map", () => {

        expect(database).to.respondTo("map");
    });

    it("should implement query", () => {

        expect(database).to.respondTo("map");
    });

    it("should implement ref", () => {

        expect(database).to.respondTo("ref");
    });

    it("should implement value", () => {

        expect(database).to.respondTo("value");
    });
});
