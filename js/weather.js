function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;
    // Your code here.
    location = document.querySelector("#location").value;
    if (location == ''){
        location = "Ann Arbor";
    }
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    
    format = $("input:radio[name=temp]:checked").val();
    if (format == null){
        format = 'imperial';
    }

    // Your code here.

    console.log("Format is " + format);

    //set the query  
    let key;
    key = 'd9c1a5eefd8cdf5c9a4ca5fbc4542acc';
    let query = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=' + format +'&appid=' + key;
    
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
                //Use json to update the values.  I would 
        //print it to the console
        console.log(JSON.stringify(json));
        console.log(json)
        loc = json.name;
        temp = json.main.temp + ' with ' + json.weather[0].description;
        tempImg = 'http://openweathermap.org/img/wn/'+ json.weather[0].icon +".png";
        console.log('city name is :' + loc);
        console.log('temperature is :'+ temp);
        document.querySelector("#forecast").style.display="block";
        console.log("show information");
        document.getElementById("loc").innerHTML = loc;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("tempImg").src = tempImg;
        document.getElementById("tempImg").alt = json.weather[0].description;
        /* https://openweathermap.org/weather-conditions */
    });

}
