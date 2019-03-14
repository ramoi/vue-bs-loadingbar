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
<template>
  <div id="app">
    <input type="button" name="loadingBar1" value='3초 후 사라짐' @click='loadingbar1()'>
    <input type="button" name="loadingBar2" value='3초후 2 alert' @click='loadingbar2()'>
    <input type="button" name="loadingBar3" value='3초후 alert' @click='loadingbar3()'>
    <!-- <input type="button" name="loadingBar3" value='1' @click='loadingbar4()'> -->
    <input type="button" name="loadingBar3" value='showLoadingBar' @click='loadingbar5()'>
  </div>
</template>

export default {
  name: 'app',
  components : {
    // 'loadingbar' : loadingbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow : true
    }
  },
  methods : {
    loadingbar1 : function() {
	//3초후 자동으로 사라짐
      this.showLoadingBar(3000)
    },
    loadingbar2 : function() {
	//3초후 자동으로 사라짐, 그리고 alert 메세지를 2초간 보여줌
      this.showLoadingBar({milliSec :3000, countDown:2, alertMsg : '응답시간 초과'})
    },
    loadingbar3 : function() {
	//3초후 자동으로 사라짐, 그리고 alert 메세지를 보여줌
      this.showLoadingBar({milliSec :3000, alertMsg : '응답시간 초과'})
    },
    loadingbar5 : function() {
	//로딩바를 계속 보여줌
      this.showLoadingBar()
    },
    showHiding : function() {
    	//ajax를 call 하기전 loadingbar를 보여줌
		this.showLoading()
    	this.$http.get('url.......')
			.then((r) => {
				//ajax 호출 후, loadingbar를 숨긴다.
				this.hideLoading()
			})    	
    }
  }
}
</script>

```

![캡쳐화면](https://github.com/ramoi/vue-bs-loadingbar/blob/master/sampleImg/loadingbar.png)
