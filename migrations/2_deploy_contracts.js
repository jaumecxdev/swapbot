const Token = artifacts.require("Token")

module.exports = async function (deployer) {

    const name = "James Coin"
    const symbol = "JAM"
    const supply = web3.utils.toWei('1000', 'ether') // 1000 Tokens

    await deployer.deploy(Token, name, symbol, supply)
};