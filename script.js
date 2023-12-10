var option;
var online;
var larger;
var customisable;
var online_value = 1;
var larger_value = 2;
var customisable_value = 2;
var option_value = 0;
var total = 0;

//This hides the dynamic fields of step 4
function hideField(){
    $(".td1").hide();
    $(".td2").hide();
    $(".td3").hide();
}
//End

$(".first").addClass("circle-active");
$(".switch input").prop("checked", false);
$(".options p:last-of-type").hide();

step1();
addons();
planActivation();
ifYearly();


function ifYearly(){
    $(".switch input").click(function(){
        if($(".switch input").prop("checked") == true){
                $("#Arcade span").text("$90/yr");
                $("#Advanced span").text("$120/yr");
                $("#Pro span").text("$150/yr");
                $("#Online-Services .price").text("+$10/yr");
                $("#Larger-storage .price").text("+$20/yr");
                $("#Customizable-Profile .price").text("+$20/yr");
                $(".p1").text("+$10/yr");
                $(".p2").text("+$20/yr");
                $(".p3").text("+$20/yr");
                $("#monthly").text("(Yearly)");
                $("#month").text("(per year)");
                $(".options p:last-of-type").slideDown();
                $(".ifyear").addClass("blue");
                $(".ifmonth").removeClass("blue");
                online_value = 10;
                larger_value = 20;
                customisable_value = 20;
                if(option == "Arcade"){
                    option_value = 90;
                }
                if(option == "Advanced"){
                    option_value = 120;
                }
                if(option == "Pro"){
                    option_value = 150;
                }
                
            
        }
        else{
                $("#Arcade span").text("$9/mo");
                $("#Advanced span").text("$12/mo");
                $("#Pro span").text("$15/mo");
                $("#Online-Services .price").text("+$1/mo");
                $("#Larger-storage .price").text("+$2/mo");
                $("#Customizable-Profile .price").text("+$2/mo");
                $(".p1").text("+$1/mo");
                $(".p2").text("+$2/mo");
                $(".p3").text("+$2/mo");
                $("#monthly").text("(Monthly)");
                $("#month").text("(per month)");
                $(".options p:last-of-type").slideUp();
                $(".ifyear").removeClass("blue");
                $(".ifmonth").addClass("blue");
                online_value = 1;
                larger_value = 2;
                customisable_value = 2;
                if(option == "Arcade"){
                    option_value = 9;
                }
                if(option == "Advanced"){
                    option_value = 12;
                }
                if(option == "Pro"){
                    option_value = 15;
                }
        }
    })
    
}
    
    
function planActivation(){
    $(".options").click(function(event){
        var button = event.currentTarget.id;
        $("#" + button).addClass("click");
        if(button == "Arcade"){
            $("#Advanced").removeClass("click");
            $("#Pro").removeClass("click");
            if($(".switch input").prop("checked") == true){
                option_value = 90;
            }
            else{
                option_value = 9;
            }
            
        }
        if(button == "Advanced"){
            $("#Arcade").removeClass("click");
            $("#Pro").removeClass("click");
            if($(".switch input").prop("checked") == true){
                option_value = 120;
            }
            else{
                option_value = 12;
            }
        }
        if(button == "Pro"){
            $("#Advanced").removeClass("click");
            $("#Arcade").removeClass("click");
            if($(".switch input").prop("checked") == true){
                option_value = 150;
            }
            else{
                option_value = 15;
            }
        }
    
        option = button;
    });
}
function addons(){
    $(".check").click(function(event){
        var check = event.currentTarget.id;
        if($("#" +check+" input").prop('checked') == true){
            $("#" + check).removeClass("click");
            $("#" +check+" input").prop('checked', false);
            if(check == "Online-Services"){
                online = ""
            }
            if(check == "Larger-storage"){
                larger = ""
            }
            if(check == "Customizable-Profile"){
                customisable = ""
            }

        }
        else{
            $("#" + check).addClass("click");
            $("#" +check+" input").prop('checked', true);
            if(check == "Online-Services"){
                online = "Online Services"
            }
            if(check == "Larger-storage"){
                larger = "Larger Storage"
            }
            if(check == "Customizable-Profile"){
                customisable = "Customizable Profile"
            }
        }
    })
}
function step1(){
    $(".one").click(function () {
        var possibility = 0;
        var name = document.querySelectorAll("input")[0];
        var email = document.querySelectorAll("input")[1];
        var phone = document.querySelectorAll("input")[2];
        if(name.value == ""){
            $(".error1").removeClass("hidden");
        }
        if(email.value.includes("@") == false){
            if(email.value == ""){
                $(".error2").text("This Field is Required");
                $(".error2").removeClass("hidden");
                possibility +=1;
            }
            else{
                $(".error2").text("Must include '@'");
                $(".error2").removeClass("hidden");
                possibility += 1;
            }
        }
        if(phone.value == ""){
            $(".error3").removeClass("hidden");
            possibility += 1;
        }
        if(possibility == 0){
            $("#step1").slideUp();
            $("#step2").fadeIn().removeClass("hidden");
            $(".first").removeClass("circle-active");
            $(".second").addClass("circle-active");
            $(".error1").addClass("hidden");
            $(".error2").addClass("hidden");
            $(".error3").addClass("hidden");
            step2();
        }
        
    });
}
function step2(){
    $(".two").click(function(){
        if(option == undefined){
            alert("Please Select a Plan")
        }
        else{
            $("#step2").slideUp();
            $("#step3").fadeIn().removeClass("hidden");
            $(".second").removeClass("circle-active");
            $(".third").addClass("circle-active");
            step3();
            
        }
    });
    $(".btwo").click(function(){
        $("#step2").fadeOut();
        $("#step1").slideDown();
        $(".first").addClass("circle-active");
        $(".second").removeClass("circle-active");
    });
    
    
    
}
function step3(){
    
    $(".three").click(function(){
        $("#step3").slideUp("hidden");
        $("#step4").fadeIn().removeClass("hidden");
        $(".third").removeClass("circle-active");
        $(".fourth").addClass("circle-active");
        step4();
    })
    $(".bthree").click(function(){
        $("#step3").fadeOut();
        $("#step2").slideDown();
        $(".third").removeClass("circle-active");
        $(".second").addClass("circle-active");
    });
    
    
}
function step4(){
    hideField();
    $("#plan").html("" +option +"<a id='back-to-two'>Change</a>");
    $(".top").text("" + $("#" +option + " span").text());
    total += option_value;
    if(online == "Online Services"){
        $(".td1").show();
        total += online_value;
    }
    if(larger == "Larger Storage"){
        $(".td2").show();
        total += larger_value;
    }
    if(customisable == "Customizable Profile"){
        $(".td3").show();
        total += customisable_value;
    }

    if($(".switch input").prop("checked") == true){
        $(".final").html("+$" +total+ "/yr");
    }
    else{
        $(".final").html("+$" +total+ "/mo");
    }
    
    total = 0;

    $(".four").click(function () {
        $("#step4").slideUp();
        $("#step5").removeClass("hidden");
    })
    $(".bfour").click(function(){
        $("#step4").fadeOut();
        $("#step3").slideDown();
        $(".fourth").removeClass("circle-active");
        $(".third").addClass("circle-active");
        hideField();
    })
    $("#back-to-two").click(function(){
        $("#step4").fadeOut();
        $("#step2").slideDown();
        $(".fourth").removeClass("circle-active");
        $(".second").addClass("circle-active");
        step2();
    })
}