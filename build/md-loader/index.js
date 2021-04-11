const marked = require('marked');
const { stripOutImport, stripCodeAndLanguage } = require('./utils')
const path = require('path')
const ReactDOMServer = require('react-dom/server');

const importGraph = new Map();
const reactImportGraph = new Set(['useState, Component']);

importGraph.set('react', reactImportGraph);
importGraph.set('rummy-ui', new Set(['Button']))

const generateImportGraph = (set) => {
  let str = '';
  for (let key of set) {
    str += `${key},`;
  }
  return str.slice(0, str.length - 1)
}

module.exports = function(source) {
  console.log(source);

  let comps = new Map();

  const html = marked(source.replace(/:::\s?demo\s?([^]+?):::/g, (match, p1, offset) => {
    const id = offset.toString(36);
    let { language, code } = stripCodeAndLanguage(p1);
    const { bareCode, name } = stripOutImport(code);
    return `<div className="code-block">
  <div id="${id}"></div>
  <DemoCode code={${JSON.stringify(code).replace(/^"\n|\n"$/g, '`')}} />
</div>
`
  }))

  const compsToString = (comps) => {
    let str = ''
    for (let [key, val] of comps) {
      const { bareCode, name } = val;
      str += `
        let ${key};
        {
          ${bareCode}
          ${key} = ${name};
        }
      `
    }
    return str;
  }

  const compToMountString = (comps) => {
    let str = ''
    for (let [key, val] of comps) {
      str += `
        ReactDOM.render(React.createElement(${key}), document.querySelector('#${key}'))
      `
    }
    return str
  }

  const reactFileWrapper = `
    import React, { ${generateImportGraph(importGraph.get('react'))} } from 'react';
    import ReactDOM from 'react-dom';
    import DemoCode from 'DemoCode'
    import { ${generateImportGraph(importGraph.get('rummy-ui'))} } from 'rummy-ui';
    
    ${compsToString(comps)}
    
    class Markdown extends Component {
      componentDidMount() {
        ${compToMountString(comps)}
      }
      render() {
        return (<div>${html}</div>)
      }
    }
    export default Markdown;
  `
  return reactFileWrapper;
}
