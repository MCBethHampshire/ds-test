
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import cleaner from "rollup-plugin-cleaner";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import packageJson from "./package.json";
import css from "rollup-plugin-import-css";

export default {
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
    cleaner({
      targets: ["./lib"],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    css(),
    typescript({
      exclude: ["src/**/**/*.stories.ts", "src/**/**/*.test.ts"],
    }),
  ],
};