$(document).ready(function(){
    $(".piash").click(function(){
        $(".lorem").slideToggle(4000);
    })
    $("button").click(function(){
        $(".lorem").stop();
    })
})