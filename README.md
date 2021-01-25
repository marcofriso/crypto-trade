# Crypto Trade

## Description

Get API data from cryptocompare.com

- [x] The task is to create a React SPA that allows users to view the pricing of the top 10 cryptocurrencies in real time. 
- [x] The pricing should be updated every 60 seconds.
- [x] The user should be able to select their preferred local currency from a dropdown menu which updates the pricing reflected for each coin.
- [ ] Each listing should reflect:
  - [ ] the coins brand (you will need to source an image for each), 
  - [x] name, 
  - [x] price in preferred local currency, 
  - [x] market cap and 24h change. 
    - [ ] Each coin’s 24h change percentage should reflect a gain or loss in it’s styling; gains are green and losses are red ( bonus points for accompanying arrows )
- [x] Each row should be clickable and upon clicking bring the user to a dedicated page for that coin showing additional information such as:
  - [x] 24h volume, 
  - [x] circulating supply and total supply* (total supply is no longer supported by the api we suggest below so this can be disregarded). 
  - [x] This page should have a back arrow to return the user to the homepage but
  - [x] should also be available as a direct route by the coins id - that is, a user should be able to enter the application at app/bitcoin and have the same experience.
- [x] use `styled-components`

## Instructions

 - Install: `npm i`
 - Run `npm run start`