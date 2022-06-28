         //======================================j==jQ selector=====================================j==//

$(document).ready(function(){
    $('button').click(function(){
        $('a[target="_blank"]').hide();
        
    });
});
            //=====================================j===jQ event=====================================j==//
            //======================================j==jQ event====================================j===//

$(document).ready(function(){
    $("p").hover(function(){
       alert("hi oppps ")
    },
    function(){
        alert("bye")
    });
})
        // ===================================jQ event====exmp-2// ============================== 
$(document).ready(function(){

    $("input").focus(function(){
        $(this).css("background", "gray")
    })
    
})


 //=====================================j===jQ event====exmp-3===================================j//

$(document).ready(function(){
    $("p").on({
        mouseenter: function(){
            $(this).css("background", "green")
        },
        mouseleave: function(){
            $(this).css("background", "pink")
        },
        click: function(){
            $(this).css("background", "yellow")
        }
    })
})
//=====================================j===jQ event====exmp-3===================================j//