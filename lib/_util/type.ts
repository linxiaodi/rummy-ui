import * as React from 'react';
import { SelectProps } from 'rummy-ui/select/select';

export const tuple = <T extends string[]>(...args: T): T => args

export const tupleNum = <T extends number[]>(...args: T): T => args

export interface pureObject {
  [propName: string]: any
}

// 给函数式组件增加静态属性
/**
 * React.FunctionComponent<Props> & { xxx: xxx }
 * */
export type CompoundReactFunction<T, P> = React.FunctionComponent<T> & P
