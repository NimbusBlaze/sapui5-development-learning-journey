sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    id: "App",
    viewName: "sap.training.exc.view.App"
  }).then(function (oView) {
    oView.placeAt("content");
  });

});

// sap.ui.define(["sap/m/Text"], function (Text) {
//   "use strict";

//   new Text({ text: "Hello World" }).placeAt("content");

// });