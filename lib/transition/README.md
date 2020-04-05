## Transition

参考`CSSTransition`API，做的简单动画库

动画重要的`timing`

- enter
- enterActive
- enterDone
- exit
- exitActive
- exitDone 

对应的比如`fade`,会依次触发：`fade-enter`, `fade-enter-active`, `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`。

API:

- classNames。string | object
- in。boolean

钩子函数：
- onEnter
- onEntered
- onExit
- onExited
