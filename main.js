const {crawlPage} = require("./crawl.js");
function main(){
    if(process.argv.length<3){
        console.log("no website provided");
        process.exit(1);
    }
    if(process.argv.length>3){
        console.log("too many commando line args");
        process.exit(1);
    }
    for( const arg of process.argv){
        console.log(arg);
    }
    const baseURL = process.argv[2];
    console.log(`staring crawl of ${baseURL}`);
    crawlPage(baseURL);
}
main();