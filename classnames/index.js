function classnames(...args) {
  let accumulate = ''
  for (const val of args) {
    if (val && typeof val === 'string') {
      accumulate += ` ${val}`
    } else if (val && typeof val === 'object') {
      if (Array.isArray(val)) {
        accumulate += ` ${classnames(...val)}`
      } else {
        accumulate += ` ${objectToClass(val)}`
      }
    }
  }
  return accumulate.trim();
}

function objectToClass(classObj = {}) {
  return Object.keys(classObj).reduce((classStr, key, i, arr) => {
    let result = classObj[key]
    if (result && typeof key === 'string') {
      classStr += key + ' '
    }
    return classStr;
  }, '').trim()
}

export default classnames;