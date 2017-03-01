//     This code was generated by a Reinforced.Typings tool. 
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
///<reference path="models.ts"/>
var Reinforced;
(function (Reinforced) {
    var Typings;
    (function (Typings) {
        var Samples;
        (function (Samples) {
            var Difficult;
            (function (Difficult) {
                var CodeGenerators;
                (function (CodeGenerators) {
                    var Controllers;
                    (function (Controllers) {
                        /** Our sample controller for testing queries made through jQuery */
                        var JQueryController = (function () {
                            function JQueryController() {
                            }
                            /** Wrapper method for call SimpleIntMethod of JQueryController */
                            JQueryController.SimpleIntMethod = function (loadingPlaceholderSelector, disableElement) {
                                if (loadingPlaceholderSelector === void 0) { loadingPlaceholderSelector = ''; }
                                if (disableElement === void 0) { disableElement = ''; }
                                return QueryController.query('/JQuery/SimpleIntMethod', {}, loadingPlaceholderSelector, disableElement);
                            };
                            /** Wrapper method for call MethodWithParameters of JQueryController */
                            JQueryController.MethodWithParameters = function (num, s, boolValue, loadingPlaceholderSelector, disableElement) {
                                if (loadingPlaceholderSelector === void 0) { loadingPlaceholderSelector = ''; }
                                if (disableElement === void 0) { disableElement = ''; }
                                return QueryController.query('/JQuery/MethodWithParameters', { 'num': num, 's': s, 'boolValue': boolValue }, loadingPlaceholderSelector, disableElement);
                            };
                            /** Wrapper method for call ReturningObject of JQueryController */
                            JQueryController.ReturningObject = function (loadingPlaceholderSelector, disableElement) {
                                if (loadingPlaceholderSelector === void 0) { loadingPlaceholderSelector = ''; }
                                if (disableElement === void 0) { disableElement = ''; }
                                return QueryController.query('/JQuery/ReturningObject', {}, loadingPlaceholderSelector, disableElement);
                            };
                            /** Wrapper method for call ReturningObjectWithParameters of JQueryController */
                            JQueryController.ReturningObjectWithParameters = function (echo, loadingPlaceholderSelector, disableElement) {
                                if (loadingPlaceholderSelector === void 0) { loadingPlaceholderSelector = ''; }
                                if (disableElement === void 0) { disableElement = ''; }
                                return QueryController.query('/JQuery/ReturningObjectWithParameters', { 'echo': echo }, loadingPlaceholderSelector, disableElement);
                            };
                            /** Wrapper method for call VoidMethodWithParameters of JQueryController */
                            JQueryController.VoidMethodWithParameters = function (model, loadingPlaceholderSelector, disableElement) {
                                if (loadingPlaceholderSelector === void 0) { loadingPlaceholderSelector = ''; }
                                if (disableElement === void 0) { disableElement = ''; }
                                return QueryController.query('/JQuery/VoidMethodWithParameters', { 'model': model }, loadingPlaceholderSelector, disableElement);
                            };
                            return JQueryController;
                        }());
                        Controllers.JQueryController = JQueryController;
                    })(Controllers = CodeGenerators.Controllers || (CodeGenerators.Controllers = {}));
                })(CodeGenerators = Difficult.CodeGenerators || (Difficult.CodeGenerators = {}));
            })(Difficult = Samples.Difficult || (Samples.Difficult = {}));
        })(Samples = Typings.Samples || (Typings.Samples = {}));
    })(Typings = Reinforced.Typings || (Reinforced.Typings = {}));
})(Reinforced || (Reinforced = {}));
//# sourceMappingURL=JQueryController.js.map