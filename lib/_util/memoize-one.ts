/**
 * @file
 * function memo
 * 可以参考 https://github.com/alexreardon/memoize-one
 * const f1 = n => { console.log(n) }
 * const f = memo(f1)
 * f(1) // 1
 * f(1) // console no call
 * f(2) // 2
 * */

// function memoizeOne(func) {
//   let rememberArgs = []
//   let rememberRes
//   return function (...args) {
//     if (rememberArgs.length > 0) {
//       const isSame = rememberArgs.length === args.length && rememberArgs.every((n, i) => {
//         return n === args[i]
//       })
//       if (isSame) {
//         return rememberRes
//       } else {
//         rememberArgs = args;
//         rememberRes = func.call(this, ...args)
//       }
//     } else {
//       rememberArgs = args;
//       rememberRes = func.call(this, ...args)
//     }
//   }
// }

export interface IsEqual {
  (newArgs: any[], oldArgs: any[]): boolean
}

function isEqual(newArgs: any[], oldArgs: any[]) {
  if (newArgs.length !== oldArgs.length) return false;
  for (let i = 0; i < newArgs.length; i++) {
    // using shallow equality check
    if (newArgs[i] !== oldArgs[i]) {
      return false;
    }
  }
  return true;
}

export default function memoizeOne<
  T extends (this: unknown, ...newArgs: unknown[]) => ReturnType<T>
  >(resultFn: T, isEquial: IsEqual = isEqual): T {
  let lastResult:ReturnType<T>
  let lastArgs: unknown[] = []
  let lastThis: unknown

  const memoized = function(this: unknown, ...newArgs: unknown[]) {
    if (lastThis === this && isEquial(newArgs, lastArgs)) {
      return lastResult
    }

    lastResult = resultFn.call(this, ...newArgs)
    lastThis = this
    lastArgs = newArgs
    return lastResult;
  }
  return memoized as T;
}

