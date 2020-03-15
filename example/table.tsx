/**
 * @file demo table
 * */
import React from 'react';

type Type = 'attribute' | 'event' | 'method'

interface TableProps {
  type?: Type,
  source: string[][],
  title: string
}

// 渲染表头策略
const renderThStats = {
  attribute: ['参数', '说明', '类型', '可选值', '默认值'],
  event: ['事件名', '说明', '参数'],
  method: ['方法名', '说明', '参数']
}

const Table: React.FunctionComponent<TableProps> = (props) => {
  const { type, title, source } = props;
  return (
    <>
      <h4>{title}</h4>
      <table className="grid">
        <thead>
          <tr>
            {renderThStats[type as Type].map((text, i) => {
              return <th key={i}>{text}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {source.map((column, i) => {
            return (<tr key={i}>
              {column.map((text, i) => {
                return <td key={i}>{text || '-'}</td>
              })}
            </tr>)
          })}
        </tbody>
      </table>
    </>
  );
};

Table.defaultProps = {
  type: 'attribute',
  title: ''
}

export default Table;
