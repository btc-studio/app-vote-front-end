import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
import getConfig from './config';

window.Buffer = window.Buffer || require('buffer').Buffer;
const nearConfig = getConfig(process.env.NODE_ENV || 'development');

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(
    Object.assign(
      {
        deps: {
          keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        },
      },
      nearConfig,
    ),
  );

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near);

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId();

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
    // Test only
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: [
      'get_all_collections_for_owner',
      'get_all_collections',
      'get_collections_by_name',
      'get_all_schemas_by_collection',
      'get_all_templates_by_collection',
      'nft_tokens_for_owner',
      'get_all_drops_by_collection',
      'nft_token',
      'get_all_lootboxes_by_collection',
      'get_all_drops',
      'get_drop_by_id',
    ],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: [
      'create_collection',
      'create_schema',
      'create_template',
      'nft_mint',
      'create_lootbox',
      'create_drop',
      'mint_lootbox',
      'unbox_lootbox',
      'claim_drop',
    ],
  });
}

export function logout() {
  window.walletConnection.signOut();
  // reload page
  window.location.replace(window.location.origin + window.location.pathname);
}

export function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn(nearConfig.contractName);
}

// export async function set_greeting(message) {
//   let response = await window.contract.set_greeting({
//     args: { message: message },
//   });
//   return response;
// }

// export async function get_greeting() {
//   let greeting = await window.contract.get_greeting();
//   return greeting;
// }
