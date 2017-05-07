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
import { app } from "../firebase-spec";
import { ThermiteMessaging } from "./messaging";
import { ThermiteMessagingModule } from "./module";

describe("messaging", function (): void {

    /*tslint:disable-next-line:no-invalid-this */
    this.timeout(timeout);

    let messaging: ThermiteMessaging;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ThermiteMessagingModule],
            providers: [
                { provide: ThermiteApp, useValue: app }
            ]
        });
    });

    beforeEach(inject([ThermiteMessaging], (messaging_: ThermiteMessaging) => {

        messaging = messaging_;
    }));

    it("should implement onMessage", () => {

        expect(messaging).to.respondTo("onMessage");
    });
});
