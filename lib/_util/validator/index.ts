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
    let promiseArr: Promise<any>[] = [];
    Object.keys(this.rules).forEach((key) => {
      const rules = this.rules[key] as RuleItem[];
      const value = source[key];
      const p = this.executeEach(rules, value, key);
      promiseArr.push(p);
    });
    return this.utilFinish(promiseArr);
  }

  executeEach(chain: RuleItem[], value: any, key: string): Promise<ErrorMsg | undefined> {
    return new Promise((resolve, reject) => {
      const step = (index: number) => {
        if (index === chain.length) {
          resolve()
        } else {
          const validator = chain[index].validator as CustomValidator
          validator.call(undefined, value, chain[index], (error: string) => {
            if (error) {
              reject({ [key]: error })
            } else {
              step(index + 1)
            }
          })
        }
      }
      step(0)
    })
  }

  utilFinish(promiseCollection: Promise<any>[]): Promise<ErrorMsg | undefined> {
    let count = 0
    let errors: ErrorMsg = {}
    return new Promise((resolve, reject) => {
      promiseCollection.forEach((p) => {
        p.catch((e: ErrorMsg) => {
          Object.assign(errors, e)
        }).finally(() => {
          count += 1;
          if (count === promiseCollection.length) {
            Object.values(errors).length > 0 ? reject(errors) : resolve()
          }
        })
      })
    })
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