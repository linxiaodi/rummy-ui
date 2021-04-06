## 未知宽高折叠效果

利用`ScrollHeight`去获得实际元素高度。

有个问题，如果元素赋值高度为`0px`，在这个情况下给元素加`padding`，生效否？ 实际上`padding`还在（很奇怪，`border`也会在），所以需要将`padding`去除。
