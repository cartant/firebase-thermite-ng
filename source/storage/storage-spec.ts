/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */
/*tslint:disable:no-unused-expression*/

import { inject, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { ThermiteApp } from "../app";
import { timeout } from "../constants-spec";
import { firebase } from "../firebase";
import { app } from "../firebase-spec";
import { ThermiteStorageModule } from "./module";
import { ThermiteStorage } from "./storage";

describe("storage", function (): void {

    /*tslint:disable-next-line:no-invalid-this */
    this.timeout(timeout);

    let storage: ThermiteStorage;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ThermiteStorageModule],
            providers: [
                { provide: ThermiteApp, useValue: app }
            ]
        });
    });

    beforeEach(inject([ThermiteStorage], (storage_: ThermiteStorage) => {

        storage = storage_;
    }));

    it("should implement ref", () => {

        expect(storage).to.respondTo("ref");
    });
});
