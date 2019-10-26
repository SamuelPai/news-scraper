var articles;

$("#scrapeBtn").on("click", function () {

    // $("#newz").html("")

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/scrape",

        complete: function (data) {
                var allData = data.responseJSON;
                console.log(allData);
                $("#newz").html("You scraped " + allData.length + " articles!");
                // $("#newz")[0].innerHTML = JSON.stringify(allData, undefined, 2);
        }
    })


});


// $("#scrapeBtn").on("click", function () {

//     $.ajax({
//         type: "GET",
//         dataType: "json",
//         url: "/articles",

//         complete: function (data) {
//                 // var allData = data.responseJSON;
//                 console.log(data.responseJSON);
                
//             //    articles = JSON.stringify(allData, undefined, 2);
//                 // $("#atls")[0].textContent = JSON.stringify(allData, undefined, 2);
//         }
//     })


// });


// export default articles;