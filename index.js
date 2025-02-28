const { Transaction } = require('bitcoinjs-lib')
const COINBASE_INPUT_HASH = "0000000000000000000000000000000000000000000000000000000000000000"

const parseTxHex = (txHex) => {
  const tx = Transaction.fromHex(txHex)
  const isCoinbase = isCoinbaseTx(tx)

  if (tx && tx.ins && tx.ins.length > 0) {
    for (const _in_ of tx.ins) {
      const scriptBuffer = Buffer.from(_in_.script)
      console.log(scriptBuffer.toString('hex'))
      const firstByte = scriptBuffer[0];

      // convert firstByte to integer
      const firstByteInt = parseInt(firstByte)

      // const headerBytes = scriptBuffer.slice(0, firstByteInt + 1).toString('hex');
      let messageBytes = scriptBuffer.slice(firstByteInt + 1).toString('hex');
      if (messageBytes.startsWith("010445")) {
        messageBytes = messageBytes.slice(6)
      }
      const message = hexToAscii(messageBytes)
      return {
        txType: "coinbase",
        message
      }
    }
  }
}

const isCoinbaseTx = (tx) => {
  const { ins } = tx
  if (ins && ins.length > 0) {
    const { hash } = ins[0]
    return hash.toString('hex') === COINBASE_INPUT_HASH
  }
}

const hexToAscii = (hex) => {
  return Buffer.from(hex, 'hex').toString('ascii')
}

module.exports = {
  parseTxHex
}