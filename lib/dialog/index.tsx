// @ts-ignore
import React, { useState, Fragment } from 'react';
import { Icon } from 'fisher-ui'
import cs from 'classnames'


interface DialogProps {
  visible?: Boolean,
  title: string | React.ReactNode,
  className?: string
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const { title, visible } = props;
  const wrapperClass = cs(props.className, 'fisher-dialog-mask', { hide: visible })
  const dialogClass = cs({ hide: visible }, 'fisher-dialog-body')
  return (
    <Fragment>
      <div className={wrapperClass}/>
      <div className={dialogClass}>
        <div className="fisher-dialog-header">
          <div className="fisher-dialog-header__title">
            { title }
            <Icon name="close"/>
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