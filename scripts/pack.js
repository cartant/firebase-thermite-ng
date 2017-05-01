/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by a GPL-3.0 license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-nightlight
 */

"use strict";

const fs = require("fs");

const content = Object.assign(
    {},
    JSON.parse(fs.readFileSync("./package.json")),
    JSON.parse(fs.readFileSync("./package-dist.json"))
);
fs.writeFileSync("./dist/package.json", JSON.stringify(content, null, 2));
