
/*********************************生成指定个数的钱包地址*************************
// 引入类库模块
const EthAddressGenerator = require('./web3jsUtils/eth-address-generator');

// 创建一个EthAddressGenerator的实例，并传入10作为参数
const generator = new EthAddressGenerator(1);
// 调用getAddresses方法，获取生成的地址和私钥数组
const addresses = generator.getAddresses();
// 使用for循环遍历数组中的每个元素，并打印出来
for (let i = 0; i < addresses.length; i++) {
  console.log(addresses[i]);
}
 ************************************************************************/

/*********************************AES对称加密*************************
const CryptoSecret = require('./utils/secret')
const cs =  new CryptoSecret()
const enc = cs.AESEncrypt('0x88da3efde58872308CC0d9D40bCf4f2342f72E58',"1234123412ABCDEF","1")
console.log(enc)
const denc = cs.AESDecrypt(enc,"1234123412ABCDEF","1")
console.log(denc)
************************************************************************/