function sendReq(origin, dest="", startDate="", endDate="", one_way="true",duration="", direct="false", maxPrice="", aggregationMode=[]){
    var url = 'https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=kErZer7g1HkP4HkR5WQCVAtMaJuA9DJa';

    if(typeof(origin)==='undefined'){
        while(true){
            console.log(".");
        }
    }
    url+="&origin="+origin.toLowerCase();
    if(dest!==""){
        url+="&dest="+dest.toLowerCase(); 
    }
    url+="&departure_date="
    if(startDate===""){
        var today=new Date();
        url+=today.getFullYear()+"-";
        var month=today.getMonth()+1;
        if(month<10){
            url+="0"+month;
        }else{
            url+=month;
        }
        url+="-";
        var day=today.getDate();
        if(day<10){
            url+="0"+day;
        }else{
            url+=day;
        }
    }
    else{
        url+=startDate;
    }

    //I think this is right
    if(endDate!==""){
        url+="--"+endDate;
    }
    url+="&one_way="+one_way;
    
    if(duration!==""){
        url+="&duration="+duration;
    }
    url+="&direct="+direct;
    if(maxPrice!==""){
        url+="&max_price="+maxPrice;
    }

    //ADD OPTIONS FOR AGGREAGATION MODE
    
                
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var json=JSON.parse(this.response);
            var data=json["results"];
            
            for(var i=0;i<data.length;i++){
            
            }


            
            $(function(){
                console.log("table");
                $('#flights').bootstrapTable({
                    data: data
                });
                $('#flightTable .bootstrap-table').bootstrapTable({
                    data: data
                });
            });
        }
        else{
            
        }
    };
    xhttp.open( "GET", url, true );
    xhttp.send();


}
