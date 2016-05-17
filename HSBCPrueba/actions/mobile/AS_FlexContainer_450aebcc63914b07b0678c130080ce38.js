function AS_FlexContainer_450aebcc63914b07b0678c130080ce38(eventobject) {
    function MOVE_ACTION____e78f3fd53c414a9d8e727dc50ffa0b9b_Callback() {}
    frmSecondKA["flexTarget3KA"].animate(
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
        "animationEnd": MOVE_ACTION____e78f3fd53c414a9d8e727dc50ffa0b9b_Callback
    });
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            frmSecondKA["flexTarget2KA"]["skin"] = "sknflexffffffKA";
        }, null);
    } else {
        (function() {
            frmSecondKA["flexTarget2KA"]["skin"] = "sknflexffffffKA";
        })();
    }
    frmSecondKA["flexTarget2KA"]["width"] = "70%";
    frmSecondKA["flexTarget2KA"]["top"] = "18%";
    frmSecondKA["flexTarget1KA"]["width"] = "66%";
    frmSecondKA["flexTarget1KA"]["top"] = "16%";
}