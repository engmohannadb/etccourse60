window.addEventListener('load', init, false);

var canvas, stage, exportRoot, startsound,correctsound,wrongsound,clicksound;
var numofanswer = 4;
var counter = 0;
var groupArray = [0, 0, 0, 0];
var placeIdArray = [0, 1, 2, 3];
var itemsnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

var obj=["instance_1","instance","instance_2"];

function init() {
    canvas = document.getElementById("canvas");
    exportRoot = new lib.KSA_TVTC_PH012_M001_L009_P015_Temp999();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Touch.enable(stage);
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);

    setTimeout(function () {
        document.getElementById("submit").style.display = "block";
    }, 2000)



    //set the sounds functions

    startsound = document.getElementById("start");

    startsound.addEventListener('pause', function () {
        startsound.currentTime = 0;
    }, false);

    correctsound = document.getElementById("correct");

    correctsound.addEventListener('pause', function () {
        correctsound.currentTime = 0;
    }, false);

    wrongsound = document.getElementById("wrong");

    wrongsound.addEventListener('pause', function () {
        wrongsound.currentTime = 0;
    }, false);

    clicksound = document.getElementById("click");

    clicksound.addEventListener('pause', function () {
        clicksound.currentTime = 0;
    }, false);
    startsound.play();
    // set the stage and hide non needed elements




    // drag and drop events for 30 item 

    for (var i = 1; i <= numofanswer; i++) {

        // set the drag event and give id to all items
        exportRoot["ans"+i].onPress = moveFn;
        exportRoot["ans" + i].num = i;
        exportRoot["ans" + i].iAmIn = false;

        // preserving the original position of the items
        exportRoot["ans" + i].PosX = exportRoot["ans" + i].x;
        exportRoot["ans" + i].PosY = exportRoot["ans" + i].y;

        exportRoot["place" + i].num = i;
        exportRoot["place" + i].amIChecked = false;

        // preserving the original position of the items
        exportRoot["place" + i].PosX = exportRoot["place" + i].x;
        exportRoot["place" + i].PosY = exportRoot["place" + i].y;

    }


    for (var i = 1; i <= numofanswer; i++) {

        // set the drag event and give id to all items
        exportRoot["ansa" + i].onPress = moveFna;
        exportRoot["ansa" + i].num = i;
        exportRoot["ansa" + i].iAmIn = false;

        // preserving the original position of the items
        exportRoot["ansa" + i].PosX = exportRoot["ansa" + i].x;
        exportRoot["ansa" + i].PosY = exportRoot["ansa" + i].y;

        exportRoot["placea" + i].num = i;
        exportRoot["placea" + i].amIChecked = false;

        // preserving the original position of the items
        exportRoot["placea" + i].PosX = exportRoot["placea" + i].x;
        exportRoot["placea" + i].PosY = exportRoot["placea" + i].y;

    }
    exportRoot["slope"].alpha = 0;


}




    function moveFn(e) {
        //drop events
        e.target.disX = stage.mouseX - e.target.x;
        e.target.disY = stage.mouseY - e.target.y;

        e.onMouseMove = function (e1) {
            e1.target.x = e1.stageX - e1.target.disX;
            e1.target.y = e1.stageY - e1.target.disY;
        };


        e.onMouseUp = function (e2) {


            if ((Math.abs(e2.target.x - exportRoot["place" + e.target.num].x) < 50 && Math.abs(e2.target.y - exportRoot["place" + e.target.num].y) < 150 && exportRoot["place" + e.target.num].amIChecked == false)) {
                pauseAll();
                correctsound.play();
                exportRoot["place" + e.target.num].amIChecked = true;
                e2.target.iAmIn = true;
                e.target.alpha = 0;
                exportRoot["place" + e.target.num].gotoAndStop(1)
                counter++;
                if (counter == 4) {
                        exportRoot.play();
                        exportRoot["continueBtn"].onClick = clickFn;
                        counter = 0;
                    
                }

            }

            else {
                pauseAll();
                wrongsound.play();


                createjs.Tween.get(e2.target, {
                    override: true
                }).to({
                    x: e2.target.PosX,
                    y: e2.target.PosY
                }, 800, createjs.Ease.easeOut);

            }



        }


    }




    function moveFna(e) {
        //drop events
        e.target.disX = stage.mouseX - e.target.x;
        e.target.disY = stage.mouseY - e.target.y;

        e.onMouseMove = function (e1) {
            e1.target.x = e1.stageX - e1.target.disX;
            e1.target.y = e1.stageY - e1.target.disY;
        };


        e.onMouseUp = function (e2) {


            if ((Math.abs(e2.target.x - exportRoot["placea" + e.target.num].x) < 50 && Math.abs(e2.target.y - exportRoot["placea" + e.target.num].y) < 150 && exportRoot["placea" + e.target.num].amIChecked == false)) {
                pauseAll();
                correctsound.play();
                exportRoot["placea" + e.target.num].amIChecked = true;
                e2.target.iAmIn = true;
                e.target.alpha = 0;
                exportRoot["placea" + e.target.num].gotoAndStop(1)
                counter++;
                if (counter == 4) {
                    exportRoot["slope"].alpha = 1;
                    exportRoot["retry"].alpha = 1;
                    exportRoot["retry"].onClick = restartFn;


                }

            }

            else {


                pauseAll();
                wrongsound.play();
                createjs.Tween.get(e2.target, {
                    override: true
                }).to({
                    x: e2.target.PosX,
                    y: e2.target.PosY
                }, 800, createjs.Ease.easeOut);

            }



        }


    }




////////////////////////////////////////////////////////////////////////////////////
// setting the clickFn 

    function clickFn() {
        pauseAll();
        clicksound.play();
    console.log("ss")
    exportRoot.play();

}


    function pauseAll() {
        correctsound.pause();
        wrongsound.pause();
        clicksound.pause();

    }

    function restartFn() {
        clicksound.play();
        counter = 0;
        exportRoot.gotoAndPlay(0);
        exportRoot["retry"].alpha = 0;
        for (var i = 1; i <= numofanswer; i++) {

            // set the drag event and give id to all items
            exportRoot["ans" + i].iAmIn = false;
            exportRoot["ans" + i].alpha = 1;

            // preserving the original position of the items
            exportRoot["ans" + i].x = exportRoot["ans" + i].PosX;
            exportRoot["ans" + i].y = exportRoot["ans" + i].PosY;

            exportRoot["place" + i].amIChecked = false;

            // preserving the original position of the items
            exportRoot["place" + i].gotoAndStop(0)

        }


        for (var i = 1; i <= numofanswer; i++) {

            // set the drag event and give id to all items
            exportRoot["ansa" + i].iAmIn = false;
            exportRoot["ansa" + i].alpha = 1;

            // preserving the original position of the items
            exportRoot["ansa" + i].x =exportRoot["ansa" + i].PosX;
            exportRoot["ansa" + i].y =exportRoot["ansa" + i].PosY;
            exportRoot["placea" + i].amIChecked = false;

            // preserving the original position of the items
            exportRoot["placea" + i].gotoAndStop(0);

        }
        exportRoot["slope"].alpha = 0;


    }