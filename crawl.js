const {JSDOM} = require("jsdom");

function getURLsFromHTML(htmlBody, baseURL){
    const urls=[];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a').forEach(element => {
        if(element.href.slice(0,1)==='/'){
            //relative
            try{
             const urlObj = new URL(`${baseURL}${element.href}`);
             urls.push(urlObj.href);
            }catch(e){
             console.log(`error with relative url: ${e}`);
            }
           
         }else{
             //absolute
             try{
                const urlObj = new URL(element.href);
                 urls.push(urlObj.href);
             }catch(e){
                 console.log(`error with absolute url: ${e}`);
             }
         }
    })
    return urls;
}

function normalizeURL(urlString){
    const urlObj = new URL(urlString);
    const hostPath =  `${urlObj.hostname}${urlObj.pathname}`;
    if (hostPath.length >0 && hostPath.slice(-1)=== '/'){
        return hostPath.slice(0,-1);
    }
    return hostPath;
}
module.exports={
    normalizeURL,
    getURLsFromHTML
}

