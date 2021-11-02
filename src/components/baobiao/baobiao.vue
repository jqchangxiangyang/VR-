<template>
  <div class="tab">
    <div class="tad">
      <!-- <p>HR日报表</p> -->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <p class="xiangxi">详细数据</p>
          <ul>
            <li class="obj">
              <ul class="obj1">
                <li>时间</li>
                <li>在职人数</li>
                <li>招聘岗位</li>
                <li>入职人数</li>
                <li>离职人数</li>
                <li>兼职人数</li>
                <li>出勤率</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>12:12</li>
                <li>66</li>
                <li>10</li>
                <li>25</li>
                <li>39</li>
                <li>25</li>
                <li>90.51%</li>
              </ul>
            </li>
            <li class="obj">
              <ul class="obj1">
                <li>12:13</li>
                <li>66</li>
                <li>66</li>
                <li>25</li>
                <li>39</li>
                <li>26</li>
                <li>20.51%</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>12:12</li>
                <li>66</li>
                <li>10</li>
                <li>25</li>
                <li>39</li>
                <li>25</li>
                <li>90.51%</li>
              </ul>
            </li>
            <li class="obj">
              <ul class="obj1">
                <li>12:13</li>
                <li>66</li>
                <li>66</li>
                <li>25</li>
                <li>39</li>
                <li>26</li>
                <li>20.51%</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>12:12</li>
                <li>66</li>
                <li>10</li>
                <li>25</li>
                <li>39</li>
                <li>25</li>
                <li>90.51%</li>
              </ul>
            </li>
            <li class="obj">
              <ul class="obj1">
                <li>12:13</li>
                <li>66</li>
                <li>66</li>
                <li>25</li>
                <li>39</li>
                <li>26</li>
                <li>20.51%</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>12:12</li>
                <li>66</li>
                <li>10</li>
                <li>25</li>
                <li>39</li>
                <li>25</li>
                <li>90.51%</li>
              </ul>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <p class="xiangxi">配置管理</p>
          <ul>
            <li class="obj">
              <ul class="obj1">
                <li>时间</li>
                <li>在职人数</li>
                <li>招聘岗位</li>
                <li>入职人数</li>
                <li>离职人数</li>
                <li>兼职人数</li>
                <li>出勤率</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>12:12</li>
                <li>66</li>
                <li>10</li>
                <li>25</li>
                <li>39</li>
                <li>25</li>
                <li>90.51%</li>
              </ul>
            </li>
            <li class="obj">
              <ul class="obj1">
                <li>12:13</li>
                <li>66</li>
                <li>66</li>
                <li>25</li>
                <li>39</li>
                <li>26</li>
                <li>20.51%</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>12:12</li>
                <li>66</li>
                <li>10</li>
                <li>25</li>
                <li>39</li>
                <li>25</li>
                <li>90.51%</li>
              </ul>
            </li>
            <li class="obj">
              <ul class="obj1">
                <li>12:13</li>
                <li>66</li>
                <li>66</li>
                <li>25</li>
                <li>39</li>
                <li>26</li>
                <li>20.51%</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>12:12</li>
                <li>66</li>
                <li>10</li>
                <li>25</li>
                <li>39</li>
                <li>25</li>
                <li>90.51%</li>
              </ul>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          <p class="xiangxi">角色管理</p>
          <ul>
            <li class="obj">
              <ul class="obj1">
                <li>职工</li>
                <li>组长</li>
                <li>主管</li>
                <li>副主管</li>
                <li>经理</li>
                <li>副经理</li>
                <li>总经理</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>100</li>
                <li>28</li>
                <li>18</li>
                <li>9</li>
                <li>3</li>
                <li>6</li>
                <li>2</li>
              </ul>
            </li>
            <li class="obj">
              <ul class="obj1">
                <li>100</li>
                <li>28</li>
                <li>18</li>
                <li>9</li>
                <li>3</li>
                <li>6</li>
                <li>2</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>100</li>
                <li>28</li>
                <li>18</li>
                <li>9</li>
                <li>3</li>
                <li>6</li>
                <li>2</li>
              </ul>
            </li>
            <li class="obj">
              <ul class="obj1">
                <li>100</li>
                <li>28</li>
                <li>18</li>
                <li>9</li>
                <li>3</li>
                <li>6</li>
                <li>2</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>100</li>
                <li>28</li>
                <li>18</li>
                <li>9</li>
                <li>3</li>
                <li>6</li>
                <li>2</li>
              </ul>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">
          <p class="xiangxi">定时任务补偿</p>

          <ul>
            <li class="obj">
              <ul class="obj1">
                <li>8:00-10:00</li>
                <li>10:00-12:00</li>
                <li>14:00-16:00</li>
                <li>16:00-17:30</li>
                <li>17:30-19:00</li>
                <li>19:00-21:00</li>
                <li>21:00-23:00</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>50</li>
                <li>80</li>
                <li>50</li>
                <li>50</li>
                <li>79</li>
                <li>80</li>
                <li>90</li>
              </ul>
            </li>
            <li class="obj">
              <ul class="obj1">
                <li>50</li>
                <li>80</li>
                <li>50</li>
                <li>50</li>
                <li>79</li>
                <li>80</li>
                <li>90</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>50</li>
                <li>80</li>
                <li>50</li>
                <li>50</li>
                <li>79</li>
                <li>80</li>
                <li>90</li>
              </ul>
            </li>
            <li class="obj">
              <ul class="obj1">
                <li>50</li>
                <li>80</li>
                <li>50</li>
                <li>50</li>
                <li>79</li>
                <li>80</li>
                <li>90</li>
              </ul>
            </li>
            <li class="list">
              <ul class="list1">
                <li>50</li>
                <li>80</li>
                <li>50</li>
                <li>50</li>
                <li>79</li>
                <li>80</li>
                <li>90</li>
              </ul>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="too">
      <p>tocil 85 cens</p>
      <el-pagination
        class="yeshu"
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.tab {
  width: 100%;
  height: 400px;
  margin: 0 auto;
}
.tad {
  width: 100%;
  height: 400px;
  float: right;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tab p {
  width: 100px;
  height: 40px;
  line-height: 40px;
}
.xiangxi {
  width: 1050px;
  height: 40px;
  line-height: 40px;
}
.obj {
  width: 1050px;
  height: 40px;
  line-height: 40px;
  background: #ddd;
}
.obj1 {
  color: #000;
  float: left;
}
.obj1 li {
  width: 100px;
  height: 40px;
  float: left;
  margin-left: 40px;
}
.list {
  width: 1050px;
  height: 40px;
  line-height: 40px;
  background: #fff;
}
.list1 {
  color: #ddd;
  float: left;
}
.list1 li {
  width: 100px;
  height: 40px;
  float: left;
  margin-left: 40px;
}
.too {
  float: right;
  width: 1050px;
  height: 60px;
  line-height: 60px;
}
.too p {
  width: 100px;
  height: 40px;
  line-height: 80px;
  margin-top: 10px;
}
.too .yeshu {
  margin-top: -20px;
}
</style>