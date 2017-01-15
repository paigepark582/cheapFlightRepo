

function isValidOrigin(code){
    var valid = false;
    var xhttpx = new XMLHttpRequest();
    var apiKey = "kErZer7g1HkP4HkR5WQCVAtMaJuA9DJa";
    var url = "https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey="+apiKey+"&term="+code+"&country=US&all_airports=false";
    
    
    xhttpx.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var json=JSON.parse(this.response);
            var data=json[0];
            if (data == undefined){
                valid = false;
            }
            else{
                valid = true;
            }
        }
    }
    xhttpx.open("GET", url, false );

    xhttpx.send();
    //return valid;
    $(function(){$("#flightTable").load("table.html")});
}
