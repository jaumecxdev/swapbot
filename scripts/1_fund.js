const IERC20 = require('@openzeppelin/contracts/build/contracts/ERC20.json')
const WETH = new web3.eth.Contract(IERC20.abi, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')

const UNLOCKED_ACCOUNT = '0x4a68B9F43558F4C640b709D8E2EED4cabab8315b'

module.exports = async function (callback) {
    const [deployer, sniper] = await web3.eth.getAccounts()

    const amount = web3.utils.toWei('10', 'ether')

    await WETH.methods.transfer(deployer, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(sniper, amount).send({ from: UNLOCKED_ACCOUNT })

    const deployerBalance = await WETH.methods.balanceOf(deployer).call()
    console.log(`WETH amount in deployer: ${deployerBalance / 1e18}\n`)

    const sniperBalance = await WETH.methods.balanceOf(sniper).call()
    console.log(`WETH amount in sniper: ${sniperBalance / 1e18}\n`)

    callback()
}