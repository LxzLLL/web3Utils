
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