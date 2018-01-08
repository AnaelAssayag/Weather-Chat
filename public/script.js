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
            renderArray();



            
            // displayWeather(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};

$('.searchF').on('click', fetch)

var data_array = { 
    data:[
      {id:1,
      name: 'Marseille', 
      temp: 18, 
      tempF: 48,
      hour:10, 
      date:'01/01/2018',
      comment_array:['good', 'I love it']
   },
     {
     id:2,
     name: 'Paris', 
     temp: 0, 
     tempF: 48,
     hour:10, 
     date:'01/01/2018',
     comment_array:['cold here']
     }]
    }


var renderArray = function () {
    //Set date in specific format
    var source = $('#store-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(data_array)

    $('.weatherT').append(newHTML)

                // hour: today.getHours(

}
