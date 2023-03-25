$(function () {
    var lastVal = "X";
    var audioClick = new Audio("https://docs.google.com/uc?export=download&id=1PVt3NXAbMkAgpl0oRx4IXTogbxqHTp1-");
    var gameComplete = false;

    $("#xoContainer > div").click(function () {
        if(!gameComplete)
        {
            var boxVal = $(this).val();

            if(boxVal == "X" || boxVal == "O")
            {
                console.log("error");
            } else if (check())
            {
                audioClick.play();

                $(".playingStatus").toggleClass("myHide");
                $(this).append(lastVal);
                $(this).val(lastVal);  
                if(lastVal == "X"){
                    lastVal = "O";
                } else {
                    lastVal = "X";
                }  
                check();    
            }    
        }
    });

    const audioCongratz = new Audio("https://docs.google.com/uc?export=download&id=14UWI-Z7SIpHWZhfebKQubJ537FbcTpwM");

    function check(){
        var one = $("#one").val();
        var two = $("#two").val();
        var three = $("#three").val();
        var four = $("#four").val();
        var five = $("#five").val();
        var six = $("#six").val();
        var seven = $("#seven").val();
        var eight = $("#eight").val();
        var nine = $("#nine").val();

        if((one == "X" && two == "X" && three == "X") ||
        (one == "X" && four == "X" && seven == "X") ||
        (one == "X" && five == "X" && nine == "X") ||
        (two == "X" && five == "X" && eight == "X") ||
        (three == "X" && six == "X" && nine == "X") ||
        (three == "X" && five == "X" && seven == "X") ||
        (four == "X" && five == "X" && six == "X") ||
        (seven == "X" && eight == "X" && nine == "X") ||
        (four == "O" && five == "O" && six == "O") ||
        (seven == "O" && eight == "O" && nine == "O") ||
        (one == "O" && two == "O" && three == "O") ||
        (one == "O" && four == "O" && seven == "O") ||
        (one == "O" && five == "O" && nine == "O") ||
        (two == "O" && five == "O" && eight == "O") ||
        (three == "O" && six == "O" && nine == "O") ||
        (three == "O" && five == "O" && seven == "O"))
        {
            if(lastVal == "X")
            {
                audioCongratz.play();
                $("#victoryNoticeContainer h2").append("Victory, O has won!");
                gameComplete = true;             
            } else if (lastVal == "O")
            {
                audioCongratz.play();
                $("#victoryNoticeContainer h2").append("Victory, X has won!");
                gameComplete = true;             
            }
            return false;
        } else
        {
            return true;
        }
    }
    console.log("Coder? What are you doing here!");
});