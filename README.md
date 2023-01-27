visit https://solx.finance/ to see the application (not done yet).

White Paper:

SolX Finance WhitePaper Version 0.9.1 (Not Final, Subject to Change)

--Abstract

As we have seen many times since the inception of Bitcoin; centralized exchanges may be compromised, user funds may have been misappropriated, and at the same time the average user either does not want to self-custody or they may lose their keys to self-custody wallets. 

Digital asset investors, speculators, and collectors do need fiat on and off ramps, shall be able to verify on chain how their funds are used, and are in need of easy self-custody and trading without complex wallet UI/UX. They shall be able to access these with the most liquid markets available, as centralized liquidity markets are dispersed and siloed. Enter SolX Finance.

--Introduction

SolX Finance is an exchange on the Solana network that bridges traditional web2 accounts (Google, Apple, MS) and their payment systems with digital assets and trading on the Solana blockchain via self-custodied wallets.

SolX Finance would not host or safeguard keys to any crypto wallet, however it would facilitate the creation of crypto wallets via user-accessible-only keys based on traditional web2 accounts. Any user would only need their web2 account login information to access their crypto wallets.

SolX Finance would also help carry out any digital asset trades per user request via integrated fungible and non-fungible token aggregators.

--Implementation

SolX Finance aims to achieve these goals in three parts:

Part 1: Login to SolX

A user would simply login with their traditional web2 account. Optionally one may transfer funds from web2 payment systems (Google Pay, Apple Pay, Banks? etc.) to their crypto wallet.

Part 2: Wallet Set Up

If a user initiated a fund transfer, a crypto wallet will be created without additional input from the user, seed phrase to be encrypted and uploaded to cloud (eg. Google Drive, Apple iCloud, MS OneDrive) and linked to the person’s account. The amount of money transferred would show up in the crypto wallet as USDC minus a few dollars for SOL token (Solana Network fees to be incurred).

Part 3: Digital Asset Aggregator Integrations

To be able to trade fungible and non-fungible tokens, aggregators are to be included on the SolX.finance website. SolX Finance would not market make any token but simply provide access to the Solana blockchain markets for fungible (OpenBook, Orca, Raydium, etc) and non-fungible (Magic Eden, OpenSea etc) tokens.

Within the SolX Finance web app; a user can log in with their traditional web2 account and start trading fungible and non-fungible tokens with deep Solana network liquidity.

Differences from current exchange implementations

4.1 Trading venue: A traditional centralized exchange’s trading takes place on its own systems. They are not open or as open as a blockchain where you may examine each transaction, wallet, volume, etc. easily.

4.2 Fund custody: SolX Finance will not host any funds. Period. SolX Finance will help create blockchain wallets for self-custody that is accessible by a user only.

4.3 Easy login and pay: Web2 account and payment integrations to be built in. No SolX account. Existing Google, Apple, MS accounts and payments to be included.

---------------------------------------------------------------------------------

App:

Webb-App optimized for Google Cloud Platform (GCP) App Engine

to run on GCP App Engine, have npm, nvm and gcloud sdk installed, clone it, then:

1- make sure you are on the correct version (NodeJS v16.19.0)

nvm ls

if not on correct version:

nvm use v16.19.0

2- Make sure the app is running ok on local:

npm start

3- Build the app for production:

npm run build

4- Deploy to GCP App Engine 

gcloud app deploy

5- See the deployment on browser:

gcloud app browse

---------------------------------------------------------------------------------