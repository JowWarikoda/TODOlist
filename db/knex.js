import knexPackage from "knex";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const knexConfig = require("../knexfile.cjs");

const knex = knexPackage(knexConfig.development);

export default knex;
