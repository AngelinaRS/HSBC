function AS_FlexContainer_ef36aee303b342c3bafe41cbb0a1d972(eventobject) {
    function MOVE_ACTION____09e235c9a6664a10871f57431108fc9d_Callback() {}
    frmSecondKA["flexTarget4KA"].animate(
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
        "animationEnd": MOVE_ACTION____09e235c9a6664a10871f57431108fc9d_Callback
    });
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            frmSecondKA["flexTarget3KA"]["skin"] = "sknflexffffffKA";
        }, null);
    } else {
        (function() {
            frmSecondKA["flexTarget3KA"]["skin"] = "sknflexffffffKA";
        })();
    }
    frmSecondKA["flexTarget3KA"]["width"] = "70%";
    frmSecondKA["flexTarget3KA"]["top"] = "18%";
    frmSecondKA["flexTarget2KA"]["width"] = "66%";
    frmSecondKA["flexTarget2KA"]["top"] = "16%";
    frmSecondKA["flexTarget1KA"]["width"] = "62%";
    frmSecondKA["flexTarget1KA"]["top"] = "14%";
}