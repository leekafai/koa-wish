import { params } from "../src/index"

const prVa = params({
  age: {
    type: 'number'
  }
}, { status: 101 })

console.log(prVa({ age: '123aaa' }))