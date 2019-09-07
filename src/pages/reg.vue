<template>
    <div class="box">
		<h1 class="tit">欢迎加入豆瓣</h1>
								
		<div>
			<div class="mui-input-row">
				<input type="text" class="mui-input-clear" placeholder="请输入邮箱" v-model="uemail">
			</div>
			<div class="mui-input-row">
				<input type="password" class="mui-input-clear mui-input-password" placeholder="请输入密码" v-model="pwd">
			</div>
			<div class="mui-input-row">
				<input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="uname">
			</div>			
		</div>
		<div class="but">
			<button type="button" class="mui-btn mui-btn-success" @click="fun()">立即注册</button>
		</div>
		<p>点击「注册」代表你已阅读并同意用户使用协议</p>

		<p><a href="#">下载豆瓣App</a></p>
		
    </div>
</template>
<script>
export default {
	components:{},
	data(){
		return {
			uemail:"",
			pwd:"",
			uname:""
		}
	},
	methods: {
		fun(){
			var param=new URLSearchParams;

			param.append("uemail",this.uemail)
			param.append("pwd",this.pwd)
			param.append("uname",this.uname)
			this.axios({
				url:'http://localhost:3000/reg',
				method:'post',
				data:param
			}).then((ok)=>{
				console.log(ok.data)
				console.log(this.text)
				if(ok.data.linkid==1){
					alert("注册成功-3-秒后自动跳转至首页")
					var i=3;
					setInterval(function(){
						
						i--;
						if(i==0){
							window.location.href="index.html"
						}
						
					},1000)

				}else if(ok.data.linkid==0){
					alert("连接超时请稍后再试")
				}
			})

		}
	},
}
</script>
<style scoped>
	.box{
		padding: 0 0.18rem
	}
    .tit{
		margin: 10% 0 15%;
		font-size: .4rem;
		font-weight: 300;
		color: #42bd56;
		text-align: center;
	}
	.box div input{
		height: 0.5rem;
		margin-bottom: 0;
		border-top:none;
		border-radius: 0;
		
	}
	::-webkit-input-placeholder{
		color:#ccc;
	}
	.box>div{
		border-top:1px solid rgba(0, 0, 0, .2);
	}
	.but>button{
		width: 100%;
		height: 0.5rem;
		font-size: 0.16rem;
		background: #42bd56;
		margin: 0.2rem 0 0.3rem;
	}
	.box p{
		text-align: center;
		margin-bottom: 0.5rem;
	}
	.box a{
		color: #42bd56;
	}
</style>