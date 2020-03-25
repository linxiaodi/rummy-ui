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
    this.rules = deepClone(rules);
    this.define();
    this.addRules();
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
        if (typeof item.validator === 'function') continue;
        if (item.require) {
          item.validator = required
          continue;
        }
        if (item.max) {
          item.validator = maxLimit
          continue
        }
        if (item.min) {
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

  /**
   * 执行所有promise 直到拿到所有结果
   * 为什么不用all 或者race
   * all 一旦中间一个reject 则弹出所有错误
   * race 一旦resolve 则弹出所有
   * 明显不符合需求 我们需要的是所有promise都执行不管错误还是正确 直到status 脱离pending之后弹出
   * */
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
}

export default Validator