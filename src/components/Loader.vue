<template>
	<div>
		<div v-show='isShow'>
			<div class='loadingarea  d-flex justify-content-center'>	
				<div class='align-self-center'>	
					<div>	
						<div class="spinner-grow text-primary" role="status">
							<span class="sr-only">Loading...</span>
						</div>
						<div class="spinner-grow text-secondary" role="status">
							<span class="sr-only">Loading...</span>
						</div>
						<div class="spinner-grow text-success" role="status">
							<span class="sr-only">Loading...</span>
						</div>
						<div class="spinner-grow text-danger" role="status">
							<span class="sr-only">Loading...</span>
						</div>
						<div class="spinner-grow text-warning" role="status">
							<span class="sr-only">Loading...</span>
						</div>
						<div class="spinner-grow text-info" role="status">
							<span class="sr-only">Loading...</span>
						</div>
						<div class="spinner-grow text-light" role="status">
							<span class="sr-only">Loading...</span>
						</div>
						<div class="spinner-grow text-dark" role="status">
							<span class="sr-only">Loading...</span>
						</div>
					</div>
				</div>		
			</div>
		</div>
		<div v-show='isShowAlert'>
			<div class='bAlert  d-flex justify-content-center'>	
				<div class='spinner align-self-center'>	
					<b-alert dismissible fade :show="bAlert" @dismissed="bAlert=false" variant="warning" >{{alertMsg}}</b-alert>
				    <b-alert dismissible fade :show="dismissCountDown" @dismissed="dismissCountDown=0" variant="warning" @dismiss-count-down="countDownChanged">{{alertText}}</b-alert>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import 'bootstrap/dist/css/bootstrap.css'
	import 'bootstrap-vue/dist/bootstrap-vue.css'
	import BAlert from 'bootstrap-vue/es/components/alert/alert'

	export default {
		name : 'loader',
		components : {
			'b-alert': BAlert
		},
		props : {
			isShow : { type : Boolean, required : false}
		},
		data() {
			return {
				bAlert : false,
				dismissCountDown : 0,
				alertMsg : '',
			}
		},
		methods : {
			countDownChanged(dismissCountDown) {
				if (dismissCountDown == 0 ) {console.log('changed', '000000')}
				this.dismissCountDown = dismissCountDown
			},
			show(delay) {
				this.isShow = true

				if(delay !== undefined ) {
					let $this = this
					switch(typeof(delay)) {
						case 'number' :
							setTimeout( () => {
								if( $this.isShow ) { $this.hide() }
							}, delay )
							break
						case 'object' :
							setTimeout( () => {
								if( $this.isShow ) { 
									$this.hide() 

									if( delay.alertMsg ) {
										$this.alertMsg = delay.alertMsg
										if( delay.countDown !== undefined ) {
											$this.dismissCountDown = delay.countDown
										} else {
											$this.bAlert = true
										}
									}
								}
							}, delay.milliSec )

					}
				}
			},
			hide() {
				this.isShow = false
			}
		}, 
		computed : {
			isShowAlert : function() {
				console.log( this.bAlert, this.dismissCountDown, this.bAlert || this.dismissCountDown  )
				return ( this.bAlert || this.dismissCountDown )
			},
			alertText : function() {
				console.log('computed', this.dismissCountDown)
				return this.dismissCountDown === 0 ? this.alertMsg : `${this.alertMsg} [ ${this.dismissCountDown} ]`
			}
		}
	}
</script>

<style type="text/css" media="screen">
.loadingarea {
    position: fixed;
    top: 0; right: 0;
    bottom: 0; left: 0;
    width:100%; height:100%;
    background: rgba(255,255,255,0.5)
}
 
.bAlert {
	position: fixed;
    top: 0; right: 0;
    bottom: 0; left: 0;
    width:100%; height:100%;
}

.bAlert > div {
	width : 80%;
}
</style>