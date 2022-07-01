// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").addClass("piash bhuiyan");
//     })
// })
// =====================================removeClass===========================================================
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").removeClass("piash");
//     })
// })
// =====================================add css===========================================================
$(document).ready(function(){
    $("button").click(function(){
        $("p").css({
            "background": "red",
            "color"     : "green",
            "padding": "10px"
        });
    })
})