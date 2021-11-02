<template>
  <div>
    <div class="todo_box">
      <p>ToDoList</p>
      <div class="todo">
        <div class="kuang">
          <input type="text" placeholder="请输入内容" v-model="list1" />
          <button @click="add">添加</button>
        </div>
        <div class="nav">
          <div class="nav_box">
            <div
              :class="{ nav_con1: status == 'all' }"
               class="nav_con"
              @click="status = 'all'"
              style="
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
              "
            >
              全部
            </div>
            <div
              :class="{ nav_con1: status == 'no' }"
              class="nav_con"
              @click="status = 'no'"
            >
              未完成
            </div>
            <div
              class="nav_con"
              @click="status = 'yes'"
              :class="{ nav_con1: status == 'yes' }"
              style="
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
              "
            >
              完成
            </div>
          </div>
        </div>
        <div class="con_con">
          <ul class="list">
            <li
              class="list-group-item"
              v-for="(item, index) in showList"
              :key="item.id"
            >
              <span :class="{ del: item.finished }" @click="change(item.id)">{{
                item.title
              }}</span>
              <button @click="deletes(index)">删除</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [],
      list1: "",
      status: "all",
    };
  },
  computed: {
    showList() {
      switch (this.status) {
        case "all":
          return this.list;
        case "yes":
          return this.list.filter((item) => item.finished);
        default:
          return this.list.filter((item) => !item.finished);
      }
    },
  },
  methods: {
    add() {
      if (this.list1 != "" && this.list1.trim() != "") {
        this.list.push({
          id: new Date().getTime(),
          title: this.list1,
          finished: false,
        });
      }
      this.list1 = "";
      console.log(this.list);
    },
    deletes(index) {
      console.log(this.list);
      this.list.splice(index, 1);
    },
    change(id) {
      this.list.map((item) => {
        if (item.id == id) {
          item.finished = !item.finished;
        }
      });
    },
  },
  watch: {
    list: {
      handler(value) {
        localStorage.setItem("list", JSON.stringify(value));
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" >
.nav_con1 {
  background: blue;
}
.todo_box {
  width: 999px;
  height: 549px;
  background: rgb(20, 20, 20);
  border-left: 1px solid grey;
  p {
    font-size: 40px;
    font-weight: 700;
    color: white;
  }
  .todo {
    width: 500px;
    height: 400px;
    background: white;
    margin: 0 auto;
    border-radius: 25px;

    .kuang {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #ccc;
      //   background: red;
      display: flex;
      align-items: center;
      input {
        width: 300px;
        height: 40px;
        outline: none;
        margin-left: 80px;
        border: 1px solid #ccc;
        padding-left: 10px;
        border-radius: 10px;
      }
      button {
        width: 50px;
        height: 42px;
        background: white;
        // margin-left: 20px;
        border: none;
        background-color: transparent;
        outline: none;
      }
    }
    .nav {
      width: 100%;
      height: 70px;
      //   background: red;
      display: flex;
      align-items: center;
      .nav_box {
        width: 70%;
        height: 52px;
        margin: 0 auto;
        // background: blue;
        border-radius: 10px;
        display: flex;
        .nav_con {
          width: 115px;
          height: 50px;
          border: 1px solid #ccc;
          text-align: center;
          line-height: 50px;
          color: black;
        }
      }
    }

    .con_con {
      width: 100%;
      height: 269px;
      //   background: green;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      .list {
        width: 90%;
        height: 100%;
        // background: pink;
        margin: 0 auto;
        li {
          width: 100%;
          height: 40px;
          border-bottom: 1px solid #ccc;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .del {
            font-size: 14px;
            color: black;
            text-decoration: line-through;
          }
          button {
            width: 50px;
            height: 30px;
            background: blue;
            // margin-left: 20px;
            border: none;
            border-radius: 10px;
            outline: none;
            color: white;
          }
        }
      }
    }
  }
}
</style>