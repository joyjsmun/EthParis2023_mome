import { config } from "dotenv"

import { IBundler, Bundler } from '@biconomy/bundler'
import { DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account"
import { providers } from 'ethers'
import { ChainId } from "@biconomy/core-types"

config()

const bundler: IBundler = new Bundler({
    bundlerUrl: 'https://bundler.biconomy.io/api/v2/80001/abc',     
    chainId: ChainId.POLYGON_MUMBAI,
    entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
  })