const path = require('path')



//modules for path  
console.log(path.dirname("D:/home/nodepractise/modules/path.js"))
console.log(path.extname("D:/home/nodepractise/modules/path.js"))
console.log(path.parse("D:/home/nodepractise/modules/path.js"))
console.log(path.normalize("D:/home/nodepractise/modules/path.js"))
console.log(path.basename("D:/home/nodepractise/modules/path.js"))

const p = path.parse("D:/home/nodepractise/modules/path.js");
console.log(p.name)