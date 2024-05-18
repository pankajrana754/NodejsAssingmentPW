const path=require('path');
console.log(path.delimiter);
let result=(path.basename('/public_htm/home/path.html'));
console.log(result);
// the ext parameter filter out the extension from the path;
let result2=path.basename('/public_html/home/index.path','html');
console.log(result2);
// path.dirname(path ) :- return the directory name of a specified path for example 
let result3=path.dirname('/public_html/home/index.path');
console.log(result3);

// path.extname(path):- return extension of the path for exmaple;

console.log(path.extname('index.html'));
console.log(path.extname('app.js'));
console.log(path.extname('node.js.md'));

// path.format(pathobj):return a path string form a specified path object 
 
let pathtofile=path.format({
    dir:'public_html/home/js0',
    base:'app.js'
});
console.log(pathtofile);

//path.isAbsolute(path):return true if a specified path is an absolute path.
let result5=path.isAbsolute('c://node.js//');
console.log(result5);
result5=path.isAbsolute('c:/node.js/');
console.log(result5);

result5= path.isAbsolute('/node.js');
console.log(result5);

result5= path.isAbsolute('home/');
console.log(result5);

result5= path.isAbsolute('.');
console.log(result5);

// path.join(..paths)

let pathToDir=path.join('/home','js','dist','app.js');
console.log(pathToDir);

let pathobj=path.parse('d:/nodejs/html/js/app.js');
console.log(pathobj);

// path.normalize(path):- normalizes a specified path. it also resolves the '_' and '.' segments.

let pathtodir=path.normalize('c://nodeljs/module/js//dist');
console.log(pathtodir);

// path.relative(from, to)accept two argument and return the relative path between them based on the current 

let relativepath=path.relative('/home/user/config/','/home/user/js');
console.log(relativepath)

// path.resolve(..paths);
console.log('current working directory:',__dirname);
console.log(path.resolve())

