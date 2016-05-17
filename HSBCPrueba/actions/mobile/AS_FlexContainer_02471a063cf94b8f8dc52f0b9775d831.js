function AS_FlexContainer_02471a063cf94b8f8dc52f0b9775d831(eventobject) {
    function MOVE_ACTION____d97b626caf4f40b89fdcd063b7d61645_Callback() {}
    frmSecondKA["flexTarget3KA"].animate(
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
        "animationEnd": MOVE_ACTION____d97b626caf4f40b89fdcd063b7d61645_Callback
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