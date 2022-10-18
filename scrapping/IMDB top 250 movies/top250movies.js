const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require("fs");


const url = 'https://www.imdb.com/chart/top/';

async function getListOfMovies(url) {

    const respose = await request({
        uri: url,
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
        },
        gzip: true
    });

    let $ = cheerio.load(respose);
    // let header = $('h1.header').text();
    // console.log(header);
    const listOfLinkOfMovies = Array.from($(".chart tbody tr td.titleColumn a"),element => $(element).attr('href'))
    
    // console.log(listOfLinkOfMovies)
    fs.writeFileSync("top250MoviesList.json",JSON.stringify(listOfLinkOfMovies),"utf-8");
    // return listOfLinkOfMovies
}

getListOfMovies(url)

// (async()=> {

//     const respose = await request({
//         uri: url,
//         headers: {
//             "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//             "accept-encoding": "gzip, deflate, br",
//             "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
//         },
//         gzip: true
//     });

//     let $ = cheerio.load(respose);
//     let header = $('.header').text();
//     console.log(header)
//     // const listOfLinkOfMovies = Array.from($(".chart tbody tr td.titleColumn a"),element => element.href)
//     // console.log(listOfLinkOfMovies)
//     // fs.writeFileSync("top450Movies.json",JSON.stringify(listOfLinkOfMovies),"utf-8");
//     // return listOfLinkOfMovies
// })()
