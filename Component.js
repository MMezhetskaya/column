sap.ui.define(['sap/ui/core/UIComponent'],
    function(UIComponent) {
    "use strict";

    var Component = UIComponent.extend("sap.viz.sample.Column.Component", {

        metadata : {
            rootView : {
             "viewName": "sap.viz.sample.Column.Column",
               "type": "XML",
              "async": true
            },
            includes : ["../../css/exploredStyle.css"],
            dependencies : {
                libs : [
                    "sap.viz",
                    "sap.m"
                ]
            },
            config : {
                sample : {
                    stretch : true,
                    files : [
                        "Column.view.xml",
                        "Column.controller.js",
                        "InitPage.js"
                    ]
                }
            }
        }
    });

    return Component;

});
