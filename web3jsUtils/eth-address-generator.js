// 引入web3.js模块
const Web3 = require('web3');

// 创建一个类库
class EthAddressGenerator {
  // 构造函数，接受一个参数n，表示要生成的地址个数
  constructor(n) {
    // 创建一个web3实例
    this.web3 = new Web3();
    // 创建一个空数组，用来存储生成的地址和私钥
    this.addresses = [];
    // 调用generate方法，传入n作为参数
    this.generate(n);
  }

  // generate方法，接受一个参数n，表示要生成的地址个数
  generate(n) {
    // 使用for循环，从0到n-1遍历
    for (let i = 0; i < n; i++) {
      // 调用web3.eth.accounts.create方法，生成一个随机的账户对象
      let account = this.web3.eth.accounts.create();
      // 将账户对象中的address和privateKey属性添加到数组中
      this.addresses.push({address: account.address, privateKey: account.privateKey});
    }
  }

  // getAddresses方法，返回数组中的所有地址和私钥
  getAddresses() {
    return this.addresses;
  }
}

// 导出类库模块
module.exports = EthAddressGenerator;