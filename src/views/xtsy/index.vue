<template>
  <div>
    <div class="con_right">
      <div class="con_title">
        <div class="stsy">
          <span>系统首页</span>
        </div>
      </div>
      <div class="con_con">
        <div class="con_con_top">
          <div class="top_left">
            <div class="tu"><img src="../../assets/1.png" alt="" /></div>
            <div class="zi">
              <p>登录账号：1436251959</p>
              <p>姓名：111</p>
              <p>上次登录时间：2021年10月23日13:56:11</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.con_right {
  width: 999px;
  height: 549px;
  // background: green;
  border-left: 1px solid gray;
  .con_title {
    width: 100%;
    height: 50px;
    background: rgb(20, 20, 20);
    border-bottom: 1px solid gray;
    .stsy {
      font-size: 15px;
      width: 100px;
      line-height: 50px;
      color: white;
      margin-left: 20px;
    }
  }
  .con_con {
    width: 100%;
    height: 498px;
    // background: yellow;
    .con_con_top {
      width: 100%;
      height: 200px;
      background: rgb(20, 20, 20);
      // background: green;
      border-bottom: 1px solid gray;
      .top_left {
        width: 330px;
        height: 199px;
        // background: yellow;
        display: flex;
        align-items: center;
        .tu {
          width: 66px;
          height: 65px;
          img {
            width: 66px;
            height: 65px;
          }
        }
        .zi {
          width: 234px;
          height: 134px;
          // background: pink;
          font-size: 12px;
          line-height: 40px;
          text-align: left;
          margin-left: 20px;
          color: white;
        }
      }
    }
  }
}
</style>