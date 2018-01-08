var fetch = function () {
    $.ajax({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#input_city').val()
            + "&appid=c8bdaccb89a38ddeae0eae1865d5dee7",
        success: function (data) {
            console.log(data);
            console.log(data.main.temp)
            // var array = [{name: "Marseille", temp: 18, tempF: 48, hour:10, date:'01/01/2018'}]
            // var dataArray = {data: array};
            var obj = {
                id: 12,
                name: data.name,
                temp: Math.floor(data.main.temp - 273.15),
                tempF: Math.floor((data.main.temp * 9 / 5) - 459.67),
                hour: new Date().getHours(),
                date: new Date(),
                comment_array: []
            }
            data_array['data'].push(obj)


            renderArray();






            // displayWeather(data);

            // set date to good format

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};

$('.searchF').on('click', fetch)

var data_array = {
    data: []
}


var renderArray = function () {


    $('.weatherT').find('.template').remove();
    var source = $('#store-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(data_array)

    $('.weatherT').append(newHTML)

    $('.searchC').on('click', addComment)

    // hour: today.getHours(
    // $('.fa-trash-o').on('click', remove)

    // $('.searchC').on('click', addComment)

}

var addComment = function() {
    
}

// var remove = function() {
//     var elmt = $(this).closest('.dataTemp')
//     array.filter
// }