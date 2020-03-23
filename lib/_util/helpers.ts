import cs from 'classnames';

interface pureObject {
  [propName: string]: any
}

enum PrimitiveType {
  Object = 'Object',
  Array = 'Array',
  Undefined = 'Undefined',
  Null = 'Null',
  Function = 'Function'
}

export const scopeHelper = (scope: string) => (subClass?: string, ...rest: any[]): string => cs(subClass ? `${scope}-${subClass}` : scope, ...rest);

export const checkType = (target: any):PrimitiveType => {
  return Object.prototype.toString.call({}, target)
}

export const deepClone = <T = pureObject>(target: T):any => {
  if (typeof target === 'object' && target !== null) {
    if (Array.isArray(target)) {
      return target.reduce((collection, key) => {
        collection[key] = deepClone(target[key])
        return collection
      }, [])
    } else if (Object.prototype.toString.call(target) === '[object Object]') {
      return Object.keys(target).reduce((collection: pureObject, key: string) => {
        collection[key] = deepClone((target as pureObject)[key])
        return collection;
      }, {})
    }
  } else {
    return target
  }
}

export const isNeil = (value: any) => {
  if (value === null || value === undefined) {
    return true
  }
  return false
}

