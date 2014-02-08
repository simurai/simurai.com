$(document).ready(function(){
    
    $(".list-item").click( function(e){
        $("html").attr("class", "isMessage");
    });
    
    $("#back").click( function(e){
        $("html").attr("class", "isList");
    });
    
});