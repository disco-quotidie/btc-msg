#!/usr/bin/env node

const { parseTxHex } = require("./index");

// Get arguments passed in CLI
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Usage: npx btc-msg <transactionHex>");
  process.exit(1);
}

const transactionHex = args[0];
const result = parseTxHex(transactionHex);

// Print result in CLI
console.log(result);
