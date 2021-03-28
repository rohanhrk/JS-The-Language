let fs = require("fs");//fs module
let path = require("path");//path module

function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}
function readContent(src) {
    return fs.readdirSync(src);
}

// view flat
function viewFlat(src) {
    // check the given source is file or not 
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        //    if given src is file 
        //    then print src
        console.log(src + "*");
    }
    else {
        // print src
        console.log(src);
        // content read from os
        let fDirnames = readContent(src);
        // recursion 
        // console.log(fDirnames);
        for (let i = 0; i < fDirnames.length; i++) {
            let child = fDirnames[i];
            //    good practice??
            // let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src, child);
            viewFlat(dirNamepath)
        }
    }
}

//view tree
function viewTree(src, indent) {
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        console.log(indent, path.basename(src), "*");
    }
    else {
        // print
        console.log(indent, path.basename(src));
        // content read from os
        let fDirnames = readContent(src);
        // recursion 
        // console.log(fDirnames);
        for (let i = 0; i < fDirnames.length; i++) {
            let child = fDirnames[i];
            //    good practice??
            // let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src, child);
            viewTree(dirNamepath, indent + "\t");
        }
    }
}
// // node flatFile "path"
let input = process.argv.slice(2);
// viewFlat(input[0]);
viewTree(input[0], "")
// let path="C:\\Users\\Ritik Singh\\Desktop\\Batches\\PAB\\2_File_System_10_02_2021";
//  let pathArray=path.split("\\");
//  console.log(pathArray[pathArray.length-1]);