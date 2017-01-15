var returnFlights = function(json, numFlights){
    for(var i=0;i<numFlights && json[i]!=null;i++){
        var flight=json[i];
        var populate="<something>"
        for(var key in flight){
//at some div, we'll populate with html
            switch(key){
                case "destination":
                    populate+="something about destination, maybe a hashmap for locations, I think there's an api call";
                    break;
                case "departure_date":
                    break;
                case "return_date":
                    //check null value
                    break;
                case "price":
                    break;
                case "airline":
                    //switch over airline codes
                    break;


            }
        }
        $('something').html(

    }
};
