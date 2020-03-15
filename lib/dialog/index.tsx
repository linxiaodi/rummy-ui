// @ts-ignore
import React, { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import cs from 'classnames';
import { setBodyOverflow } from '../_util/dom';
import { Button, Icon } from '..';
import './index.scss';
import { scopeHelper } from '../_util/helpers';
import { CSSTransition } from 'react-transition-group';

const scope = scopeHelper('ru-dialog');

interface DialogProps {
  visible: Boolean,
  title?: string | React.ReactNode,
  className?: string,
  children?: string | React.ReactNode,
  onCancel?: () => any,
  buttons?: React.ReactNode | Array<React.ReactElement>,
  closeOnClickMask?: boolean,
}

interface Species {
  content: React.ReactNode,
  title: React.ReactNode,
  afterClose?: () => void,
}

interface ModalProps extends Species {
  buttons?: Array<React.ReactElement>
}

interface AlertProps extends Species {}

interface ConfirmProps extends Species {
  onOk?: () => void
}

interface DialogType extends React.FunctionComponent<DialogProps> {
  alert?: (props: AlertProps) => any
}

const Dialog: DialogType = (props) => {
  const { title, visible, buttons, closeOnClickMask } = props;
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
      // 重新复制一份，相当于一个简单的高阶函数
      return React.cloneElement(Comp, { key: i });
    });
  } else {
    if (buttons) {
      dialogFooter = buttons;
    }
  }

  // 点击mask
  const onMaskClick: React.MouseEventHandler = () => {
    if (closeOnClickMask) {
      onCancel();
    }
  };

  // 点击esc
  // const onEscKeyDown:React.KeyboardEventHandler = (e) => {
  //   console.log(e.keyCode);
  //   if (e.keyCode === 27 && props.keyboard) {
  //     onCancel();
  //   }
  // }

  const result = (
    <Fragment>
      <div onClick={onMaskClick} className={wrapperClass}/>
        <div className={dialogClass}>
          <div className={scope('header')}>
            <div className={scope('header__title')}>{title}</div>
            <Icon onClick={onCancel} className={scope('close')} name="close"/>
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

// export const alert = () => {
// };

/**
 * modal('xxx', [], () => { 当触发关闭 })
 * */

export const modal = (props: ModalProps) => {
  const { title, afterClose, buttons, content } = props;
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), wrapper);
    ReactDOM.unmountComponentAtNode(wrapper);
    wrapper.remove();
  }

  const onCancel  = () => {
    afterClose && afterClose();
    close();
  };

  const component = (<Dialog visible={true} buttons={buttons} onCancel={onCancel } title={title}>
    {content}
  </Dialog>);

  const wrapper = document.createElement('div');

  ReactDOM.render(component, wrapper)
  document.body.append(wrapper);
  return close;
};

export const alert = (props: AlertProps) => {
  const closeBtn = <Button onClick={() => close()}>关闭</Button>
  const close = modal({
    ...props,
    buttons: [closeBtn]
  })
}

export const confirm = (props: ConfirmProps) => {
  const { afterClose, onOk } = props;
  const btns = [<Button onClick={() => {
    close();
    afterClose && afterClose();
  }}>取消</Button>, <Button type="primary" onClick={() => {
    close();
    onOk && onOk();
  }}>确定</Button>]
  const close = modal({ ...props, buttons: btns });
}

// Dialog.propTypes = {
// }

Dialog.defaultProps = {
  closeOnClickMask: true
};

Dialog.alert = alert;


export default Dialog;