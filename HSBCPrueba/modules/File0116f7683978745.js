
function trancitionIndicator(distance, form){
var pForm = kony.application.getCurrentForm();
try {
  pForm[form].animate(
  kony.ui.createAnimation(
  {"100":{
    "left": distance, "stepConfig":{
      "timingFunction": kony.anim.EASE
        }
    }
  }
  ),
    {"delay": 0, "iterationCount": 1, "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration":0.2},
    {"animationEnd": function(){ }
    }
   );
} catch (e) {
}
}





function appearShadow(opacity, form, delay, duration){
var pForm = kony.application.getCurrentForm();
   pForm[form].animate(
    kony.ui.createAnimation(
      {"100":
       {"stepConfig":
        {"timingFunction":kony.anim.EASE
        },
        "opacity": opacity
       }
      } 
    ),
    {"delay":delay,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":duration},
    {"animationEnd" : function(){ }
    }
  );
}

function appearShadowSplash(opacity, form, delay, duration){
var pForm = kony.application.getCurrentForm();
   pForm[form].animate(
    kony.ui.createAnimation(
      {"100":
       {"stepConfig":
        {"timingFunction":kony.anim.EASE
        },
        "opacity": opacity
       }
      } 
    ),
    {"delay":delay,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":duration},
    {"animationEnd" : function(){
    	frmHomeKA.ImgSplashKA.isVisible=false;
      	frmHomeKA.ImgLogginKA.isVisible=true;
      	frmHomeKA.flexLoginContainerKA.isVisible=true;
      	frmHomeKA.flexSkipKA.isVisible=true;
    }
    }
  );
}
