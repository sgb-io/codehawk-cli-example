const fs = require('fs')
const codehawk = require('codehawk-cli')

// This assumes your working directory is the root of this project
const output = codehawk.analyzeProject(`${process.cwd()}/my-nextjs-app`)
fs.writeFileSync('output.json', JSON.stringify(output), 'utf8')

// Now you have lots of data in output.json!