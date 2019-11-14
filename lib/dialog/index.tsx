import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types'
import cs from 'classnames'


interface DialogProps {
  visible?: Boolean,
  title: string | React.ReactNode,
  className?: string
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const { title } = props;
  const [visible, setVisisble] = useState(props.visible || false)
  const wrapperClass = cs(props.className, 'fisher-dialog-mask', { hide: visible })
  return (
    <Fragment>
      <div className={wrapperClass}/>
      <div className="fisher-dialog-body">
        <div className="fisher-dialog-header">
          <div className="fisher-dialog-header__title">
            { props.title }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// Dialog.propTypes = {
// }

// Dialog.defaultProps = {
// }

export default Dialog;