"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
const ajv_1 = __importDefault(require("ajv"));
const ajv_errors_1 = __importDefault(require("ajv-errors"));
const ajv = new ajv_1.default({ coerceTypes: true, allErrors: true });
ajv_errors_1.default(ajv, { keepErrors: true });
const params = (properties, options) => {
    const schema = {
        type: 'object',
        properties: properties,
        required: Object.keys(properties)
    };
    const paramsValidtor = ajv.compile(schema);
    return (params) => {
        const pv = { ...params };
        const isPass = paramsValidtor(pv);
        if (isPass)
            return;
        paramsValidtor.errors.forEach((err) => {
            console.log(JSON.stringify(err, null, 2));
        });
        return options.status;
    };
};
exports.params = params;
