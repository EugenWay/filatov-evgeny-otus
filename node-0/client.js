const fetch = require('node-fetch')

// Command line arguments
// Available types is `node client %numberOfrequest% --serial || -parallel`

const flags = process.argv.slice(2,4)
const numberOfrequest = flags[0]
const typeOfRequest = flags[1];


// Form our request

const sendRequest = async (url, body) => {
    try {
        console.log(`Try to execute request to server. Body - ${body}`);
        const response = await fetch(url, { method: 'POST', body })
        const msg = await response.text()

        console.log(msg)
    } catch(error) {
        throw new Error(`Can't send request to server`)
    }   
}

// Send request

let sendSerialRequest = async (count) => {
    try {
        for (let i = 0; i <= count; i++) {
            await sendRequest(`http://localhost:3000`,  `this is serial request #${i}`)
        }
    } catch(error) {
        console.error(error)
    }
    
};

let sendParallelRequest = (count) => {
    for (let i = 0; i <= count; i++) {
        sendRequest(`http://localhost:3000`,  `this is parallel request #${i}`)
    }
};

//Run with flags

switch (typeOfRequest) {
    case '--parallel':
        sendParallelRequest(numberOfrequest);
        break;
    case '--serial':
        sendSerialRequest(numberOfrequest);
        break;
    default:
        throw Error(`Unknown command: ${communicationType}`)
  }
