
var searchButton=$('#searchBtn');





var cityInput;//city input
var inputCity=[];// save city input

searchButton.click(function ()
{
cityInput=$('#inputData').val();
save();
display();
})

