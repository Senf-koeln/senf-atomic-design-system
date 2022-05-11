/** @format */

import react from "react";
import reactDom from "react-dom";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      json(),
      image({
        extensions: /\.(png|jpg|jpeg|gif|svg)$/,
        limit: 10000,
      }),
      commonjs({
        include: "node_modules/**",
        namedExports: {
          react: Object.keys(react),
          "react-dom": Object.keys(reactDom),
        },
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import { terser } from "rollup-plugin-terser";
// import external from "rollup-plugin-peer-deps-external";
// import postcss from "rollup-plugin-postcss";
// import dts from "rollup-plugin-dts";

// const packageJson = require("./package.json");

// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//         name: "react-ts-lib",
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       external(),
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//       postcss(),
//       terser(),
//     ],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     external: [/\.css$/],
//     plugins: [dts()],
//   },
// ];
