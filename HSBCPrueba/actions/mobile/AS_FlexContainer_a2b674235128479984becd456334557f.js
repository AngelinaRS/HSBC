function AS_FlexContainer_a2b674235128479984becd456334557f(eventobject) {
    function ___onClick_04a9487554f145198dadbc033e45564a_Callback() {}
    frmSecondKA["flexTarget5KA"].animate(
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
        "animationEnd": ___onClick_04a9487554f145198dadbc033e45564a_Callback
    });
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            frmSecondKA["flexTarget4KA"]["skin"] = "sknflexffffffKA";
        }, null);
    } else {
        (function() {
            frmSecondKA["flexTarget4KA"]["skin"] = "sknflexffffffKA";
        })();
    }
    frmSecondKA["flexTarget4KA"]["width"] = "70%";
    frmSecondKA["flexTarget4KA"]["top"] = "18%";
    frmSecondKA["flexTarget3KA"]["width"] = "66%";
    frmSecondKA["flexTarget3KA"]["top"] = "16%";
    frmSecondKA["flexTarget2KA"]["width"] = "62%";
    frmSecondKA["flexTarget2KA"]["top"] = "14%";
    frmSecondKA["flexTarget1KA"]["width"] = "58%";
    frmSecondKA["flexTarget1KA"]["top"] = "12%";
}