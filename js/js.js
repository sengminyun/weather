var url = 'https://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=b00c1a0e56e6f9bd39917ec201e7dbfc&lang=kr'
$('#weather_info .load_img').show();

$.getJSON(url, function(data) {
    var sys = data.sys;                 // 국가명, 일출/일몰
    var wind = data.wind.speed              
    var city = data.name;               // 도시명
    var weather = data.weather;         // 날씨 객체
    var main = data.main;               // 온도 기압 관련 객체
    var wmain = weather[0].main;        // 구름 상태(Cloudiness)
    var w_id = weather[0].id;           // 날씨상태 id 코드
    var icon = weather[0].icon;         // 날씨 아이콘 정보
    var country = sys.country;          // 국가명
    var temp = main.temp;               // 현재 온도
    var humidity = main.humidity;
    var description = weather[0].description ;
    var temp_min = main.temp_min;       // 최저 온도
    var temp_max = main.temp_max;       // 최고 온도
    var nowTimestamp = Math.floor(Date.now() / 1000);
    var icon_url ='https://openweathermap.org/img/w/' + icon;

    var weatherClass = 'wi wi-owm-';
        weatherClass += (nowTimestamp >= data.sunrise && nowTimestamp <= data.sunset ? 'night' : 'day');
        weatherClass += ('-' + weather[0].id);

    $("#weather_info .icon").addClass(weatherClass);
    $('.city').html(city);
    $('#weather_info .w_id').html(description);
    $('.temp_min').html(parseInt(temp_min-273.15)+'℃');
    $('.temp_max').html(parseInt(temp_max-273.15)+'℃');
    $('#weather_info .temp').html(parseInt(temp-273.15)+'℃');
    $('.humidity').html(humidity + " %");
    $('.wind').html(wind + " m/s")
    $('#weather_info .load_img').hide();
})
.fail(function(){
    alert("loading error");
});
var today = new Date();
var year = today.getFullYear(); // 년도
var month = today.getMonth() + 1;  // 월
var date = today.getDate();  // 날짜
var day = today.getDay();  // 요일

$('.today').html(year + "/ " + month + "/ " + date);