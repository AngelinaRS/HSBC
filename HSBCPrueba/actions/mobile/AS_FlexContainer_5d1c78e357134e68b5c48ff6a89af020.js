function AS_FlexContainer_5d1c78e357134e68b5c48ff6a89af020(eventobject) {
    function MOVE_ACTION____263d8e370a404b1382d872b9945467f9_Callback() {}
    frmSecondKA["flexTarget2KA"].animate(
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
        "animationEnd": MOVE_ACTION____263d8e370a404b1382d872b9945467f9_Callback
    });
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            frmSecondKA["flexTarget1KA"]["skin"] = "sknflexffffffKA";
        }, null);
    } else {
        (function() {
            frmSecondKA["flexTarget1KA"]["skin"] = "sknflexffffffKA";
        })();
    }
    frmSecondKA["flexTarget1KA"]["width"] = "70%";
    frmSecondKA["flexTarget1KA"]["top"] = "18%";
}