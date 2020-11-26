## Walle

walle瓦力，是抽奖游戏模块化的大管家，它始于抽奖但不止于抽奖，可应用到其他项目。

> 所有通用模块样式可以高度定制 属性定义参考[style](<./Style>)



### 安装

```sh
npm i @byhealth/walle -S
```



### 结构

![Walle](./Walle.png)

### 底层模块

```javascript
import {Loading, Modal, Message, Picker} from '@byhealth/walle';
```

- #### 页面加载 [Loading](<http://www.eightfeet.cn/Loading/>)

- #### 页面弹窗 [Modal](<http://www.eightfeet.cn/Modal/>)

- #### 弱提示 [Message](<http://www.eightfeet.cn/Message/>)

- #### 选择器 [Picker](<https://github.com/eightfeet/Picker/blob/master/readme.MD>)






### 游戏模块 

[demo](<./dist>)



```javascript
import {AddressModal, ResultModal, NoticeModal, Msg } from '@byhealth/walle';
```

- #### 填写收货人地址弹窗 [AddressModal](< ./AddressModal >) 

- #### 抽奖结果弹窗 [ResultModal](< ./ResultModal >)

- #### 消息弹窗 [NoticeModal](< ./NoticeModal >) 

  #### ...





工具包



### 工具包

```javascript
{
	validate: {...}
    htmlFactory: {
		createDom, 
		removeDom,
		combineDomByClass,
		inlineStyle
	},
	tools: {
		isPC,
		isObject,
		countDown,
		dormancyFor,
		fixpx,
		setEmBase
	},
	regionsDataFormat: {
		formatWheelsData,
		getPositionByDefaultValue
	},
	webAnimation: {
		onceTransitionEnd,
		onceAnimationEnd
	}
}
```

## to do list
- [ ] change to typescript