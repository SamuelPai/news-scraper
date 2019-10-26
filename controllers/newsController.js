var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/samscraper";
mongoose.connect(MONGODB_URI);



router.get("/", function (req, res) {
    res.render("index", {

    })
})



router.get("/scrape", function (req, res) {
    axios.get("https://www.nytimes.com").then(function (response) {
        var $ = cheerio.load(response.data);

        var allResults = [];
        $(".assetWrapper").each(function (i, element) {
            result = {};

            result.title = $(this).find("h2").text().trim();
            result.link = $(this).find("a").attr("href");
            result.summary = $(this).find("p").text().trim();

            db.Article.create(result).then(function (dbArticle) {

            }).catch(function (err) {
                console.log(err);
            });
            // console.log(result);
            allResults.push(result);
        });
        // console.log(allResults);
        res.send(allResults);
    });

});

// router.get("/news", function (req, res) {
//     db.Article.find(function(data) {
//         var hbsObject = {
//             insert: data
//         }
//         console.log(data);
//         res.render("articles", hbsObject)
//     })

// })


router.get("/articles", function (req, res) {
    db.Article.find(function (err, data) {
        if (err) {
            res.status(500).send();
            return
        }
        var hbsObject = {
            insert: data
        }
        res.render("articles", hbsObject)
        // res.json(data);
        console.log(data.length);
    })
})



module.exports = router;