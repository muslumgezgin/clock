
//
$(document).ready(function () {
    var buzzer= $("#buzzer")[0];
        buzzer.play();
        var count= parseInt($("#num").html());
        var breakTime=parseInt($('#breakNum').html());
        console.log(count);
        $("#reset").hide();
        $("#start").click(function () {
            var counter=setInterval(timer,1000);
            count *=60;
            function timer() {
                $("#start ,#minus5Clock,#add5Clock, #minus5Break,#add5Break,#breakNum,#title1,#title2").hide();       
                $("#timeType").show();
                $("#timeType").html("Session Time:");
                count -=1;
                if(count===0)
                {
                    buzzer.play();
                    clearInterval(counter);
                    var startBreak=setInterval(breakTimer,1000)

                    $("#num").hide();
                }

                if(count%60>=10){
                    $("#num").html(Math.floor(count/60)+":"+count%60);

                }
                else{
                    $("#num").html(Math.floor(count / 60) + ":"+"0" + count % 60);
                }
                function breakTimer() {
                    $("#timeType").html("Break Time:");
                    $("#breakNum").show();
                    breakTime*=60;
                    $("#timeType").show();
                    breakTime -= 1;
                    if (breakTime === 0) {
                        clearInterval(startBreak);
                        buzzer.play();
                        $("#reset").show();
                        $("#breakNum ,#timeType").hide();

                        if (breakTime % 60 >= 10) {
                            $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);

                        }
                        else {
                            $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
                        }
                    }
               }
            }
        });

        $("#reset").click(function () {
            count=25;
            breakTime=25;
            $("#num").html(count);
            $("#breakNum").html(breakTime);
            
            $("#start ,#minus5Clock,#add5Clock, #minus5Break,#add5Break,#breakNum,#num,#title1,#title2").show();
            $("#reset, #timeType").hide(); 
        });

        $("#minus5Clock").click(function () {
            
            if(count>1){

                count -= 1;
                $('#num').html(count);
                console.log(count);
            }
        });

    $("#add5Clock").click(function () {
        
            count += 1;
            $('#num').html(count);
            console.log(count);
        
    });

    $("#minus5Break").click(function () {

        if (breakTime > 1) {

            breakTime -= 1;
            $('#breakNum').html(breakTime);
    
        }
    });

    $("#add5Break").click(function () {
        breakTime += 1;
        $('#breakNum').html(breakTime);
 
    });
    });