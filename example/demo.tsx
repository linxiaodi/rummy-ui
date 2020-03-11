import React from 'react'
// import c from '../lib/button/button.example'


interface DemoProps {
  code?: string,
  path?: string
}

const Demo:React.FunctionComponent<DemoProps> = (props) => {
  // 加载原始代码txt
  const code = require(`!!raw-loader!../lib/${props.path}`)
  // 加载Loader过后的代码
  const Source = require(`../lib/${props.path}`).default
  return (
    <div>
      <Source/>
      <pre>
        {code.default}
      </pre>
    </div>
  )
}

export default Demo
