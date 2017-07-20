var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

let router = express.Router();

router.get('/', (req, res) => {
    request("http://nhacpro.net/", (error, response, body) => {
        if (error) {
            console.log('ERROR', error);
        } else {
            let web = cheerio.load(body);
            let ds = web(body).find("div.v-item").find("a");
            let params = [];
            ds.each((i, e) => {
                let obj = {};
                obj.link = e["attribs"]["href"];
                obj.title = e["attribs"]["title"];
                if (e.children[0] && e.children[0].attribs && e.children[0].attribs.src) {
                    obj.hinh = e.children[0].attribs.src;
                }
                if (obj.hinh) {
                    params.push(obj);
                }
            })
            res.send({ params });
        }
    })
});

module.exports = router;
