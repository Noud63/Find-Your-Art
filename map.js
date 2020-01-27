
var mymap = L.map('mapid', { zoomControl: true }).setView([52.378763, 4.874906], 12.4);
mymap.zoomControl.setPosition('bottomright');			
		
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1Ijoibm91ZCIsImEiOiJjanYyY291OHgxMGh3NGVvazlneWV0MnhsIn0.qQ8Thc6rxi03CybmIomvmQ'
        
}).addTo(mymap);


// Tiles styles:
//'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}' (Esri)
//'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}' (default)


// Clock in middle of footer

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('time');
 
	var currentTime = new Date();
    var noon = 12;
    var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours < noon - 2)
	  {
		  hours = "0" + hours;
		  meridian = "AM";
	  }
 
    // Set Minutes
      if (minutes < 10)
      {
          minutes = "0" + minutes;
      }
 
    // Set Seconds
      if (seconds < 10)
      {
          seconds = "0" + seconds;
      }
 
    // put together the string that displays the time
    var clockTime = "local time: " + hours + ':' + minutes + ':' + seconds + " " + meridian;
 
	clock.innerText = clockTime;

};

showCurrentTime();

// Clock is static, make it run visible
var oneSecond = 1000;
    setInterval( showCurrentTime, oneSecond);

