/** Command-line tool to generate Markov text. */

const fsP = require("fs/promises");
const axios = require("axios");
const type = process.argv[2];
const file = process.argv[3];



/** Reads file content of CL argument */
async function cat(){
    try {
        let contents = await fsP.readFile(file, "utf8");
        console.log(contents);;
    }
    catch (err){
        console.log(`Error reading ${file}:`, err);
        process.exit(1);
    }
}
/** Reads website content of CL argument */
async function webCat(){
    try {
        let resp = await axios.get(file);
        console.log(resp.data);
    }
    catch (err){
        console.log(`Error reading ${file}:`, err);
        process.exit(1);
    }
}

/** Conductor function */
async function main(){
    // if (type !== "file" || type !== "url"){
    //     throw new Error("please provide a type 'file' or 'url' before your path");
    // }
    if (type === "file"){
        cat();
    }
    else{
        webCat();
    }
}

main();