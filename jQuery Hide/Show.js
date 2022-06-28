$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(1500);
    });
    $("#show").click(function(){
        $("p").show("slow");
    })
});
            // ==========================================================================
            $(document).ready(function(){
                $("button").click(function(){
                    $("p").toggle();
                })
            })
            // ==========================================================================