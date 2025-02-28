const { parseTxHex } = require(".")

const testCases = require('./test-cases')

const test = () => {
  for (const tx of testCases) {
    console.log(`************************************************************`)
    console.log(`Currently testing with ${tx.symbol}`)
    console.log(`This is verified to be ${tx.assumed}`)
    console.log(parseTxHex(tx.hex))
  }
}

test()