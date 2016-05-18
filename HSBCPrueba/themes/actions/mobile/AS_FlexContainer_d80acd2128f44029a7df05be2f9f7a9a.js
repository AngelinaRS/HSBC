function AS_FlexContainer_d80acd2128f44029a7df05be2f9f7a9a(eventobject) {
    function MOVE_ACTION____04853a8ff2ba41eba98c3e277bd9c8ff_Callback() {}
    frmSecondKA["flexTarget1KA"].animate(
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
        "animationEnd": MOVE_ACTION____04853a8ff2ba41eba98c3e277bd9c8ff_Callback
    });
}