<br>
## 小游戏创建流程
1. 创建画布--创建`canvas`元素并设置其宽高属性，最后添加至`<body>`标签后
	- `document.createElement()` 
	- `canvas.getContext("2d")`
	- `canvas.width/canvas.height`

2. 准备图片--创建图片对象，声明图片加载flag，设置图片`src`属性
	- `new Image()`
	- `bgImage.onload = {}`
	- `bgImage.src`

3. 游戏对象--创建英雄、怪物对象。英雄有个`speed`属性控制他每秒移动多少像素。用`monsterCaught`存储怪物被捉住的次数，初始值为0
	- `hero`
	- `monster`
	- `monsterCaught`

4. 处理用户的输入--先保存用户的输入至`keysDown`对象，稍后再做相应处理
	- `keysDown`
	- `addEventLinstener()`

5. 开始一轮游戏--用`reset`开始一轮新的游戏，每次将怪物放到一个随机的地方
	- `hero.x/hero.y`
	- `reset=function(){}`
	- `monster.x/monster.y`

6. 更新对象--更新`hero`的坐标，控制其移动，判断`hero`是否抓到`monster`，抓到就`reset()`。传入`modifier`变量，`update`在`main`函数调用
	- `update=function(){}`
	- `if(38/39/40/37 in keysDown)`
	- `if（）`//判断是否抓到

7. 渲染物体--之前的代码都是准备前期工作和处理游戏状态等，接下去需要把所以东西画出来。先画背景图，再画人物。调用`fillText`绘制文字。绘制部分完成！
	- `render=function(){}` //image ready了，才画进去
	- `cxt.drawImage(image,x,y)` //之前计算得到的`hero.x/y`,`monster.x/y`,此处渲染的时候可用。
	- `fillStyle/font/textAlign/textBaseline/fillText("",x,y)`

8. 主循环函数--实现游戏的循环结构，将它放在`main`里。先拿到时间差，将时间差/1000，传入`update()`函数，再`render()`，并将本次的时间保存下来。最后用`requestAnimationFrame(main)`循环函数。
	- `main=function(){}`
	- `requestAnimationFrame()`

9. 设置`requestAnimationFrame()`--浏览器兼容性的解决
	- `var w=window;`
	- ```
requestAnimationFrame = w.requestAnimationFrame ||w.webkitRequestAnimationFrame ||w.msRequestAnimationFrame || w.mozRequestAnimationFrame;```


10. 最后启动游戏
	- `then`
	- `reset()`
	- `main()`