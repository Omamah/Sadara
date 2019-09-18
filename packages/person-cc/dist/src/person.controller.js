"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_1 = require("@worldsibu/convector-core");
var person_model_1 = require("./person.model");
var PersonController = (function (_super) {
    tslib_1.__extends(PersonController, _super);
    function PersonController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonController.prototype.create = function (person) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, person.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(person_model_1.Person))
    ], PersonController.prototype, "create", null);
    PersonController = tslib_1.__decorate([
        convector_core_1.Controller('person')
    ], PersonController);
    return PersonController;
}(convector_core_1.ConvectorController));
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map