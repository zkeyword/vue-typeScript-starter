const fs = require("fs");
const path = require("path");
const url = require("url");
let str = `
exports.url = '${process.env.SERVER_URL}'
exports.host = '${url.parse(process.env.SERVER_URL).host}'
`;
fs.writeFileSync(path.join(__dirname, "../src/config.ts"), str);
