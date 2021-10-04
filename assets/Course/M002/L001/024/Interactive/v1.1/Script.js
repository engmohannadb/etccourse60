window.addEventListener('load', init, false);

var canvas, stage, exportRoot, s1, s2, s3, s4, s5, s6,correctsound,wrongsound,clicksound;
var numofanswer = 3;
var counter = 0;
var frameCounter = 0;
var frames = [1480, 1505, 1530, 1553, 1575];
//  sounds = [s3,    s4,   s5,   s6]

var sounds;



function init() {
    canvas = document.getElementById("canvas");
    exportRoot = new lib.KSA_TVTC_PH012_M002_L001_P021_Temp000();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Touch.enable(stage);
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);

    setTimeout(function () {
    }, 2000)



    //set the sounds functions

    s1 = document.getElementById("s1");

    s1.addEventListener('pause', function () {
        s1.currentTime = 0;
    }, false);

    s2 = document.getElementById("s2");

    s2.addEventListener('pause', function () {
        s2.currentTime = 0;
    }, false);

    s3 = document.getElementById("s3");

    s3.addEventListener('pause', function () {
        s3.currentTime = 0;
    }, false);

    s4 = document.getElementById("s4");

    s4.addEventListener('pause', function () {
        s4.currentTime = 0;
    }, false);

    s5 = document.getElementById("s5");

    s5.addEventListener('pause', function () {
        s5.currentTime = 0;
    }, false);

    s6 = document.getElementById("s6");

    s6.addEventListener('pause', function () {
        s6.currentTime = 0;
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
     sounds = [s3,s4, s5, s6]
    // set the stage and hide non needed elements

    s1.play();

    exportRoot["start"].onClick = function () {
        PauseAll();
        clicksound.play();
        exportRoot.gotoAndPlay(530)
        setTimeout(function () {
            s2.play();
        }, 3500);
    }


    exportRoot["next"].onClick = function () {
        frameCounter++;
        PauseAll();
        clicksound.play();
        if (frameCounter >= 0 && frameCounter <= 4) {
            exportRoot.gotoAndPlay(frames[frameCounter])
            if (frameCounter <= 3) {
                sounds[frameCounter].play();
            }
        }
        if (frameCounter == 5) { frameCounter = 4 };
    }

    exportRoot["prev"].onClick = function () {
        frameCounter--;
        PauseAll();
        clicksound.play();
        if (frameCounter >= 0 && frameCounter <= 4) {
            exportRoot.gotoAndPlay(frames[frameCounter])
            if (frameCounter <= 3) {
                sounds[frameCounter].play();
            }
        }
        if (frameCounter == -1) { frameCounter = 0 };

    }


    // drag and drop events for 30 item 

    for (var i = 0; i < numofanswer; i++) {

        // set the drag event and give id to all items
        exportRoot["ans" + i].onPress = moveFn;
        exportRoot["ans" + i].num = i;
        exportRoot["ans" + i].iAmIn = false;

        // preserving the original position of the items
        exportRoot["ans" + i].PosX = exportRoot["ans" + i].x;
        exportRoot["ans" + i].PosY = exportRoot["ans" + i].y;

        exportRoot["lplace" + i].num = i;
        exportRoot["lplace" + i].amIChecked = false;
        exportRoot["rplace" + i].num = i;
        exportRoot["rplace" + i].amIChecked = false;
        // preserving the original position of the items
        exportRoot["lplace" + i].PosX = exportRoot["lplace" + i].x;
        exportRoot["lplace" + i].PosY = exportRoot["lplace" + i].y;
        exportRoot["rplace" + i].PosX = exportRoot["rplace" + i].x;
        exportRoot["rplace" + i].PosY = exportRoot["rplace" + i].y;


        
    }




}




function moveFn(e) {
    PauseAll();
    //drop events
    e.target.disX = stage.mouseX - e.target.x;
    e.target.disY = stage.mouseY - e.target.y;

    e.onMouseMove = function (e1) {
        e1.target.x = e1.stageX - e1.target.disX;
        e1.target.y = e1.stageY - e1.target.disY;
    };


    e.onMouseUp = function (e2) {


        if ((Math.abs(e2.target.x - exportRoot["lplace" + e2.target.num].x) < 50 && Math.abs(e2.target.y - exportRoot["lplace" + e2.target.num].y) < 50 && exportRoot["lplace" + e2.target.num].amIChecked == false)) {
            correctsound.play();
            exportRoot["rplace0"].x = 1150;
            exportRoot["rplace1"].x = 1150;
            exportRoot["rplace2"].x = 1150;

            exportRoot["lplace" + e.target.num].amIChecked = true;
            e2.target.iAmIn = true;
            e.target.alpha = 0;
            exportRoot["lplace" + e.target.num].gotoAndStop(1)
            counter++;
            if (counter == 3) {
                setTimeout(function () {
                    exportRoot.gotoAndPlay(frames[frameCounter]);
                    sounds[frameCounter].play()
                }, 1000)
               
            }

        }
        else if ((Math.abs(e2.target.x - exportRoot["rplace" + e2.target.num].x) < 50 && Math.abs(e2.target.y - exportRoot["rplace" + e2.target.num].y) < 50 && exportRoot["rplace" + e2.target.num].amIChecked == false)) {
            PauseAll();
            correctsound.play();
            exportRoot["lplace0"].x = 1150;
            exportRoot["lplace1"].x = 1150;
            exportRoot["lplace2"].x = 1150;
            exportRoot["rplace" + e.target.num].amIChecked = true;
            e2.target.iAmIn = true;
            e.target.alpha = 0;
            exportRoot["rplace" + e.target.num].gotoAndStop(1)
            counter++;
            if (counter == 3) {
                setTimeout(function () {
                    exportRoot.gotoAndPlay(frames[frameCounter]);
                    sounds[frameCounter].play()
                }, 1000)

            }
        }

        else {


            PauseAll();
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
            exportRoot["placea" + e.target.num].amIChecked = true;
            e2.target.iAmIn = true;
            e.target.alpha = 0;
            exportRoot["placea" + e.target.num].gotoAndStop(1)
            counter++;
            if (counter == 4) {
                exportRoot["slope"].alpha = 1;

            }

        }

        else {




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
    PauseAll();
    clicksound.play();
    console.log("ss")
    exportRoot.play();

}



function PauseAll() {
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    correctsound.pause();
    wrongsound.pause();
    clicksound.pause();
}