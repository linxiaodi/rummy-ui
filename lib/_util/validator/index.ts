/**
 * @file 简单的校验器
 * */
import { deepClone, isNeil } from '../helpers';
import { maxLimit, minLimit, required } from './rules';

export interface CustomValidator {
  (value: any, rule: RuleItem, cb: (err?: string) => void): any
}

export interface RuleItem {
  type?: LimitType,
  require?: boolean,
  minLen?: number,
  maxLen?: number,
  message: string,
  validator?: CustomValidator,
  [propName: string]: any
}

/**
 * {
 *   name: [
 *     { require: true, message: '输入姓名', validator(value, rule, cb) {} },
 *     { maxLen: 5, message: '姓名控制在5行内' }
 *   ]
 * }
 * */

export interface Rules {
  [propName: string]: RuleItem | RuleItem[]
}

export interface ErrorMsg {
  [propName: string]: 'string'
}

export interface Source {
  [propName: string]: any
}


const LIMIT_TYPE: string[] = ['string', 'number']

type LimitType = 'string' | 'number'

class Validator {
  rules: Rules
  constructor(rules: Rules) {
    this.rules = JSON.parse(JSON.stringify(rules));
    this.define();
    this.addRules();
  }
  validate(fieldName?: string) {
    const errorMsg: ErrorMsg = {}
    // 校验全部
    if (fieldName) {
      Object.keys(this.rules).forEach((key) => {
        const ruleItem = this.rules[key]
      })
    }
  }

  // transform to rules
  define() {
    this.rules = Object.keys(this.rules).reduce((collection: Rules, key) => {
      const item = this.rules[key];
      collection[key] = Array.isArray(item) ? item : [item];
      return collection;
    }, {} as Rules)
  }

  addRules() {
    Object.keys(this.rules).forEach((key) => {
      const rules = this.rules[key]
      for (let item of rules as RuleItem[]) {
        if (item.require) {
          item.validator = required
          continue;
        }
        if (item.maxLen) {
          item.validator = maxLimit
          continue
        }
        if (item.minLen) {
          item.validator = minLimit
          continue
        }
      }
    })
  }

  start(source: Source) {
    return new Promise((resolve, reject) => {
      let promiseArr: Promise<any>[] = []
      const errorCollection:ErrorMsg = {}
      Object.keys(this.rules).forEach((key) => {
        const rules = this.rules[key] as RuleItem[]
        const value = source[key]
        const p = new Promise((res, rej) => {
          this.executeEach(rules, value, (error) => {
            if (error) {
              Object.assign(errorCollection, { [key]: error })
              rej()
            } else {
              res()
            }
          })
        })
        promiseArr.push(p)
      })
      Promise.all(promiseArr).then(resolve, (errors: ErrorMsg[]) => {
        console.log(errorCollection)
        reject(errorCollection)
      })
    })
  }

  executeEach(chain: RuleItem[], value: any, callback: (err?: string) => any) {
    const step = (index: number) => {
      if (index === chain.length) {
        callback()
      } else {
        const validator = chain[index].validator as CustomValidator
        validator.call(undefined, value, chain[index], (error: string) => {
          if (error) {
            callback(error)
          } else {
            step(index + 1)
          }
        })
        step(index + 1)
      }
    }
    step(0)
  }

  /**
   * {
   *   require: true
   *   maxLen: 6,
   *   minLen: 5
   * }
   * 转换成
   * [require(value), maxLem(value, 6), minLen(value, 5)]

  addRuleExecutor(ruleItem: RuleItem) {
    let collection = []
    if (ruleItem.require) {
      collection.push((value: any) => {
        return required(value)
      })
    }
    if ('maxLen' in ruleItem) {
      collection.push((value: any) => {
        return maxLimit(value, ruleItem.maxLen)
      })
    }
    if ('minLen' in ruleItem) {
      collection.push((value: any) => {
        return minLimit(value, ruleItem.minLen as number)
      })
    }
    return collection
  }

  // 执行结果如果成功则返回message: 'string'
  executor(value: any, collection: ((value: any) => boolean)[], ruleItem: RuleItem) {
    // 执行器的结果
    const resFlag: boolean = collection.every((func) => {
      return func.call(undefined, value)
    })
    if (resFlag) {
      return ruleItem.message || '失败'
    }
    return null
  }
   * */
}

export default Validator