var http = require('http'),
	express = require('express'),
	request = require('request'),
	cheerio = require('cheerio'),
	iconv = require('iconv'),
	fs = require('fs'),
	vow = require('vow');

var counter = 0;


// var strConv = iconv.decode(new Buffer(str), 'win1251');
// var buf = iconv.encode(strConv, 'UTF-8');
// console.log(strConv)
// console.log(buf)
var getUrlTables = function (i, url) {

		request({uri:url,method:'GET',encoding:'binary'},
			function (err, res, body) {
				var $ = cheerio.load(body);

				$('.b-section-list .b-poster-tile').each(function(index,element){

					if(counter == 1) {
						console.log($(element).find('.b-poster-tile__title-full').text());
					}
					counter++;
				});
				
				console.log('total :' + counter + ' on this page');

			});
	};

getUrlTables(1, 'http://fs.to/video/serials/');