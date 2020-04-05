import React, { useState, Fragment } from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/dracula';
import cs from 'classnames';
// import c from '../lib/button/button.example'


interface DemoProps {
  code?: string,
  path: string,
  title?: string,
  desc?: string
}

const Demo:React.FunctionComponent<DemoProps> = (props) => {
  const [showCode, setShowCode] = useState(false)
  // 加载原始代码txt
  const code = require(`!!raw-loader!../lib/${props.path}`).default
  // 加载Loader过后的代码
  const Component = require(`../lib/${props.path}`).default
  const codeSource = (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
      )}
    </Highlight>
  )

  return (
    <Fragment>
      {props.title && <h3>{props.title}</h3>}
      {props.desc && <p>{props.desc}</p>}
      <div className="demo-container">
        <div className="source">
          <Component/>
        </div>
        <pre className={cs({ 'ru-hide': !showCode }, 'code-preview')}>
        {codeSource}
      </pre>
        <div onClick={() => setShowCode(!showCode)} className="showCode-btn">
          <span>{showCode ? '隐藏代码' : '显示代码'}</span>
        </div>
      </div>
    </Fragment>
  )
}

export default Demo
