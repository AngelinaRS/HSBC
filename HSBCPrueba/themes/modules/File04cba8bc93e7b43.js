/**
 * @function
 *
 */
function setGesturestoStocks(){
  var setupTblSwipe = {fingers: 1};
  frmSecondKA.flexTarget1KA.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe1);
  frmSecondKA.flexTarget2KA.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe2);
  frmSecondKA.flexTarget3KA.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe3);
  frmSecondKA.flexTarget4KA.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe4);
  frmSecondKA.flexTarget5KA.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe5);
}
function mySwipe1(src,gestureInformationSwipe){
 //alert("hoaasd"+src);
  if(gestureInformationSwipe.swipeDirection==1){
    
    frmSecondKA.flexTarget1KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
    });

  }else{

    frmSecondKA.flexTarget1KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "150%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
    });

  }
}

//**************************************************************************
function mySwipe2(src,gestureInformationSwipe){
  //alert("hoaasd"+src);
  if(gestureInformationSwipe.swipeDirection==1){

    frmSecondKA.flexTarget2KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
    });
    frmSecondKA.flexTarget1KA.skin = sknflexffffffKA;
    frmSecondKA.flexTarget1KA.width = "70%";
    frmSecondKA.flexTarget1KA.top = "18%";

  }else{

    frmSecondKA.flexTarget2KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "150%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
    });
    frmSecondKA.flexTarget1KA.skin = sknflexffffffKA;
    frmSecondKA.flexTarget1KA.width = "70%";
    frmSecondKA.flexTarget1KA.top = "18%";

  }
}

//****************************************************************************
function mySwipe3(src,gestureInformationSwipe){
  //alert("hoaasd"+src);
  if(gestureInformationSwipe.swipeDirection==1){

    frmSecondKA.flexTarget3KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
    });
    frmSecondKA.flexTarget2KA.skin = sknflexffffffKA;
    frmSecondKA.flexTarget2KA.width = "70%";
    frmSecondKA.flexTarget2KA.top = "18%";
    frmSecondKA.flexTarget1KA.width = "66%";
    frmSecondKA.flexTarget1KA.top = "16%";

  }else{

    frmSecondKA.flexTarget3KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "150%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
    });
	frmSecondKA.flexTarget2KA.skin = sknflexffffffKA;
    frmSecondKA.flexTarget2KA.width = "70%";
    frmSecondKA.flexTarget2KA.top = "18%";
    frmSecondKA.flexTarget1KA.width = "66%";
    frmSecondKA.flexTarget1KA.top = "16%";

  }
  
}

//*****************************************************************************
function mySwipe4(src,gestureInformationSwipe){
 // alert("hoaasd"+src);
  if(gestureInformationSwipe.swipeDirection==1){

    frmSecondKA.flexTarget4KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
    });
    frmSecondKA.flexTarget3KA.skin = sknflexffffffKA;
    frmSecondKA.flexTarget3KA.width = "70%";
    frmSecondKA.flexTarget3KA.top = "18%";
    frmSecondKA.flexTarget2KA.width = "66%";
    frmSecondKA.flexTarget2KA.top = "16%";
    frmSecondKA.flexTarget1KA.width = "62%";
    frmSecondKA.flexTarget1KA.top = "14%";

  }else{

    frmSecondKA.flexTarget4KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "150%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
    });
    frmSecondKA.flexTarget3KA.skin = sknflexffffffKA;
    frmSecondKA.flexTarget3KA.width = "70%";
    frmSecondKA.flexTarget3KA.top= "18%";
    frmSecondKA.flexTarget2KA.width = "66%";
    frmSecondKA.flexTarget2KA.top = "16%";
    frmSecondKA.flexTarget1KA.width = "62%";
    frmSecondKA.flexTarget1KA.top = "14%";

  }
  
}

//********************************************************************
function mySwipe5(src,gestureInformationSwipe){
  //alert("hoaasd"+src);
  if(gestureInformationSwipe.swipeDirection==1){

    frmSecondKA.flexTarget5KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
      
    });
    frmSecondKA.flexTarget4KA.skin = sknflexffffffKA;
    frmSecondKA.flexTarget4KA.width = "70%";
    frmSecondKA.flexTarget4KA.top = "18%";
    frmSecondKA.flexTarget3KA.width = "66%";
    frmSecondKA.flexTarget3KA.top = "16%";
    frmSecondKA.flexTarget2KA.width = "62%";
    frmSecondKA.flexTarget2KA.top = "14%";
    frmSecondKA.flexTarget1KA.width = "58%";
    frmSecondKA.flexTarget1KA.top= "12%";

  }else{

    frmSecondKA.flexTarget5KA.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "150%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function(){}
    });
    frmSecondKA.flexTarget4KA.skin = sknflexffffffKA;
    frmSecondKA.flexTarget4KA.width = "70%";
    frmSecondKA.flexTarget4KA.top = "18%";
    frmSecondKA.flexTarget3KA.width = "66%";
    frmSecondKA.flexTarget3KA.top = "16%";
    frmSecondKA.flexTarget2KA.width = "62%";
    frmSecondKA.flexTarget2KA.top = "14%";
    frmSecondKA.flexTarget1KA.width = "58%";
    frmSecondKA.flexTarget1KA.top = "12%";

  }
}
