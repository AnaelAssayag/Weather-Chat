var fetch = function () {
    $.ajax({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#input_city').val()
            + "&appid=c8bdaccb89a38ddeae0eae1865d5dee7",
        success: function (data) {
            idnum = number++
            var obj = {
                id: idnum,
                name: data.name,
                temp: Math.floor(data.main.temp - 273.15),
                tempF: Math.floor((data.main.temp * 9 / 5) - 459.67),
                hour: new Date().getHours(),
                date: new Date(),
                comment_array: []
            }

            weatherData['citiesArray'].push(obj)
            renderArray();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};

$('.searchF').on('click', fetch)
var number = 1
var weatherData = {
    citiesArray: []
}
// var number = 1


var renderArray = function () {
    $('.weatherT').find('.template').remove();
    var source = $('#store-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(weatherData)
    $('.weatherT').append(newHTML)
    $('.searchC').on('click', addComment)
    $('.fa-trash-o').on('click', removeCity)
}

var addComment = function () {
    var comm = $(this).siblings('.commentB').val();
    var idCity = $(this).closest('.dataTemp').data().id;
    for (var i = 0; i < weatherData.citiesArray.length; i++) {
        if (weatherData.citiesArray[i].id == idCity)  {
            weatherData.citiesArray[i].comment_array.push({ text: comm })
        }
    }
    renderArray();
}

var removeCity = function () {
    var idCity = $(this).closest('.dataTemp').data().id;
    console.log(idCity)

    for (var i = 0; i < weatherData.citiesArray.length; i++) {
        if (weatherData.citiesArray[i].id == idCity) {
            weatherData.citiesArray.splice([i], 1)
        }
    }
    renderArray();
}