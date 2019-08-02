const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const path =  require('path')

async function getTree(dir = __dirname, results) {
    
    if (!results) {
        results = {files: [], dirs: []}
    }
    const readDirs = await readdir(dir)

    return Promise.all(readDirs.map(async (file) => {

        let rout = path.join(dir, file)

        if ((await stat(rout)).isDirectory()) {
            results.dirs.push(rout)
            await getTree(rout, results)
        } else {
            results.files.push(rout)
        }
        return results
    }))
    
}

module.exports.getTree = getTree

