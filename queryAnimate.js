$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left:'400px',
            height:'+=200px',
            width:'+=200px',
            opacity:'0.5'
        });
    });
});
// ===============================================Toggle======================================================
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
           height: 'toggle'  
        })
    });
});
// =======================================================================================================
$(document).ready(function(){
    $("button").click(function(){
        const piash= $("div");
        piash.animate({height:'300px',opacity:'0.5'}, (2000));
        piash.animate({width:'300px',opacity:'0.8'}, "slow");
        piash.animate({width:'100px',opacity:'0.8'}, "slow");
        piash.animate({height:'100px',opacity:'0.5'}, (2000));
    });
});
// =======================================================================================================
$(document).ready(function(){
    $("button").click(function(){
       const Touhid =$("div");
       Touhid.animate({left:'300px'},3000);
       Touhid.animate({fontSize:'30px'},"slow");
    });
});