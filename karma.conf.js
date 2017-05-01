"use strict";

exports = module.exports = function (config) {

    config.set({
        autoWatch: false,
        basePath: "",
        browsers: ["PhantomJS"],
        colors: true,
        concurrency: Infinity,
        exclude: [],
        files: [
            "node_modules/core-js/client/core.js",
            "node_modules/tslib/tslib.js",
            "node_modules/zone.js/dist/zone.js",
            "node_modules/zone.js/dist/long-stack-trace-zone.js",
            "node_modules/zone.js/dist/proxy.js",
            "node_modules/zone.js/dist/sync-test.js",
            "node_modules/zone.js/dist/async-test.js",
            "node_modules/zone.js/dist/fake-async-test.js",
            "node_modules/zone.js/dist/mocha-patch.js",
            "node_modules/rxjs/bundles/Rx.js",
            ...angular([
                "core",
                "common",
                "compiler",
                "platform-browser",
                "platform-browser-dynamic"
            ]),
            "node_modules/chai/chai.js",
            "node_modules/firebase/firebase.js",
            "node_modules/firebase-nightlight/bundles/firebase-nightlight.umd.js",
            "node_modules/firebase-thermite/bundles/firebase-thermite.umd.js",
            "bundles/firebase-thermite-ng-test.umd.js"
        ],
        frameworks: ["mocha"],
        logLevel: config.LOG_INFO,
        port: 9876,
        preprocessors: {},
        proxies: {},
        reporters: ["spec"],
        singleRun: true
    });
};

function angular(packages) {

    return packages.reduce((files, p) => {
        files.push(`node_modules/@angular/${p}/bundles/${p}.umd.js`);
        files.push(`node_modules/@angular/${p}/bundles/${p}-testing.umd.js`);
        return files;
    }, []);
}
