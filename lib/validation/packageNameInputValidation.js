"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageNameInputValidation = void 0;
const validate_npm_package_name_1 = __importDefault(require("validate-npm-package-name"));
const packageNameErrorMsg = 'invalid package name';
const packageNameInputValidation = (input) => {
    const validationResult = validate_npm_package_name_1.default(input);
    if (validationResult.validForNewPackages) {
        return true;
    }
    return validationResult.errors[0];
};
exports.packageNameInputValidation = packageNameInputValidation;
//# sourceMappingURL=packageNameInputValidation.js.map