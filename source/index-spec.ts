/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

import "./app/app-spec";
import "./auth/auth-spec";
import "./database/database-spec";
import "./messaging/messaging-spec";
import "./mock-spec";
import "./storage/storage-spec";
import "./zone-spec";
