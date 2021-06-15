import { JSONSchema7Definition } from 'json-schema'
import Ajv, { JSONSchemaType } from "ajv"
import ajvErrors from "ajv-errors"
type properties = {
  [key: string]: JSONSchema7Definition;
};
const ajv = new Ajv({ coerceTypes: true, allErrors: true })
ajvErrors(ajv, { keepErrors: true })
interface paramsValidOptions {
  /**
   * response status code
   */
  status?: 404 | number
}
const params = (properties: properties, options?: paramsValidOptions) => {
  const schema: JSONSchema7Definition = {
    type: 'object',
    properties: properties,
    required: Object.keys(properties)
  }
  const paramsValidtor = ajv.compile(schema)

  return (params: { [key: string]: string }) => {
    const pv = { ...params }
    const isPass = paramsValidtor(pv)

    if (isPass) return

    paramsValidtor.errors.forEach((err) => {
      console.log(JSON.stringify(err, null, 2))
    })

    return options.status
  }
}
export { params }