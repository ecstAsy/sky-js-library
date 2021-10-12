/**
 * 类型判断
 * @arg {* 数据}  
 * @returns @string
 */
const Type = arg => {
  if (!arg) {
    throw new Error('Parameter is invalid!')
  }
  switch (arg.constructor) {
    case Array:
      return 'array'
    case Object:
      return 'object'
    case String:
      return 'string'
    case Function:
      return 'function'
    case Number:
      return 'number'
  }
}

/**
 * @arg {* 数据}  
 * @_type {* 类型}  
 * @returns @Boolen
 */
const isType = (arg, _type) => arg.constructor === _type

/**
 * @arg {* 数据}  
 * @returns @Boolen
 */
const isArray = arg => arg.constructor === Array

/**
 * @arg {* 数据}  
 * @returns @Boolen
 */
const isObject = arg => arg.constructor === Object

/**
 * @arg {* 数据} 
 * @returns @Boolen
 */
const isString = arg => arg.constructor === String

/**
 * @arg {* 数据}  
 * @returns @Boolen
 */
const isFunc = arg => arg.constructor === Function

/**
 * @arg  {* 数据} 
 * @returns @Boolen
 */
const isNumber = arg => arg.constructor === Number

export default {
  Type,
  isType,
  isArray,
  isObject,
  isString,
  isFunc,
  isNumber
}