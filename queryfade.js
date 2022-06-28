// ================================fadeIn===========================
$(document).ready(function(){
    $("button").click(function(){
        $(".box1").fadeIn();
        $(".box2").fadeIn("slow");
        $(".box3").fadeIn(2000);
    })
})

// ================================fadeOut===========================

$(document).ready(function(){
        $("button").click(function(){
            $(".box1").fadeOut("slow");
            $(".box2").fadeOut();
            $(".box3").fadeOut(2000);
           
        })
    })
    // ================================fadeOut===========================

    $(document).ready(function(){
        $("button").click(function(){
            $(".box1").fadeToggle("slow");
            $(".box2").fadeToggle();
            $(".box3").fadeToggle(2000);
           
        })
    })
 // ================================fadeOut===========================
 $(document).ready(function(){
    $("button").click(function(){
        $(".box1").fadeTo("slow", 0.3);
        $(".box2").fadeTo("slow", 0.5);
        $(".box3").fadeTo("slow", 0.7);
       
    })
})