const { parseTxHex } = require(".")

const testCases = [
  {
    symbol: "Genesis Block Tx",
    assumed: "Coinbase Transaction",
    txId: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
    hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000"
  },
  {
    symbol: "Block #7 Coinbase Tx",
    assumed: "Coinbase Transaction",
    txId: "0000000071966c2b1d065fd446b1e485b2c9d9594acd2007ccbd5441cfc89444",
    hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d012bffffffff0100f2052a01000000434104a59e64c774923d003fae7491b2a7f75d6b7aa3f35606a8ff1cf06cd3317d16a41aa16928b1df1f631f31f28c7da35d4edad3603adb2338c4d4dd268f31530555ac00000000"
  },
  {
    symbol: "Block #78 Coinbase Tx",
    assumed: "Coinbase Transaction, Hal Finney first mining",
    txId: "7ea1d2304f1f95fae773ed8ef67b51cfd5ab33ea8b6ab0a932ee3e248b7ba74c",
    hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d010fffffffff0100f2052a01000000434104fd024595ebaa7a83bd672cd7d59e6eb42f0f04e7dc77a4f0634e45c2420d8a949cba06cde901f23d52cda564d494d172ba80281fa2d9c2a2e825e9c462be0da6ac00000000"
  }
]

const test = () => {
  for (const tx of testCases) {
    console.log(`************************************************************`)
    console.log(`Currently testing with ${tx.symbol}`)
    console.log(`This is verified to be ${tx.assumed}`)
    console.log(parseTxHex(tx.hex))
  }
}

test()