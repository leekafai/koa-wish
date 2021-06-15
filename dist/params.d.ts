import { JSONSchema7Definition } from 'json-schema';
declare type properties = {
    [key: string]: JSONSchema7Definition;
};
interface paramsValidOptions {
    /**
     * response status code
     */
    status?: 404 | number;
}
declare const params: (properties: properties, options?: paramsValidOptions) => (params: {
    [key: string]: string;
}) => number;
export { params };
