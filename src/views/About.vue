<template>
  <div class="about">
    <div class="title">
      <div class="title_left">
        <span>VR 开发智能实训平台</span>
      </div>

      <div class="title_right">
        <span>李老师，您好</span>
        <span>时间</span>
        <router-link to="/" class="tuichu">退出</router-link>
      </div>
    </div>
    <div class="con_box">
      <div class="con_left">
        <ul>
          <li><router-link to="/about/"  class="sy">系统首页</router-link></li>
          <li><router-link to="/about/jbxx"  class="sy">基本信息</router-link></li>
          <li><router-link to="/about/kcgl"  class="sy">课程管理</router-link></li>
          
        </ul>
      </div>
          <router-view />
    </div>

  </div>
</template>
<script>
  
</script>
<style lang="scss">
ul,li{
  list-style: none;
}
.about {
  width: 1200px;
  height: 600px;
  // background: red;
  margin: 0 auto;
  .title {
    width: 100%;
    height: 50px;
    background: black;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title_left {
      margin-left: 20px;
      color: white;
    }
    .title_right {
      width: 500px;
      height: 50px;
      // background: blue;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      .tuichu {
        color: white;
      }
    }
  }
  .con_box {
    width: 100%;
    height: 549px;
    display: flex;
    border-top: 1px solid grey;
    background: black;
    .con_left {
      width: 200px;
      height: 549px;
      // background: red;
      li{
        width: 100%;
        height: 50px;
        // background: yellow;
        line-height: 50px;
        border-bottom: 1px solid gray;
        color: white;
        .sy{
          color: white;
        }
      }
    }
    
  }
}
</style>
