
var redFlag = L.icon({
    iconUrl: 'images/marker1.png',
    shadowUrl: 'images/marker1shadow.png',
    iconSize: [28, 42],
    shadowSize:   [30, 34], 
    shadowAnchor: [3, 34],
    iconAnchor: [14, 42]
});

//Add markers and popups

 const myLayer = L.geoJSON(art, {
        pointToLayer: function (feature, latlng) {
            
            var myMarker =  L.marker(latlng, {icon: redFlag})
                
            .setBouncingOptions({
                bounceHeight : 30,              // height of the bouncing
                bounceSpeed  : 54,              // bouncing speed coefficient
                shadowAngle  : - Math.PI / 4,
                exclusive    : true, })         // if this marker starts bouncing all others must stop

            .on('click', function() {
                this.bounce(1);                 // bounce 3 times
            });

            feature.marker = myMarker;          // set marker as feature property
            
            return myMarker;
        
},

   onEachFeature: function ( feature, layer) {
       
        layer.on('click', function(e){
            
            const element = document.getElementById('popup');
            
            element.innerHTML =
                `<div class= "wrapper" style="background-color:#e8f4ff">
                    <div class='pic'>
                          <img src="images/${feature.properties.image}" style="height: 100%; width: 100%; object-fit: cover" class="fit"/>
                       </div>
                    <div class="popUpContent" style="background-color:#e8f4ff">
                          <div class="puName">${feature.properties.name}</div>
                          <div class="puTitle">"${feature.properties.title}"</div> 
                          <div class="extra3">${feature.properties.extra}</div> 
                       </div>
                 </div>`;
                
         
        if(!feature.properties.title){
        
            element.innerHTML = 
                `<div class= "wrapper" style="background-color:#e8f4ff">
                     <div class='pic'>
                          <img src="images/${feature.properties.image}" style="height: 100%; width: 100%; object-fit: cover" class="fit"/>
                     </div>
                 <div class="popUpContent" style="background-color:#e8f4ff">
                         <div class="puName">${feature.properties.name}</div>
                         <div class="extra3">${feature.properties.extra}</div>
                         <hr><p>
                         <div><span class="check">Check for more info:</span></div>
                         <div class="link"><a href="${feature.properties.link}" target="blank"><span class="link1">${feature.properties.link}</a></div><p>
                         <hr> 
                     </div>
                 </div>`;
                
        }

        if(!feature.properties.extra){
        
            element.innerHTML = 
                `<div class= "wrapper" style="background-color:#e8f4ff">
                    <div class='pic'>
                         <img src="images/${feature.properties.image}" style="height: 100%; width: 100%; object-fit: cover" class="fit"/>
                    </div> 
                <div class="popUpContent" style="background-color:#e8f4ff">
                         <div class="puName">${feature.properties.name}</div>
                         <div class="puTitle">"${feature.properties.title}"</div>
                    </div>
                </div>`;
                
        }
            
             // Add cover div in background popup 
            document.getElementById('cover').addEventListener( 'click', closePopup);
                        function closePopup(e){
                    if(document.querySelector('.wrapper').style.display = 'block'){
                       document.querySelector('.wrapper').style.display='none';
                }
                  
            }
            
        });
        
     }
     
});

mymap.addLayer(myLayer);
