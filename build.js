'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const mainColor = '#7C16F5'
const data = {
  ascii: chalk.white(` 
 ______     ______     _____     ______     ______     ______     __   __    
/\\  ___\\   /\\  __ \\   /\\  __-.  /\\  ___\\   /\\  ___\\   /\\  __ \\   /\\ "-.\\ \\   
\\ \\ \\____  \\ \\ \\/\\ \\  \\ \\ \\/\\ \\ \\ \\  __\\   \\ \\ \\____  \\ \\ \\/\\ \\  \\ \\ \\-.  \\  
 \\ \\_____\\  \\ \\_____\\  \\ \\____-  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\ \\_\\\\"\\_\\ 
  \\/_____/   \\/_____/   \\/____/   \\/_____/   \\/_____/   \\/_____/   \\/_/ \\/_/ `),    
  name: chalk.hex(mainColor).inverse('Codecon Summit'),
  date: chalk.white('06 e 07 de setembro'),
  address: chalk.white('Expoville - Joinville, SC'),
  subscribe: chalk.white('Inscreva-se em:'),
  link: chalk.underline.white('https://eventos.codecon.dev/codecon-summit-24/'),
}

// Actual strings we're going to output
const newline = '\n'
const ascii = `${data.ascii}`
const heading = `            ${data.name} ${data.date}`
const address = `${data.address}`
const subscribe = `${data.subscribe} ${data.link}`

// Put all our output together into a single variable so we can use boxen effectively
const output = ascii + newline + newline + 
              heading +
              newline + newline +
              address + newline +
              subscribe + newline

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.hex(mainColor)(boxen(output, options)))
