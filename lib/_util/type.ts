export const tuple = <T extends string[]>(...args: T): T => args

export const tupleNum = <T extends number[]>(...args: T): T => args

export interface pureObject {
  [propName: string]: any
}
