/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */
/*tslint:disable:no-unused-expression*/

import { NgZone } from "@angular/core";
import { inject, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { Observable } from "rxjs/Observable";
import { enterZone, leaveZone } from "./zone";

import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/observeOn";

describe("zone", () => {

    let ngZone: NgZone;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [],
            providers: []
        });
    });

    beforeEach(inject([NgZone], (ngZone_: NgZone) => {

        ngZone = ngZone_;
    }));

    describe("enter/leaveZone", () => {

        it("should enter/leave the specified zone", (callback) => {

            ngZone.run(() => {

                expect(NgZone.isInAngularZone()).to.be.true;

                Observable
                    .of(1, leaveZone(ngZone))
                    .do(() => { expect(NgZone.isInAngularZone()).to.be.false; })
                    .observeOn(enterZone(ngZone))
                    .subscribe(
                        (value) => { expect(NgZone.isInAngularZone()).to.be.true; },
                        callback,
                        callback
                    );
            });
        });
    });
});
