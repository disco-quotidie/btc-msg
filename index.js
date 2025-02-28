const { Transaction } = require('bitcoinjs-lib')
const COINBASE_INPUT_HASH = "0000000000000000000000000000000000000000000000000000000000000000"
const TRANSACTION_TYPE = {
  NORMAL: "normal",
  COINBASE: "coinbase",
  UNKNOWN: "unknown"
}

const parseTxHex = (txHex) => {
  const tx = Transaction.fromHex(txHex)
  const isCoinbase = isCoinbaseTx(tx)
  if (isCoinbase)
    return parseCoinbaseTransaction(tx)
  else
    console.log(`Anyway, not a coinbase`)
}

const isCoinbaseTx = (tx) => {
  const { ins } = tx
  if (ins && ins.length > 0) {
    const { hash } = ins[0]
    return hash.toString('hex') === COINBASE_INPUT_HASH
  }
}

const parseCoinbaseTransaction = (tx) => {
  let msgHex = "";
  let message = "";

  if (tx && tx.ins && tx.ins.length > 0) {
    for (const _in_ of tx.ins) {
      const scriptBuffer = Buffer.from(_in_.script)
      msgHex = scriptBuffer.toString('hex')
      message = hexToAscii(scriptBuffer.toString('hex'))

      // edge cases
      const firstByte = scriptBuffer[0];
      const firstByteInt = parseInt(firstByte)
      let messageBytes = scriptBuffer.slice(firstByteInt + 1).toString('hex');
      if (messageBytes.startsWith("010445")) {
        messageBytes = messageBytes.slice(6)
        message = hexToAscii(messageBytes)
      }
    }
  }
  return {
    txType: TRANSACTION_TYPE.COINBASE,
    msgHex,
    message
  }
}

const hexToAscii = (hex) => {
  return Buffer.from(hex, 'hex').toString('ascii')
}

module.exports = {
  parseTxHex
}