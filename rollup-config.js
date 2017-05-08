import nodeResolve from "rollup-plugin-node-resolve";
import { external, globals } from "./rollup-constants";

export default {
    banner: "/*MIT license https://github.com/cartant/firebase-thermite-ng/blob/master/LICENSE*/",
    dest: "bundles/firebase-thermite-ng.umd.js",
    entry: "dist/index.js",
    external: external,
    format: "umd",
    globals: Object.assign({}, globals),
    moduleName: "firebaseThermiteNg",
    plugins: [nodeResolve({})]
}
