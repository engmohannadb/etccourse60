(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.KSA_TVTC_PH012_M001_L009_P015_Temp999 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_124 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_185 = function() {
		this.stop();
	}
	this.frame_186 = function() {
		this.gotoAndPlay(271);
	}
	this.frame_352 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(124).call(this.frame_124).wait(45).call(this.frame_169).wait(16).call(this.frame_185).wait(1).call(this.frame_186).wait(166).call(this.frame_352).wait(1));

	// Layer 9
	this.retry = new lib.BbTN31();
	this.retry.setTransform(551.2,611.9,0.556,0.556,0,0,0,0.1,0);
	this.retry._off = true;

	this.timeline.addTween(cjs.Tween.get(this.retry).wait(284).to({_off:false},0).wait(70));

	// Layer 4
	this.continueBtn = new lib.BTNcopy();
	this.continueBtn.setTransform(557.8,606.6,0.556,0.556,0,0,0,0.1,0);
	this.continueBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.continueBtn).wait(166).to({_off:false},0).to({_off:true},103).wait(85));

	// Layer 11
	this.ansa4 = new lib.Symbol32copy();
	this.ansa4.setTransform(238.7,491.5,1,1,0,0,0,58.2,53);

	this.ansa3 = new lib.Symbol31copy();
	this.ansa3.setTransform(347.7,400.1,1,1,0,0,0,100.7,90.4);

	this.ansa2 = new lib.Symbol20copy();
	this.ansa2.setTransform(292.4,265.9,1,1,0,0,0,138,123.5);

	this.ansa1 = new lib.Symbol18copy();
	this.ansa1.setTransform(219.1,210.5,1,1,0,0,0,42.6,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ansa1},{t:this.ansa2},{t:this.ansa3},{t:this.ansa4}]},291).to({state:[{t:this.ansa1},{t:this.ansa2},{t:this.ansa3},{t:this.ansa4}]},61).to({state:[]},1).wait(1));

	// Layer 10
	this.place2 = new lib.Symbol29();
	this.place2.setTransform(713.5,483.6,1,1,0,0,0,110,52);

	this.place4 = new lib.Symbol4();
	this.place4.setTransform(600.6,419.1,1,1,0,0,0,30,30);

	this.place1 = new lib.Symbol11();
	this.place1.setTransform(717.5,339.9,1,1,0,0,0,22.5,8.7);

	this.place3 = new lib.Symbol3();
	this.place3.setTransform(721.5,261.5,1,1,0,0,0,26.5,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.place3},{t:this.place1},{t:this.place4},{t:this.place2}]},85).to({state:[]},92).to({state:[]},7).to({state:[]},18).to({state:[]},151).wait(1));

	// tit
	this.instance = new lib.tit("synched",0);
	this.instance.setTransform(580.7,54.5,0.05,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2,scaleY:1.2},10,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8},6,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({_off:true},332).wait(1));

	// Layer 8
	/* Layers with classic tweens must contain only a single symbol instance. */

	// Layer 2
	this.instance_1 = new lib.BTN();
	this.instance_1.setTransform(577.8,606.6,0.556,0.556,0,0,0,0.1,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(157).to({_off:false},0).to({x:557.8,alpha:1},9).to({_off:true},1).wait(187));

	// Layer 7
	this.ans2 = new lib.Symbol29copy();
	this.ans2.setTransform(299.9,371.4,1,1,0,0,0,121.7,40);

	this.ans4 = new lib.Symbol4copy();
	this.ans4.setTransform(223,473.9,1,1,0,0,0,30,30);

	this.ans1 = new lib.Symbol11copy();
	this.ans1.setTransform(315.5,256.3,1,1,0,0,0,22.5,8.7);

	this.ans3 = new lib.Symbol3copy();
	this.ans3.setTransform(364.5,470.4,1,1,0,0,0,26.5,26.5);

	this.placea1 = new lib.Symbol18();
	this.placea1.setTransform(701.1,363,1,1,0,0,0,42.6,38);

	this.placea4 = new lib.Symbol32();
	this.placea4.setTransform(610.2,446,1,1,0,0,0,58.2,53);

	this.placea3 = new lib.Symbol31();
	this.placea3.setTransform(650.7,409,1,1,0,0,0,100.7,90.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ans3},{t:this.ans1},{t:this.ans4},{t:this.ans2}]},83).to({state:[]},95).to({state:[{t:this.placea3},{t:this.placea4},{t:this.placea1}]},103).to({state:[]},72).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(661.8,444.9,1,1,0,0,0,12.4,24.6);

	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(666.9,367.9,1,1,0,0,0,11.4,24.6);

	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(791,408.5,1,1,0,0,0,51,69.5);

	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(648,362.2,1,1,0,0,0,47,23.2);

	this.instance_6 = new lib.Symbol12();
	this.instance_6.setTransform(719.9,318.6,1,1,0,0,0,9.6,24.6);

	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(776.5,302,1,1,0,0,0,30.5,37);

	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(667,302,1,1,0,0,0,28,37);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAKCiIgTAAIAAlD");
	this.shape.setTransform(604,461.7);

	this.instance_9 = new lib.Symbol16();
	this.instance_9.setTransform(727,365,1,1,0,0,0,170,174);

	this.placea2 = new lib.Symbol20();
	this.placea2.setTransform(687,375.5,1,1,0,0,0,138,123.5);

	this.slope = new lib.Symbol26();
	this.slope.setTransform(852.3,367.7,1,1,0,0,0,78.6,37.5);

	this.instance_10 = new lib.Symbol23();
	this.instance_10.setTransform(755.9,501.5,1,1,0,0,0,206.9,19.3);

	this.instance_11 = new lib.Symbol19();
	this.instance_11.setTransform(551.1,330.9,1,1,0,0,0,55.7,169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},80).to({state:[]},98).to({state:[{t:this.instance_9}]},3).to({state:[]},95).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.slope},{t:this.placea2}]},5).to({state:[]},72).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(56,111,67,0)","#386F43","#386F43","rgba(56,111,67,0)"],[0.004,0.306,0.741,1],0,-193,0,193.3).s().p("AgVfjMAAAg/FIAqAAMAAAA/Fg");
	this.shape_1.setTransform(469,351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},22).to({state:[{t:this.shape_1}]},54).to({state:[]},277).wait(1));

	// Layer 5
	this.instance_12 = new lib.TextTab("synched",0,false);
	this.instance_12.setTransform(570,376.1,1,1,0,0,0,0,1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(22).to({startPosition:0,_off:false},0).to({_off:true},331).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(572.7,53.2,14.9,2.7);


// symbols:
(lib.tit = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-7.5,-1.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAYQgKgKAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAJALABANQgBAOgJAKQgLALgOAAQgNAAgLgLg");
	this.shape_1.setTransform(121.9,0,0.65,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgLQAKgKANAAQAOAAAKAKQAKALAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape_2.setTransform(-139.9,0,0.65,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("EAh4ACbQhABBhbAAMg+5AAAQhbAAhAhBQhBhBAAhaQAAhaBBhAQBAhBBbAAMA+5AAAQBbAABABBQBBBAAABaQAABahBBBg");
	this.shape_3.setTransform(-10.6,0,0.65,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#386F43").s().p("A0aEOQhJAAg0hQQgzhPAAhvQAAhuAzhPQA0hQBJAAMAo1AAAQBJAAAzBQQA0BPAABuQAABvg0BPQgzBQhJAAg");
	this.shape_4.setTransform(-10.6,0);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159,-26.9,296.7,54);


(lib.Symbol28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgL+Ag0MAAAhBnMBMxAAAMAAABBngEhAyAg0MAAAhBnMAwgAAAMAAABBng");
	this.shape.setTransform(414.8,210);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,829.5,420.1);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("I2", "20px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.setTransform(96.4,31.5);

	this.text_1 = new cjs.Text("I1", "20px JF Flat");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 40;
	this.text_1.setTransform(144.7,31.5);

	this.text_2 = new cjs.Text("-", "20px JF Flat");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 40;
	this.text_2.setTransform(119.9,36.4);

	this.text_3 = new cjs.Text("-", "20px JF Flat");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 40;
	this.text_3.setTransform(119.9,1.9);

	this.text_4 = new cjs.Text("V1", "20px JF Flat");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 40;
	this.text_4.setTransform(142.6,0);

	this.text_5 = new cjs.Text("V2", "20px JF Flat");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 40;
	this.text_5.setTransform(95,0.5);

	this.text_6 = new cjs.Text("slope =", "20px JF Flat");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 40;
	this.text_6.setTransform(33.4,14.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AluAAILdAA");
	this.shape.setTransform(120,34.3);

	this.addChild(this.shape,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,156.8,75.1);


(lib.Symbol25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABKAAQAAAegXAVQgVAXgeAAQgdAAgWgXQgWgVAAgeQAAgdAWgWQAWgWAdAAQAeAAAVAWQAXAWAAAdg");
	this.shape.setTransform(7.4,7.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,14.8);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABKAAQAAAegXAVQgVAXgeAAQgdAAgWgXQgWgVAAgeQAAgdAWgWQAWgWAdAAQAeAAAVAWQAXAWAAAdg");
	this.shape.setTransform(7.4,7.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,14.8);


(lib.Symbol23 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGAAjQgOgPAAgUIAAgBQAAgTAOgOQAOgOAUgBIACAAQAVABAOAOQAOAOABATIAAABQAAAUgPAPQgPAOgVAAQgUAAgPgOgAnGAjQgPgPAAgUQAAgTAPgPQAPgOATgBIACAAQAUABAPAOQAOAPAAATQAAAUgOAPQgPAOgUAAQgVAAgPgOg");
	this.shape.setTransform(154,17);

	// Layer 1
	this.text = new cjs.Text("I2", "20px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.setTransform(197.6,23.6);

	this.text_1 = new cjs.Text("I1", "20px JF Flat");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 40;
	this.text_1.setTransform(110.6,23.6);

	this.text_2 = new cjs.Text("I ( A )", "20px JF Flat", "#0000CC");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 40;
	this.text_2.setTransform(387.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000CC").ss(3,1,1).p("A7VAAMA2rAAA");
	this.shape_1.setTransform(175,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000CC").s().p("Ag5AAIAAhyIByByIhyB0g");
	this.shape_2.setTransform(355.9,16.8);

	this.addChild(this.shape_2,this.shape_1,this.text_2,this.text_1,this.text,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,415.3,62.3);


(lib.Symbol22copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AtfAAIa/AA");
	this.shape.setTransform(86.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AvLAAIeXAA");
	this.shape.setTransform(97.2,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AoinpIRFAAIAAPT");
	this.shape.setTransform(54.8,49);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109.6,98);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AVkzRMgrHAmj");
	this.shape.setTransform(138,123.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(251,252,252,0.02)").s().p("A3uTdMAtPgpUICOCbMgtPApUg");
	this.shape_1.setTransform(140,123.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-16.6,303.8,280.2);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AVkzRMgrHAmj");
	this.shape.setTransform(138,123.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(251,252,252,0.02)").s().p("A10TkMAAAgnHMArpAAAMAAAAnHg");
	this.shape_1.setTransform(139.7,121.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.5,279.5,250.6);


(lib.Symbol19 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiGcQgOgOAAgUIAAgCQAAgUAOgOQAPgPATAAQAUAAAOAPQAPAPABAUQgBAVgPAOQgOAPgUAAQgTAAgPgPgAgBlGQgTgBgOgOQgOgOAAgUIAAgCQAAgUAOgPQAOgNATgBIABAAQAUAAAOAOQAPAQABAUQgBAVgPAOQgOAPgUAAIgBAAg");
	this.shape.setTransform(53.9,201.5);

	// Layer 1
	this.text = new cjs.Text("V1", "20px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.setTransform(12.7,220.4);

	this.text_1 = new cjs.Text("V2", "20px JF Flat");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 40;
	this.text_1.setTransform(12.7,140.4);

	this.text_2 = new cjs.Text("V ( V )", "20px JF Flat", "#0000CC");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 40;
	this.text_2.setTransform(67.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000CC").ss(3,1,1).p("AAA28IAAR+AAAjaIAAaX");
	this.shape_1.setTransform(53.6,190.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000CC").s().p("AAAA5IhzAAIBzhyIB0Byg");
	this.shape_2.setTransform(53.7,38);

	this.addChild(this.shape_2,this.shape_1,this.text_2,this.text_1,this.text,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,0,100,337.7);


(lib.Symbol18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AGql6IAAL1ItTAA");
	this.shape.setTransform(42.6,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(251,252,252,0.02)").s().p("AoQHgIAAjJIMnAAIAAr2ID6AAIAAO/g");
	this.shape_1.setTransform(44.5,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-9.4,106,96);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AGql6IAAL1ItTAA");
	this.shape.setTransform(42.6,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(251,252,252,0.02)").s().p("Am5GZIAAsyINzAAIAAMyg");
	this.shape_1.setTransform(57.2,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,-3.5,88.5,82);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+6e7MAAAg91MA91AAAMAAAA91g");
	this.shape.setTransform(198,198);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,396,396);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("6", "26px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(55.1,299.3);

	this.text_1 = new cjs.Text("5", "26px JF Flat");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 46;
	this.text_1.setTransform(55.1,250.3);

	this.text_2 = new cjs.Text("4", "26px JF Flat");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 46;
	this.text_2.setTransform(55.1,200.3);

	this.text_3 = new cjs.Text("3", "26px JF Flat");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 46;
	this.text_3.setTransform(55.1,149.3);

	this.text_4 = new cjs.Text("2", "26px JF Flat");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 46;
	this.text_4.setTransform(55.1,99.3);

	this.text_5 = new cjs.Text("1", "26px JF Flat");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 46;
	this.text_5.setTransform(55.1,49.3);

	this.text_6 = new cjs.Text("I ( A )", "26px JF Flat");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 46;
	this.text_6.setTransform(280.1,3.3);

	this.text_7 = new cjs.Text("V ( V )", "26px JF Flat");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 46;
	this.text_7.setTransform(165.1,3.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AII7KIScAAIAAH0IAAH0IAAH0IAAHyIAAH0IAAH0IAAHfIycAAIxzAAIw4AAIAAnfIQ4AAIAAHfAII7KIAAH0IAAH0IAAH0IAAHyIAAH0IAAH0IAAHfApr7KIAAH0IAAH0IAAH0IRzAAIScAAA6jzWIAAn0IQ4AAIRzAAA6jjuIAAn0IQ4AAIRzAAIScAAA6jzWIQ4AAIRzAAIScAAA6jjuIQ4AAIAAHyIAAH0IAAH0IRzAAIScAAA6jriIAAn0A6jL4IAAn0IQ4AAIRzAAIScAAA6jL4IQ4AAIRzAAIScAAA6jTsIAAn0A6jEEIAAny");
	this.shape.setTransform(170,174);

	this.addChild(this.shape,this.text_7,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,340,348.4);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFPfeMAAAg+7MAzPAAAMAAAA+7gEg4dAfeMAAAg+7MAtxAAAMAAAA+7g");
	this.shape.setTransform(361.5,201.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,723,403);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("I", "26px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(10.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABcAAIi3AA");
	this.shape.setTransform(14.6,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAAIAzg0IAAA0IAAA1g");
	this.shape_1.setTransform(2.7,41.2);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,49.1);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("I", "26px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(11.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhbAAIC3AA");
	this.shape.setTransform(9.3,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZABIAAg1IAzA0IgzA1g");
	this.shape_1.setTransform(21.2,5.9);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,49.1);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("R", "26px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(7.6,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.1,49.1);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AjggDIA4hTIBLCtIBJijIBKCbIBOiaIA8CaIAhhS");
	this.shape.setTransform(22.5,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(251,252,252,0.02)").s().p("AlSFAIAAp+IKlAAIAAJ+g");
	this.shape_1.setTransform(27.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-25,68,64);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AjggDIA4hTIBLCtIBJijIBKCbIBOiaIA8CaIAhhS");
	this.shape.setTransform(22.5,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(251,252,252,0.098)").s().p("AlSFAIAAp+IKlAAIAAJ+g");
	this.shape_1.setTransform(27.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("An9q1IP7AAIAAVr");
	this.shape.setTransform(51,69.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,139);


(lib.Symbol9copy = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("-", "26px JF Flat", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(11.2,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AGkAAItHAA");
	this.shape.setTransform(68.5,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("ACEAIIjuAAAiDjhIAAHD");
	this.shape_1.setTransform(13.3,45.9);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,68.5);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEEEE").s().p("EhCiAAXIAAgtMCFFAAAIAAAtg");
	this.shape.setTransform(0,-120.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F8F8").s().p("EhCiAURMAAAgohMCFFAAAMAAAAohg");
	this.shape_1.setTransform(0,39.6,1,1.318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F834D").s().p("EhCiAbgMAAAg2+MCFFAAAMAAAA2+g");
	this.shape_2.setTransform(0,42.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-425.9,-133.4,852,352);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3F834D").ss(4).p("AApAAQAAARgMALQgMAMgRAAQgQAAgMgMQgMgLAAgRQAAgPAMgMQAMgMAQAAQARAAAMAMQAMAMAAAPg");
	this.shape.setTransform(0,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3F834D").p("AAAhuIAADd");
	this.shape_1.setTransform(0,-4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,7.1,8.2,8.2);


(lib.Symbol6copy = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("+", "26px JF Flat", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(101.4,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AGwAAItfAA");
	this.shape.setTransform(44.5,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("AB4ANIj7AAACElPIAAKf");
	this.shape_1.setTransform(101,45.4);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.3,0,113,79);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AnVDoIAAnPIOrAA");
	this.shape.setTransform(47,23.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,94,46.5);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("A", "26px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(26.1,1.2,1.132,1.132);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7g");
	this.shape.setTransform(30,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AjTDUQhXhYgBh8QABh7BXhYQBYhXB7gBQB8ABBYBXQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");
	this.shape_1.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(2));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(251,252,252,0.02)").s().p("AlSF3IAArtIKlAAIAALtg");
	this.shape_2.setTransform(29.6,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-11.3,68,75);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new cjs.Text("A", "26px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(26.3,1.2,1.132,1.132);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7g");
	this.shape.setTransform(30,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AjTDUQhXhYgBh8QABh7BXhYQBYhXB7gBQB8ABBYBXQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");
	this.shape_1.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(251,252,252,0.098)").s().p("AlSF3IAArtIKlAAIAALtg");
	this.shape_2.setTransform(29.6,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("v", "26px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(24.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AEJAAQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhuQAAhtBOhNQBNhOBtAAQBuAABNBOQBOBNAABtg");
	this.shape.setTransform(26.5,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai6C7QhOhNAAhuQAAhsBOhOQBOhOBsAAQBuAABNBOQBOBOAABsQAABuhOBNQhNBOhuAAQhsAAhOhOg");
	this.shape_1.setTransform(26.5,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(2));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(251,252,252,0.02)").s().p("AlTE/IAAp+IKnAAIAAJ+g");
	this.shape_2.setTransform(26,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-7.9,68,64);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new cjs.Text("v", "26px JF Flat");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(24.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AEJAAQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhuQAAhtBOhNQBNhOBtAAQBuAABNBOQBOBNAABtg");
	this.shape.setTransform(26.5,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai6C7QhOhNAAhuQAAhsBOhOQBOhOBsAAQBuAABNBOQBOBOAABsQAABuhOBNQhNBOhuAAQhsAAhOhOg");
	this.shape_1.setTransform(26.5,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(251,252,252,0.098)").s().p("AlTE/IAAp+IKnAAIAAJ+g");
	this.shape_2.setTransform(26,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AkwlxIJhAAIAALj");
	this.shape.setTransform(30.5,37);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,74);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AkXFyIAArjIIvAA");
	this.shape.setTransform(28,37);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,74);


(lib.S01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6AC076").s().p("AgaBcIAAi3IA1AAIAAC3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.7,-9.2,5.6,18.5);


(lib.Ppdath1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6E71").s().p("ABUCiQgNgBgMgJIibiCQgMgJAAgNQAAgMAMgJICbiCQAMgJANgBQANAAAHAIQAHAJgDANQgDAMgMAKIhpBYQgLAJAAAMQAAANALAJIBpBYQAMAKADAMQADANgHAJQgHAIgMAAIgBAAg");
	this.shape.setTransform(10.9,16.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();


(lib.Ppathd_2copy1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-26.2,-51.7,-18.1,38.2).s().p("Aj9FCIAAAAIAAqEIBMAAIGvACIAAAAIjBAAIAAKDg");
	this.shape.setTransform(134.5,52.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-156.6,-51.8,-146.4,38.1).s().p("AuOFBIAAqDIDBABISfACQC3AACDBfQCDBgAACEQAACGiDBdQiBBci5AAg");
	this.shape_1.setTransform(231.7,52.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],54.4,-51.9,61.9,38).s().p("AmfFGQiIiIAAi+QAAi9CIiIQCHiIC/AAQBLAABGAZQBEAXA7ArQAaASAhAOQAlAOAcAAID0ABIAAAAIhMAAIAAKDIikAAQgbAAglAPQgiANgYATQg8AthGAYQhGAZhOAAQi/AAiHiHg");
	this.shape_2.setTransform(61.5,52.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();


(lib.Ppath_d1_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6E71").s().p("ABUCiQgNgBgMgJIibiCQgMgJAAgNQAAgMAMgJICbiCQAMgJANgBQANAAAHAIQAHAJgDANQgDAMgMAKIhpBYQgLAJAAAMQAAANALAJIBpBYQAMAKADAMQADANgHAJQgGAIgMAAIgCAAg");
	this.shape.setTransform(10.9,16.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();


(lib.Ppath_2_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-28.9,-29.4,29.4,30).s().p("AlOFOQiKiKAAjEQAAjCCKiLQCMiLDCAAQDDAACMCLQCKCLAADCQAADEiKCKQiMCLjDAAQjCAAiMiLg");
	this.shape.setTransform(53.5,53.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-28.9,-29.4,29.4,30).s().p("AlOFOQiKiKAAjEQAAjCCKiLQCMiLDCAAQDDAACMCLQCKCLAADCQAADEiKCKQiMCLjDAAQjCAAiMiLg");
	this.shape_1.setTransform(53.5,53.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();


(lib.Path_2_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-28.9,-29.4,29.4,30).s().p("AlOFOQiKiKAAjEQAAjCCKiLQCMiLDCAAQDDAACMCLQCKCLAADCQAADEiKCKQiMCLjDAAQjCAAiMiLg");
	this.shape.setTransform(53.5,53.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-28.9,-29.4,29.4,30).s().p("AlOFOQiKiKAAjEQAAjCCKiLQCMiLDCAAQDDAACMCLQCKCLAADCQAADEiKCKQiMCLjDAAQjCAAiMiLg");
	this.shape_1.setTransform(53.5,53.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-28.9,-29.4,29.4,30).s().p("AlOFOQiKiKAAjEQAAjCCKiLQCMiLDCAAQDDAACMCLQCKCLAADCQAADEiKCKQiMCLjDAAQjCAAiMiLg");
	this.shape_2.setTransform(53.5,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-28.9,-29.4,29.4,30).s().p("AlOFOQiKiKAAjEQAAjCCKiLQCMiLDCAAQDDAACMCLQCKCLAADCQAADEiKCKQiMCLjDAAQjCAAiMiLg");
	this.shape_3.setTransform(53.5,53.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-35.8,-51.9,-28.3,38).s().p("A0mFGQiIiIAAi+QAAi9CIiIQCHiIC/AAQBLAABIAZQBEAXA7ArQAZASAiAOQAlAOAcAAIa7AEQCHAABfBgQBgBgAACEQAACGhgBcQheBdiIAAI63gDQgbAAglAPQgiANgZATQg7AthGAYQhJAZhNAAQi/AAiHiHg");
	this.shape.setTransform(151.8,52.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-35.8,-51.9,-28.3,38).s().p("A0mFGQiIiIAAi+QAAi9CIiIQCHiIC/AAQBLAABIAZQBEAXA7ArQAZASAiAOQAlAOAcAAIa7AEQCHAABfBgQBgBgAACEQAACGhgBcQheBdiIAAI63gDQgbAAglAPQgiANgZATQg7AthGAYQhJAZhNAAQi/AAiHiHg");
	this.shape_1.setTransform(151.8,52.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-35.8,-51.9,-28.3,38).s().p("A0mFGQiIiIAAi+QAAi9CIiIQCHiIC/AAQBLAABIAZQBEAXA7ArQAZASAiAOQAlAOAcAAIa7AEQCHAABfBgQBgBgAACEQAACGhgBcQheBdiIAAI63gDQgbAAglAPQgiANgZATQg7AthGAYQhJAZhNAAQi/AAiHiHg");
	this.shape_2.setTransform(151.8,52.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();


(lib.Path_1_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6E71").s().p("ABUCiQgNgBgMgJIibiCQgMgJAAgNQAAgMAMgJICbiCQAMgJANgBQANAAAHAIQAHAJgDANQgDAMgMAKIhpBYQgLAJAAAMQAAANALAJIBpBYQAMAKADAMQADANgHAJQgGAIgMAAIgCAAg");
	this.shape.setTransform(10.9,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D6E71").s().p("ABUCiQgNgBgMgJIibiCQgMgJAAgNQAAgMAMgJICbiCQAMgJANgBQANAAAHAIQAHAJgDANQgDAMgMAKIhpBYQgLAJAAAMQAAANALAJIBpBYQAMAKADAMQADANgHAJQgGAIgMAAIgCAAg");
	this.shape_1.setTransform(10.9,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6E71").s().p("ABUCiQgNgBgMgJIibiCQgMgJAAgNQAAgMAMgJICbiCQAMgJANgBQANAAAHAIQAHAJgDANQgDAMgMAKIhpBYQgLAJAAAMQAAANALAJIBpBYQAMAKADAMQADANgHAJQgGAIgMAAIgCAAg");
	this.shape_2.setTransform(10.9,16.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6E71").s().p("ABUCiQgNgBgMgJIibiCQgMgJAAgNQAAgMAMgJICbiCQAMgJANgBQANAAAHAIQAHAJgDANQgDAMgMAKIhpBYQgLAJAAAMQAAANALAJIBpBYQAMAKADAMQADANgHAJQgHAIgMAAIgBAAg");
	this.shape.setTransform(10.9,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D6E71").s().p("ABUCiQgNgBgMgJIibiCQgMgJAAgNQAAgMAMgJICbiCQAMgJANgBQANAAAHAIQAHAJgDANQgDAMgMAKIhpBYQgLAJAAAMQAAANALAJIBpBYQAMAKADAMQADANgHAJQgHAIgMAAIgBAAg");
	this.shape_1.setTransform(10.9,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6E71").s().p("ABUCiQgNgBgMgJIibiCQgMgJAAgNQAAgMAMgJICbiCQAMgJANgBQANAAAHAIQAHAJgDANQgDAMgMAKIhpBYQgLAJAAAMQAAANALAJIBpBYQAMAKADAMQADANgHAJQgHAIgMAAIgBAAg");
	this.shape_2.setTransform(10.9,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6E71").s().p("ABUCiQgNgBgMgJIibiCQgMgJAAgNQAAgMAMgJICbiCQAMgJANgBQANAAAHAIQAHAJgDANQgDAMgMAKIhpBYQgLAJAAAMQAAANALAJIBpBYQAMAKADAMQADANgHAJQgHAIgMAAIgBAAg");
	this.shape_3.setTransform(10.9,16.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();


(lib.TextTab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_28 = new cjs.Graphics().p("EhEaAfhMAAAg/BMCI1AAAMAAAA/Bg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_graphics_28,x:4.2,y:57.6}).wait(11).to({graphics:null,x:0,y:0}).wait(34));

	// Layer 2
	this.instance = new lib.Symbol8();
	this.instance.setTransform(0,-311.6);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({y:-12.6},11,cjs.Ease.get(1)).wait(9).to({scaleY:1.31,y:-80},7).wait(18));

	// Symbol 8
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(0,-311.6);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({y:-12.6},11,cjs.Ease.get(1)).wait(9).to({scaleY:1.31,y:-80},7).wait(18));

	// Layer 7
	this.instance_2 = new lib.S01();
	this.instance_2.setTransform(0,239.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-140},10,cjs.Ease.get(-0.99)).wait(3).to({x:-433.6},10,cjs.Ease.get(1)).wait(25).to({scaleY:1.31,y:-246.7},7).wait(18));

	// Layer 6
	this.instance_3 = new lib.S01();
	this.instance_3.setTransform(-0.1,239.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-140},10,cjs.Ease.get(-0.99)).wait(3).to({x:433.8},10,cjs.Ease.get(1)).wait(25).to({scaleY:1.31,y:-246.7},7).wait(18));

	// Symbol 7
	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(0.1,255.5,1,1,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-123.8},10,cjs.Ease.get(-0.99)).wait(3).to({x:-402.3},10,cjs.Ease.get(1)).wait(5).to({y:-85.8},0).to({y:214},11,cjs.Ease.get(1)).wait(34));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F834D").s().p("Ag6AqIAAhTIB1AAIAABTg");
	this.shape.setTransform(0,239.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F834D").s().p("AnqAqIAAhTIPVAAIAABTg");
	this.shape_1.setTransform(0,-139.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F834D").s().p("AubAqIAAhTIc3AAIAABTg");
	this.shape_2.setTransform(0,-139.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F834D").s().p("A1LAqIAAhTMAqXAAAIAABTg");
	this.shape_3.setTransform(0,-139.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F834D").s().p("A78AqIAAhTMA35AAAIAABTg");
	this.shape_4.setTransform(0,-139.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F834D").s().p("EgitAAqIAAhTMBFbAAAIAABTg");
	this.shape_5.setTransform(0,-139.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F834D").s().p("EgpdAAqIAAhTMBS7AAAIAABTg");
	this.shape_6.setTransform(0,-139.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F834D").s().p("EgwOAAqIAAhTMBgdAAAIAABTg");
	this.shape_7.setTransform(0,-139.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F834D").s().p("Eg2+AAqIAAhTMBt9AAAIAABTg");
	this.shape_8.setTransform(0,-139.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F834D").s().p("Eg9vAAqIAAhTMB7fAAAIAABTg");
	this.shape_9.setTransform(0,-139.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F834D").s().p("EhEfAAqIAAhTMCI/AAAIAABTg");
	this.shape_10.setTransform(0,-139.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3F834D").s().p("EhEfAAsIAAhXMCI/AAAIAABXg");
	this.shape_11.setTransform(0,-155);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3F834D").s().p("EhEfAAuIAAhbMCI/AAAIAABbg");
	this.shape_12.setTransform(0,-170.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3F834D").s().p("EhEfAAwIAAhfMCI/AAAIAABfg");
	this.shape_13.setTransform(0,-185.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F834D").s().p("EhEfAAxIAAhhMCI/AAAIAABhg");
	this.shape_14.setTransform(0,-200.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F834D").s().p("EhEfAAzIAAhlMCI/AAAIAABlg");
	this.shape_15.setTransform(0,-216);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F834D").s().p("EhEfAA1IAAhpMCI/AAAIAABpg");
	this.shape_16.setTransform(0,-231.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3F834D").s().p("EhEfAA3IAAhtMCI/AAAIAABtg");
	this.shape_17.setTransform(0,-246.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:239.6}}]}).to({state:[{t:this.shape,p:{y:201.7}}]},1).to({state:[{t:this.shape,p:{y:163.7}}]},1).to({state:[{t:this.shape,p:{y:125.8}}]},1).to({state:[{t:this.shape,p:{y:87.8}}]},1).to({state:[{t:this.shape,p:{y:49.9}}]},1).to({state:[{t:this.shape,p:{y:11.9}}]},1).to({state:[{t:this.shape,p:{y:-26}}]},1).to({state:[{t:this.shape,p:{y:-63.9}}]},1).to({state:[{t:this.shape,p:{y:-101.9}}]},1).to({state:[{t:this.shape,p:{y:-139.8}}]},1).to({state:[{t:this.shape,p:{y:-139.8}}]},1).to({state:[{t:this.shape,p:{y:-139.8}}]},1).to({state:[{t:this.shape,p:{y:-139.8}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},16).to({state:[{t:this.shape_10}]},9).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,230.1,11.8,39.8);


(lib.Symbol32copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.setTransform(109.6,7.4,1,1,0,0,0,7.4,7.4);

	this.instance_1 = new lib.Symbol21();
	this.instance_1.setTransform(54.8,56.4,1,1,0,0,0,54.8,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(251,252,252,0.02)").s().p("AF7JXIAAvOIwhAAIAAitIQhAAIAAgzIEsAAIAASug");
	this.shape.setTransform(59.5,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-7.5,136,120);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(251,252,252,0.02)").s().p("ApKIgIAAxAISVAAIAARAg");
	this.shape.setTransform(56.7,50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.setTransform(109.6,7.4,1,1,0,0,0,7.4,7.4);

	this.instance_1 = new lib.Symbol21();
	this.instance_1.setTransform(54.8,56.4,1,1,0,0,0,54.8,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-3.5,117.6,109);


(lib.Symbol30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol22copy();
	this.instance.setTransform(194.5,97.2,1,1,90,0,0,97.2,0);

	this.instance_1 = new lib.Symbol22();
	this.instance_1.setTransform(97.2,0,1,1,0,0,0,97.2,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol29copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9copy();
	this.instance.setTransform(185.8,34.8,1,1,0,0,0,57.8,34.8);

	this.instance_1 = new lib.Symbol6copy();
	this.instance_1.setTransform(55.8,40,1,1,0,0,0,57.1,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(251,252,252,0.02)").s().p("AynD9IAAn5MAlPAAAIAAH5g");
	this.shape.setTransform(119.2,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.5,79);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol9copy();
	this.instance.setTransform(185.8,34.8,1,1,0,0,0,57.8,34.8);

	this.instance_1 = new lib.Symbol6copy();
	this.instance_1.setTransform(55.8,40,1,1,0,0,0,57.1,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(251,252,252,0.098)").s().p("AynD9IAAn5MAlPAAAIAAH5g");
	this.shape.setTransform(119.2,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.BTNcopy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBfQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAgPQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIANAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAPQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAClA3QgOAAgIgHQgIAHgMAAIgqAAQgNAAgIgIQgIgHAAgOIAAh1QAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAQAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAB1QAAAFABABQACACAEAAIAqAAQAEAAABgCQACgBAAgFIAAhEQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAQAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAABHIABADQACACAHAAIArAAIAAglQAAgTANgOQANgNATAAQATAAANANQAOAOAAATIAAANQAAASgOAOQgNANgTAAgADogUQgHAHAAAKIAAAlIAYAAQAKAAAHgHQAHgHAAgKIAAgNQAAgKgHgHQgHgIgKAAQgKAAgHAIgAj4A3QgTAAgOgNQgNgNAAgTIAAgNQAAgTANgOQAOgNATAAQASAAAOANQANAOAAATIAAAlIBCAAIgRgjIgBgEIAAgCQACgQAOgNQAOgNASAAQASAAAPANQAOAMABARIAAABIgBAFIgRAjIBFAAQAFAAABgCQACgBAAgEIAAhFQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIARAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAABFQAAANgIAIQgIAHgLAAgAh8gVQgHAGgCAIIAUApIAMAAIAVgpQgCgIgIgGQgHgHgKAAQgJAAgIAHgAkKgUQgHAHAAAKIAAANQAAAKAHAHQAIAHAKAAIAYAAIAAglQAAgKgHgHQgHgIgKAAQgKAAgIAIgACVhDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAPAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAPQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAgAB1hDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAPAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAPQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAgAjzhDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAPAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAPQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAgAkThDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAPAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAPQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(-0.2,0.6);

	this.instance = new lib.Path();
	this.instance.setTransform(85.6,0.2,0.491,0.491,0,0,180,10.9,16.2);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(92.9,0.2,0.491,0.491,0,0,180,11,16.2);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.setTransform(88.2,0.2,0.491,0.491,0,0,180,53.5,53.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(127,127,127,0.749)",3,3,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-0.2,62.7,0.4,-61.2).s().p("AmqGrQixixgBj6QABj5CxixQCxixD5gBQD6ABCxCxQCxCxABD5QgBD6ixCxQixCyj6AAQj5AAixiyg");
	this.shape_1.setTransform(88.2,0.2,0.491,0.491,0,0,180);

	this.instance_3 = new lib.Path_2();
	this.instance_3.setTransform(40.7,0.1,0.704,0.704,0,0,180,120.2,52.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(127,127,127,0.749)",3,3,9);

	this.addChild(this.instance_3,this.shape_1,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.9,-32.4,204.9,65);


(lib.BTN = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBfQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAgPQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIANAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAPQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAClA3QgOAAgIgHQgIAHgMAAIgqAAQgNAAgIgIQgIgHAAgOIAAh1QAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAQAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAB1QAAAFABABQACACAEAAIAqAAQAEAAABgCQACgBAAgFIAAhEQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAQAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAABHIABADQACACAHAAIArAAIAAglQAAgTANgOQANgNATAAQATAAANANQAOAOAAATIAAANQAAASgOAOQgNANgTAAgADogUQgHAHAAAKIAAAlIAYAAQAKAAAHgHQAHgHAAgKIAAgNQAAgKgHgHQgHgIgKAAQgKAAgHAIgAj4A3QgTAAgOgNQgNgNAAgTIAAgNQAAgTANgOQAOgNATAAQASAAAOANQANAOAAATIAAAlIBCAAIgRgjIgBgEIAAgCQACgQAOgNQAOgNASAAQASAAAPANQAOAMABARIAAABIgBAFIgRAjIBFAAQAFAAABgCQACgBAAgEIAAhFQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIARAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAABFQAAANgIAIQgIAHgLAAgAh8gVQgHAGgCAIIAUApIAMAAIAVgpQgCgIgIgGQgHgHgKAAQgJAAgIAHgAkKgUQgHAHAAAKIAAANQAAAKAHAHQAIAHAKAAIAYAAIAAglQAAgKgHgHQgHgIgKAAQgKAAgIAIgACVhDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAPAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAPQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAgAB1hDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAPAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAPQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAgAjzhDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAPAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAPQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAgAkThDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAPAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAPQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(-0.2,0.6);

	this.instance = new lib.Path();
	this.instance.setTransform(85.6,0.2,0.491,0.491,0,0,180,10.9,16.2);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(92.9,0.2,0.491,0.491,0,0,180,11,16.2);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.setTransform(88.2,0.2,0.491,0.491,0,0,180,53.5,53.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(127,127,127,0.749)",3,3,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-0.2,62.7,0.4,-61.2).s().p("AmqGrQixixgBj6QABj5CxixQCxixD5gBQD6ABCxCxQCxCxABD5QgBD6ixCxQixCyj6AAQj5AAixiyg");
	this.shape_1.setTransform(88.2,0.2,0.491,0.491,0,0,180);

	this.instance_3 = new lib.Path_2();
	this.instance_3.setTransform(40.7,0.1,0.704,0.704,0,0,180,120.2,52.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(127,127,127,0.749)",3,3,9);

	this.addChild(this.instance_3,this.shape_1,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.9,-32.4,204.9,65);


(lib.BbTN31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha=0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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gNgNQgNgNAAgTIAAgNQAAgTANgOQANgNAUAAQASAAANANQAOAOAAATIAAAlIAwAAQADAAABgCQADgBAAgFIAAh1QAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAQAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAB1QAAAOgHAHQgIAIgNAAgApwgbQgHAHAAAKIAAANQAAAKAHAHQAIAHAKAAIAXAAIAAglQABgKgIgHQgHgIgJAAQgKAAgIAIgADuhKQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAIAOAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAPQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAgADOhKQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAIAOAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAPQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAgApZhKQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAgPQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAPAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAPQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgAp5hKQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAgPQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIAPAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAPQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(-17.8,1.3);

	this.instance = new lib.Ppdath1();
	this.instance.setTransform(85.7,0.2,0.491,0.491,0,0,180,10.5,16.2);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Ppath_d1_01();
	this.instance_1.setTransform(92.9,0.2,0.491,0.491,0,0,180,11,16.2);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Ppath_2_01();
	this.instance_2.setTransform(88.1,0.2,0.491,0.491,0,0,180,53.6,53.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(127,127,127,0.749)",3,3,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAFAFA","#F6F6F6","#EAEAEA","#D7D7D7","#BBBBBB","#B8B8B8"],[0,0.247,0.49,0.733,0.973,0.996],-0.2,62.7,0.4,-61.2).s().p("AmqGrQixixgBj6QABj5CxixQCxixD5gBQD6ABCxCxQCxCxABD5QgBD6ixCxQixCyj6AAQj5AAixiyg");
	this.shape_1.setTransform(88.3,0.2,0.491,0.491,0,0,180);

	this.instance_3 = new lib.Ppathd_2copy1();
	this.instance_3.setTransform(40.7,0.1,0.704,0.704,0,0,180,120.3,52.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(127,127,127,0.749)",3,3,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.8,-32.4,222.9,65);


(lib.Symbol31copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.setTransform(97.2,104.6,1,1,0,0,0,97.2,97.2);

	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(194.5,7.4,1,1,0,0,0,7.4,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(251,252,252,0.02)").s().p("ANSO6IAA67I9qAAIAAi4MAgxAAAIAAdzg");
	this.shape.setTransform(96.9,91.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-3.6,209.9,191);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.setTransform(97.2,104.6,1,1,0,0,0,97.2,97.2);

	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(194.5,7.4,1,1,0,0,0,7.4,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(251,252,252,0.02)").s().p("AvfOXIAA8tIe/AAIAActg");
	this.shape.setTransform(95.2,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,198.5,184);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;