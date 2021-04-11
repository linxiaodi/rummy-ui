import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlight, {defaultProps} from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/dracula';

class DemoCode extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { code } = this.props;
		
		console.log(code);
		return (
			<div>
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
			</div>
		);
	}
}

DemoCode.propTypes = {
	id: PropTypes.string,
	code: PropTypes.string,
	source: PropTypes.string,
}

export default DemoCode;
