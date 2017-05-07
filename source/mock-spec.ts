/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */
/*tslint:disable:no-unused-expression*/

import * as firebase from "firebase/app";

import { NgZone } from "@angular/core";
import { inject, TestBed } from "@angular/core/testing";
import { Mock } from "firebase-nightlight";
import { CompositeValue, KeyedValue, User } from "firebase-thermite";
import { Subject } from "rxjs/Subject";
import { expect } from "chai";
import { ThermiteApp, ThermiteAppConfigToken, ThermiteAppModule } from "./app";
import { ThermiteAuth, ThermiteAuthModule } from "./auth";

import {
    firebaseApiKey,
    firebaseAuthDomain,
    firebaseDatabaseUrl,
    firebaseStorageBucket
} from "./constants-spec";

import { ThermiteDatabase, ThermiteDatabaseModule } from "./database";
import { provideMock } from "./mock";
import { ThermiteModule } from "./module";

import "rxjs/add/operator/do";
import "rxjs/add/operator/first";
import "rxjs/add/operator/take";
import "rxjs/add/operator/toPromise";

describe("mock", () => {

    let app: ThermiteApp;
    let auth: ThermiteAuth;
    let database: ThermiteDatabase;
    let mockDatabase: { content: any };

    beforeEach(() => {

        mockDatabase = { content: {} };

        let mock = new Mock({
            database: mockDatabase,
            identities: [{
                email: "alice@firebase.com",
                password: "wonderland"
            }]
        });

        TestBed.configureTestingModule({
            imports: [
                ThermiteAppModule,
                ThermiteAuthModule,
                ThermiteDatabaseModule,
                ThermiteModule
            ],
            providers: [
                {
                    provide: ThermiteAppConfigToken,
                    useValue: {
                        apiKey: firebaseApiKey,
                        authDomain: firebaseAuthDomain,
                        databaseURL: firebaseDatabaseUrl,
                        storageBucket: firebaseStorageBucket
                    }
                },
                provideMock(mock)
            ]
        });
    });

    beforeEach(inject([
        ThermiteApp,
        ThermiteAuth,
        ThermiteDatabase
    ], (
        app_: ThermiteApp,
        auth_: ThermiteAuth,
        database_: ThermiteDatabase
    ) => {

        app = app_;
        auth = auth_;
        database = database_;
    }));

    describe("provideMock", () => {

        describe("app", () => {

            it("should provide the mocked app", () => {

                expect(app).to.respondTo("auth");
                expect(app).to.respondTo("database");
            });
        });

        describe("auth", () => {

            it("should provide the mocked auth", () => {

                expect(auth).to.exist;
            });

            it("should support onAuthStateChanged", () => {

                return app.auth()
                    .signInWithEmailAndPassword("alice@firebase.com", "wonderland")
                    .then(() => {

                        return auth.authState
                            .do(() => expect(NgZone.isInAngularZone()).to.be.true)
                            .first()
                            .toPromise();
                    })
                    .then((user) => {

                        expect(user).to.not.be.null;
                        expect(user).to.have.property("email", "alice@firebase.com");

                        return app.auth().signOut();
                    })
                    .then(() => {

                        return auth.authState
                            .do(() => expect(NgZone.isInAngularZone()).to.be.true)
                            .first()
                            .toPromise();
                    })
                    .then((user) => {

                        expect(user).to.be.null;
                    });
            });
        });

        describe("database", () => {

            it("should provide the mocked database", () => {

                expect(database).to.exist;
            });

            describe("infiniteList", () => {

                beforeEach(() => {

                    mockDatabase.content.data = {
                        "-zzzzzzz000000000000": 0,
                        "-zzzzzzz000000000001": 1,
                        "-zzzzzzz000000000002": 2,
                        "-zzzzzzz000000000003": 3,
                        "-zzzzzzz000000000004": 4,
                        "-zzzzzzz000000000005": 5
                    };
                });

                it("should be supported", () => {

                    const ref = app.database().ref("data");
                    const notifier = new Subject<boolean>();
                    const result = database
                        .infiniteList(ref, notifier, { pageSize: 3 })
                        .do(() => expect(NgZone.isInAngularZone()).to.be.true)
                        .take(2)
                        .toPromise()
                        .then((values: KeyedValue[]) => {

                            expect(values).to.be.an("array");
                            expect(values).to.have.length(6);

                            values.forEach((element: KeyedValue) => {

                                expect(element).to.have.property("$key");
                                expect(element).to.have.property("$value", mockDatabase.content.data[element.$key]);
                            });
                        });

                    notifier.next(true);
                    notifier.next(true);
                    return result;
                });
            });

            describe("list", () => {

                beforeEach(() => {

                    mockDatabase.content.data = {
                        "-zzzzzzz000000000000": 0,
                        "-zzzzzzz000000000001": 1,
                        "-zzzzzzz000000000002": 2
                    };
                });

                it("should be supported", () => {

                    const ref = app.database().ref("data");
                    return database
                        .list(ref)
                        .do(() => expect(NgZone.isInAngularZone()).to.be.true)
                        .first()
                        .toPromise()
                        .then((values: KeyedValue[]) => {

                            expect(values).to.be.an("array");
                            expect(values).to.have.length(3);

                            values.forEach((element: KeyedValue) => {

                                expect(element).to.have.property("$key");
                                expect(element).to.have.property("$value", mockDatabase.content.data[element.$key]);
                            });
                        });
                });
            });

            describe("map", () => {

                beforeEach(() => {

                    mockDatabase.content.data = {
                        alice: true,
                        bob: true,
                        mallory: true
                    };
                });

                it("should be supported", () => {

                    const ref = app.database().ref("data");
                    return database
                        .map(ref)
                        .do(() => expect(NgZone.isInAngularZone()).to.be.true)
                        .first()
                        .toPromise()
                        .then((value: CompositeValue) => {

                            expect(value).to.be.an("object");
                            expect(value).to.have.property("alice");
                            expect(value).to.have.property("bob");
                            expect(value).to.have.property("mallory");
                            expect(value).to.not.equal(mockDatabase.content.data);
                        });
                });
            });

            describe("value", () => {

                beforeEach(() => {

                    mockDatabase.content.data = {
                        alice: true,
                        bob: true,
                        mallory: true
                    };
                });

                it("should be supported", () => {

                    const ref = app.database().ref("data");
                    return database
                        .value(ref)
                        .do(() => expect(NgZone.isInAngularZone()).to.be.true)
                        .first()
                        .toPromise()
                        .then((value) => {

                            expect(value).to.be.an("object");
                            expect(value).to.deep.equal({
                                alice: true,
                                bob: true,
                                mallory: true
                            });
                        });
                });
            });
        });
    });
});
