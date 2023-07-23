import { ethers } from 'ethers'
import SafeApiKit from '@safe-global/api-kit'
import { SafeFactory } from '@safe-global/protocol-kit'
import { SafeAccountConfig } from '@safe-global/protocol-kit'
import { GelatoRelayPack } from '@safe-global/relay-kit'
import Safe, { EthersAdapter, getSafeContract } from '@safe-global/protocol-kit'
import { MetaTransactionData, MetaTransactionOptions, OperationType } from '@safe-global/safe-core-sdk-types'

// https://chainlist.org/?search=goerli&testnets=true
const RPC_URL='https://ancient-long-diamond.ethereum-goerli.discover.quiknode.pro/f934545bd4b8000909f79506004e4f669f2676e9/'
const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

// Initialize signers
const owner1Signer = new ethers.Wallet(process.env.OWNER_1_PRIVATE_KEY!, provider)

const ethAdapterOwner1 = new EthersAdapter({
  ethers,
  signerOrProvider: owner1Signer
})

const txServiceUrl = 'https://safe-transaction-goerli.safe.global'
const safeService = new SafeApiKit({ txServiceUrl, ethAdapter: ethAdapterOwner1 })

const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner1 })

const safeAccountConfig: SafeAccountConfig = {
    owners: [
      await owner1Signer.getAddress()
    ],
    threshold: 1,
    // ... (Optional params)
  }
  
  /* This Safe is tied to owner 1 because the factory was initialized with
  an adapter that had owner 1 as the signer. */
  const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig })
  
  const safeAddress = await safeSdkOwner1.getAddress()
  
  console.log('Your Safe has been deployed:')
  console.log(`https://goerli.etherscan.io/address/${safeAddress}`)
  console.log(`https://app.safe.global/gor:${safeAddress}`)

  // https://chainlist.org

const signer = new ethers.Wallet(process.env.OWNER_1_PRIVATE_KEY!, provider)
const chainId = 5 // Goerli
const gasLimit = '100000' // Depends on the contract interaction

// Any address can be used for destination. In this example, we use vitalik.eth
const destinationAddress = '0x1255dAA088048681B1A55C05ceD3455c9511c352'
//const withdrawAmount = ethers.utils.parseUnits('0.005', 'ether').toString()

// Create a contract instance
const abi = ['function safeMint(address to, string memory uri)']

const MomeContract = new ethers.Contract(destinationAddress, abi, signer);

const { data } = await MomeContract.populateTransaction.safeMint(0x7c1DC50D061b87D4E94Cb09999729E0b57E1Ce34 , 0)
// Create a transaction object
const safeTransactionData: MetaTransactionData = {
  to: destinationAddress,
  data: '0x',
  value: '0',
  operation: OperationType.Call
}
const options: MetaTransactionOptions = {
  gasLimit,
  isSponsored: true
}

const ethAdapter = new EthersAdapter({
  ethers,
  signerOrProvider: signer
})

const safeSDK = await Safe.create({
  ethAdapter,
  safeAddress
})

const relayKit = new GelatoRelayPack(process.env.GELATO_RELAY_API_KEY!)

const safeTransaction = await safeSDK.createTransaction({ safeTransactionData })

const signedSafeTx = await safeSDK.signTransaction(safeTransaction)
const safeSingletonContract = await getSafeContract({
  ethAdapter,
  safeVersion: await safeSDK.getContractVersion()
})

const encodedTx = safeSingletonContract.encode('execTransaction', [
  signedSafeTx.data.to,
  signedSafeTx.data.value,
  signedSafeTx.data.data,
  signedSafeTx.data.operation,
  signedSafeTx.data.safeTxGas,
  signedSafeTx.data.baseGas,
  signedSafeTx.data.gasPrice,
  signedSafeTx.data.gasToken,
  signedSafeTx.data.refundReceiver,
  signedSafeTx.encodedSignatures()
])

const relayTransaction = {
  target: safeAddress,
  encodedTransaction: encodedTx,
  chainId,
  options
}
const response = await relayKit.relayTransaction(relayTransaction)

console.log(`Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`)