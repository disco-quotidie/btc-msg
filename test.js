const { parseTxHex } = require(".")

const testCases = [
  "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
  // "010000000536a007284bd52ee826680a7f43536472f1bcce1e76cd76b826b88c5884eddf1f0c0000006b483045022100bcdf40fb3b5ebfa2c158ac8d1a41c03eb3dba4e180b00e81836bafd56d946efd022005cc40e35022b614275c1e485c409599667cbd41f6e5d78f421cb260a020a24f01210255ea3f53ce3ed1ad2c08dfc23b211b15b852afb819492a9a0f3f99e5747cb5f0ffffffffee08cb90c4e84dd7952b2cfad81ed3b088f5b32183da2894c969f6aa7ec98405020000006a47304402206332beadf5302281f88502a53cc4dd492689057f2f2f0f82476c1b5cd107c14a02207f49abc24fc9d94270f53a4fb8a8fbebf872f85fff330b72ca91e06d160dcda50121027943329cc801a8924789dc3c561d89cf234082685cbda90f398efa94f94340f2ffffffff36a007284bd52ee826680a7f43536472f1bcce1e76cd76b826b88c5884eddf1f060000006b4830450221009c97a25ae70e208b25306cc870686c1f0c238100e9100aa2599b3cd1c010d8ff0220545b34c80ed60efcfbd18a7a22f00b5f0f04cfe58ca30f21023b873a959f1bd3012102e54cd4a05fe29be75ad539a80e7a5608a15dffbfca41bec13f6bf4a32d92e2f4ffffffff73cabea6245426bf263e7ec469a868e2e12a83345e8d2a5b0822bc7f43853956050000006b483045022100b934aa0f5cf67f284eebdf4faa2072345c2e448b758184cee38b7f3430129df302200dffac9863e03e08665f3fcf9683db0000b44bf1e308721eb40d76b180a457ce012103634b52718e4ddf125f3e66e5a3cd083765820769fd7824fd6aa38eded48cd77fffffffff36a007284bd52ee826680a7f43536472f1bcce1e76cd76b826b88c5884eddf1f0b0000006a47304402206348e277f65b0d23d8598944cc203a477ba1131185187493d164698a2b13098a02200caaeb6d3847b32568fd58149529ef63f0902e7d9c9b4cc5f9422319a8beecd50121025af6ba0ccd2b7ac96af36272ae33fa6c793aa69959c97989f5fa397eb8d13e69ffffffff0400e6e849000000001976a91472d52e2f5b88174c35ee29844cce0d6d24b921ef88ac20aaa72e000000001976a914c15b731d0116ef8192f240d4397a8cdbce5fe8bc88acf02cfa51000000001976a914c7ee32e6945d7de5a4541dd2580927128c11517488acf012e39b000000001976a9140a59837ccd4df25adc31cdad39be6a8d97557ed688ac00000000"
]

const test = () => {
  for (const txHex of testCases)
    console.log(parseTxHex(txHex))
}

test()