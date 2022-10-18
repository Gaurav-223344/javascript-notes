const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require("fs");
const json2csv = require("json2csv").Parser;
const sup = require("./supportingFunctions.js")



// to get link of all movies
const moviesList = fs.readFileSync("top250MoviesList.json").toString()

const moviesListArray = moviesList.slice(2, -2).split("\",\"")
// console.log(moviesListArray.length)
// console.log(moviesListArray[1])



const moviesListArrayMap = moviesListArray.map((link) => {
    return "https://www.imdb.com" + link
});

    // console.log(moviesListArrayMap.length)
    // console.log(moviesListArrayMap[1])



    // const movie = moviesListArrayMap[3];
    // console.log(movie);



    (async () => {
        let imdbData = [];
        for (let index = 0; index < moviesListArrayMap.length; index++) {
            let movie = moviesListArrayMap[index]
            // console.log(movie);

            const respose = await request({
                uri: movie,
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
                },
                gzip: true
            });
            console.log(index+1)
            let $ = cheerio.load(respose);
            let title = $(".sc-b73cd867-0").text().trim() || NaN;
            let genre = Array.from($('.ipc-chip-list__scroller').children(),element=>$(element).text().trim()) || NaN;
            let rating = $(".sc-7ab21ed2-1").first().text().trim() || NaN;
            let reviews = $(".sc-7ab21ed2-3").first().text() || NaN;
            let infoList = Array.from($('.sc-80d4314-2 ul').children(),element=> $(element).text().trim())
            let releaseYear = sup.getHalfString(infoList[0])
            let ageCertificate = sup.getHalfString(infoList[1])
            let movieLength = infoList[2]
            // console.log(infoList)
            // console.log(title);
            // console.log(rating);
            // console.log(reviews);
            // console.log(genre);
            // console.log(releaseYear);
            // console.log(ageCertificate);
            // console.log(movieLength);
            imdbData.push({
                title, releaseYear, ageCertificate, movieLength, rating, reviews, genre
            })

        }

        // const respose = await request({
        //     uri: movie,
        //     headers: {
        //         // "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        //         "accept-encoding": "gzip, deflate, br",
        //         "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
        //     },
        //     gzip: true
        // });

        // let $ = cheerio.load(respose);
        // let title = $(".sc-b73cd867-0").text().trim() || NaN;
        // let genre = Array.from($('.ipc-chip-list__scroller').children(),element=>$(element).text().trim()) || NaN;
        // let rating = $(".sc-7ab21ed2-1").first().text().trim() || NaN;
        // let reviews = $(".sc-7ab21ed2-3").first().text() || NaN;
        // console.log(title);
        // console.log(rating);
        // console.log(reviews);
        // console.log(genre);
        // imdbData.push({
        //     title, rating, reviews, genre
        // })
        // console.log(imdbData)
        // const parser = new json2csv();
        // const csv = parser.parse(imdbData)

        fs.writeFileSync("imdb.json",JSON.stringify(imdbData),"utf-8");
        // fs.writeFileSync("imdb.csv",csv,"utf-8");
    }
    )()




