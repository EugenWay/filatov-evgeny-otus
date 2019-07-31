const getTree = require('./tree-maker').getTree

const param = process.argv.slice(2)
const root = param[0]

getTree(root)
    .then(results => console.log(results[0]))
    .catch(err => console.error(err))

// TODO: make real tests in jest    

// { files:
//     [ 'data/a.txt',
//       'data/b.txt',
//       'data/c.txt',
//       'data/cos.log',
//       'data/d.txt',
//       'data/e.txt',
//       'data/f.txt',
//       'data/g.txt',
//       'data/h.txt',
//       'data/simpe.jpg',
//       'data/gringo/file' ],
//    dirs: [ 'data/gringo', 'data/src', 'data/gringo/1113' ] }