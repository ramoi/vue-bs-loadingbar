# vue-bs-loadingbar

> VueJs와 bootstrap를 이용한 간단한 로딩바입니다.  

## 설치 

	yarn add vue-bs-loadingbar --dev

## 설정

```
import loadingbar from 'vue-bs-loadingbar'

Vue.use( loadingbar )
```

## Vue

``` 
//3초후 자동으로 사라짐
this.showLoadingBar(3000)

//3초후 자동으로 사라짐, 그리고 alert 메세지를 2초간 보여줌
this.showLoadingBar({milliSec :3000, countDown:2, alertMsg : '응답시간 초과'})

//3초후 자동으로 사라짐, 그리고 alert 메세지를 보여줌
this.showLoadingBar({milliSec :3000, countDown:2, alertMsg : '응답시간 초과'})

//3초후 자동으로 사라짐, 그리고 alert 메세지를 보여줌
this.showLoadingBar({milliSec :3000, alertMsg : '응답시간 초과'})

//로딩바를 계속 보여줌
this.showLoadingBar()

//로딩바가 사라짐
this.hideLoadingBar()
```

![캡쳐화면](https://github.com/ramoi/vue-bs-loadingbar/blob/master/sampleImg/loadingbar.png)
