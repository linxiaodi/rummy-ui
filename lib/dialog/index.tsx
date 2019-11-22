// @ts-ignore
import React, { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'fisher-ui';
import cs from 'classnames';
import { setBodyOverflow } from '../_util/dom';
import { Button } from 'fisher-ui';
import './index.scss';
import { scopeHelper } from 'fisher-ui/_util/helpers';

const scope = scopeHelper('fisher-dialog');

interface DialogProps {
  visible?: Boolean,
  title: string | React.ReactNode,
  className?: string,
  children?: string | React.ReactNode,
  onCancel?: () => any,
  buttons?: React.ReactNode | Array<React.ReactElement>
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const { title, visible, buttons } = props;
  const wrapperClass = cs(props.className, scope('mask'), { hide: !visible });
  const dialogClass = cs({ hide: !visible }, scope());
  if (visible) {
    setBodyOverflow('hidden');
  } else {
    setBodyOverflow();
  }
  const onCancel = () => props.onCancel && props.onCancel();
  // footer
  let dialogFooter;
  if (Array.isArray(buttons)) {
    dialogFooter = (buttons as Array<ReactElement>).map((Comp, i) => {
      return React.cloneElement(Comp, { key: i });
    });
  } else {
    if (buttons) {
      dialogFooter = buttons;
    }
  }
  const result = (
    <Fragment>
      <div onClick={onCancel} className={wrapperClass}/>
      <div className={dialogClass}>
        <div className={scope('header')}>
          <div className={scope('header__title')}>{title}</div>
          <Icon className={scope('close')} name="close"/>
        </div>
        <div className={scope('body')}>
          {props.children}
        </div>
        {
          dialogFooter && <div className={scope('footer')}>
            {dialogFooter}
					</div>
        }
      </div>
    </Fragment>
  );
  // 把dialog放在最外层
  return ReactDOM.createPortal(result, document.body);
};

// Dialog.propTypes = {
// }

// Dialog.defaultProps = {
// }

export default Dialog;