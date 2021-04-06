## Transition

参考`CSSTransition`API，做的简单动画库

动画重要的`timing`

- enter 只在第一帧出现
- enterActive 存在于整个动画过程 动画结束后移除
- enterDone 存在于第一帧之后的动画过程 动画结束后移除
- exit 只在第一帧出现
- exitActive 存在于整个动画过程 动画结束后移除
- exitDone 存在于第一帧之后的动画过程 动画结束后移除

对应的比如`fade`,会依次触发：`fade-enter`, `fade-enter-active`, `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`。

API:

- classNames。string | object
- in。boolean

classNames 如果是 string 比如 fade，相当于声明了一系列 classNames 如下：

```js
{
	enter: 'fade-enter',
	enterActive: 'fade-enter-active',
	enterDone: 'fade-enter-done',
	exit: 'fade-exit',
	exitActive: 'fade-exit-active',
	exitDone: 'fade-exit-done'
}
```

钩子函数：

- onEnter 当出现的动画开始时
- onEntered 当出现的动画结束之后
- onExit 当动画结束时
- onExited 当动画结束之后

## 还有问题

**你怎么知道第一次进来需不需要动画？？？**

比如用在 modal 上面，第一次 mount 就需要动画，但是大部分情况不需要第一次出现的动画
