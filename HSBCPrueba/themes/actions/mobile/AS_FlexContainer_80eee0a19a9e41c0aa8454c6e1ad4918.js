function AS_FlexContainer_80eee0a19a9e41c0aa8454c6e1ad4918(eventobject) {
    function MOVE_ACTION____f02664cfc37a44d29db9b6d459503520_Callback() {}
    frmSecondKA["flexTarget2KA"].animate(
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
        "animationEnd": MOVE_ACTION____f02664cfc37a44d29db9b6d459503520_Callback
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