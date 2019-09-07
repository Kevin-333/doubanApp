<template>
    <div class="box">
        <div class="header">
            <h2><span @click="back()">取消</span>登录豆瓣</h2>
        </div>
        <div class="inputs">
            <div class="mui-input-row">
                <input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="uname">
            </div>
            <div class="mui-input-row">
                <input type="password" class="mui-input-clear mui-input-password" placeholder="请输入密码" v-model="pwd">
            </div>
        </div>
        <div class="but">
			<button type="button" class="mui-btn mui-btn-success" @click="fun()">登录</button>
		</div>
        <p>使用其他方式登录 & 找回密码</p>
		<p><a href="#">注册豆瓣账号</a><span></span><a href="#">下载豆瓣App</a></p> 
    </div>
</template>
<script>
export default {
    components:{},
    data(){
		return {
            uname:"",
			pwd:"",			
		}
    },
    methods: {
        back(){
             this.$router.go(-1)
        },
		fun(){
			var param=new URLSearchParams;

			param.append("uname",this.uname)
			param.append("pwd",this.pwd)
			
			this.axios({
				url:'http://localhost:3000/login',
				method:'post',
				data:param
			}).then((ok)=>{
				console.log(ok.data)
				console.log(this.text)
				if(ok.data.linkid==2){
					alert("登录成功-3-秒后自动跳转至首页")
					var i=3;
					setInterval(function(){
						
						i--;
						if(i==3){
							window.location.href="index.html"
						}
						
					},1000)

				}else if(ok.data.linkid==3){
					alert("登陆失败,请确认登录信息")
				}
			})

		}
	},
}
</script>
<style scoped>
    .box>div{
        padding: 0 0.2rem;
    }
    .header{
        height: 0.5rem;

        border-bottom: .01rem solid #eee;
    }
    .header h2{
        text-align: center;
        padding-right: 0.3rem;
        line-height: 0.5rem;
        font-size: 0.18rem;
    }
    .header span{
        float: left;
        color: #42bd56;
        font-size: 0.16rem;
        font-weight: 400;
        line-height: 0.5rem;

    }
    .inputs{
        margin-top: 0.3rem;
        
    }
    .inputs div:first-child{
        border-top:1px solid rgba(0, 0, 0, .2);
    }
    .inputs input{
		height: 0.5rem;
		margin-bottom: 0;
		border-top:none;
		border-radius: 0;
		
	}
	::-webkit-input-placeholder{
		color:#ccc;
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
		margin-bottom: 0.2rem;
	}
    .box p span{
        padding: 0 0.06rem;
    }
	.box a{
		color: #42bd56;
	}
</style>