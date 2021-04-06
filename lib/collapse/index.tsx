import React, { useEffect, useRef } from 'react';
import { useDidMount, useWillMount, useWillUnmount } from '../_util/hooks';

interface CollapseTransitionProps {
	children: React.ReactNode;
	in: boolean;
	dir?: 'horizon' | 'vertical';
}

const DIR_MAP = {
	horizon: 'width',
	vertical: 'height'
};

const CollapseTransition: React.FunctionComponent<CollapseTransitionProps> = props => {
	const { children } = props;
	const box = useRef<HTMLDivElement>(null);

	const beforeEnter = () => {
		const el = box.current!;
		el.dataset.oldPaddingTop = el.style.paddingTop;
		el.dataset.oldPaddingBottom = el.style.paddingBottom;
		el.dataset.oldOverflow = el.style.overflow;
		// el.style.height = '0';
		el.style.paddingTop = '0';
		el.style.paddingBottom = '0';
	};

	const enter = () => {
		const el = box.current!;
		//start
		el.style.display = '';
		if (el.scrollHeight !== 0) {
			el.style.height = `${el.scrollHeight}px`;
			el.style.paddingTop = el.dataset.oldPaddingTop || '0';
			el.style.paddingBottom = el.dataset.oldPaddingBottom || '0';
		} else {
			el.style.height = '';
			el.style.paddingTop = el.dataset.oldPaddingTop || '0';
			el.style.paddingBottom = el.dataset.oldPaddingBottom || '0';
		}

		el.style.overflow = 'hidden';
	};

	// 记录旧的padding overflow
	const beforeLeave = () => {
		const el = box.current!;
		el.dataset.oldPaddingTop = el.style.paddingTop;
		el.dataset.oldPaddingBottom = el.style.paddingBottom;
		el.dataset.oldOverflow = el.style.overflow;
	};

	// 把padding height 值为空
	const leave = () => {
		const el = box.current!;
		el.style.paddingTop = el.dataset.oldPaddingTop || '0';
		el.style.paddingBottom = el.dataset.oldPaddingBottom || '0';
		el.style.height = '0px';
	};

	useDidMount(() => {
		const el = box.current!;
		console.log(props.in);
		el.style.height = props.in ? '' : '0px';
	});

	useEffect(() => {
		if (props.in) {
			beforeEnter();
			enter();
		} else {
			beforeLeave();
			leave();
		}
	}, [props.in]);

	return (
		<div className="ru-collapse-transition" ref={box}>
			{children}
		</div>
	);
};

export default CollapseTransition;

CollapseTransition.defaultProps = {
	dir: 'vertical'
};
