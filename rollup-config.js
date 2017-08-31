import nodeResolve from "rollup-plugin-node-resolve";
import { external, globals } from "./rollup-constants";

export default {
    banner: "/*MIT license https://github.com/cartant/firebase-thermite-ng/blob/master/LICENSE*/",
    external: external,
    globals: Object.assign({}, globals),
    input: "dist/index.js",
    name: "firebaseThermiteNg",
    output: {
        file: "bundles/firebase-thermite-ng.umd.js",
        format: "umd"
    },
    plugins: [nodeResolve({})]
}
