<template>
  <div class="home">
    <div class="page">
      <div class="frame">
        <input type="text" placeholder="用户名" v-model="name"/>
        <input type="password" placeholder="请输入密码"  v-model="pass"/>
      </div>
      <div class="tion">
        <input type="checkbox"  @click="ber"/>
        <p style="margin-left: 10px">记住密码</p>
        <p style="margin-left: 169px">忘记密码？</p>
      </div>
      <div class="sign" @click="sign">
        <p>登录</p>
      </div>
      
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {

  },
  data(){
    return{
      name:'',
      name1:1,
      pass:"",
      pass1:2,
    }

  },
  mounted(){
    if(localStorage.getItem('name1')){
      this.name1=localStorage.getItem('name1');
      this.pass1=localStorage.getItem('pass1')
    }
  },
  methods:{
    sign(){
      if(this.name==this.name1&&this.pass==this.pass1){
        this.$router.push({
          path:"/about",
          query:{yonghu:this.name1,mima:this.pass1},
        })
        alert('登录成功')
      }else{
        alert('用户名或者密码错误')
      }
    },
    ber(){
      localStorage.setItem('name1','1');
      localStorage.setItem('pass1','2');
    }
  }
};
</script>
<style lang="scss">
*{
  margin: 0 ;
  padding: 0;
}
a{
  text-decoration: none;
  color: black;
}
.home{
  height: 100vh;
  background-size: 100% 100%;
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fe7d4851b77c22ac7e1b0e3833b7c46237cef6471.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636789395&t=9cf31c73c6ecc6073c82b5b95c0aec87);
  .page {
    width: 500px;
    height: 500px;
    background: white;

    margin: 0 auto;
    border-radius: 25px;
    opacity: 0.5;
    .frame{
      width: 300px;
      height: 150px;
      // background: red;
      margin: 0 auto;
      padding-top: 70px;
      
      input{
        width: 98%;
        height: 30px;
        margin-top: 30px;
        outline: none;
        // border: 1px solid white;
      }
    }
    .tion{
      width: 300px;
      height: 50px;
      // background: red;
      margin: 0 auto;
      display: flex;
      align-items: center;
      p{
        font-size: 12px;
      }
    }
    .sign{
      width: 300px;
      height: 50px;
      margin: 0 auto;
      background-color: grey;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
