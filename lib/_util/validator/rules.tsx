import { RuleItem, CustomValidator } from './index'

let maxLimit: CustomValidator
let required: CustomValidator
let minLimit: CustomValidator
let noop: CustomValidator


required = (value: any, rule: RuleItem, cb) => {
  if (value === undefined || value === 'null' || value === '') {
    return cb(rule.message)
  }
  return cb()
}

maxLimit = (value: any, rule: RuleItem, cb) => {
  let n = rule.max
  let message = rule.message
  if (n === undefined) return cb(message);
  if (typeof value === 'string') {
    return value.length < n ? cb() : cb(message)
  }
  if (typeof value === 'number') {
    return value < n ? cb() : cb(message);
  }
  return cb(message)
}

minLimit = (value: any, rule: RuleItem, cb) => {
  let n = rule.min
  let message = rule.message
  if (n === undefined) return cb(message);
  if (typeof value === 'string') {
    return value.length > n ? cb() : cb(message)
  }
  if (typeof value === 'number') {
    return value > n ? cb() : cb(message)
  }
  return cb(message)
}

noop = (value: any, rule: RuleItem, cb) => {
  cb()
}

export {
  maxLimit,
  minLimit,
  required,
  noop
}
