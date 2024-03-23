<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
//import Utils from './util.js';  
import { ref } from 'vue'
</script>

<script>

export default {
  
  watch: {
    // whenever question changes, this function will run
    userid(newUserid, oldUserid) {
      if (true) {
        console.log('111')
      }
    }
  },
  mounted() {
    this.info(); // 初始获取数据
    //this.intervalId = setInterval(this.doing_info); // 每5秒轮询一次

    
  },
  data() {
    return {
      user: 'username',
      userid: localStorage.getItem('userid'),
    };
  },
  components: {

  },
  methods: {
    navigateToRes() {
      this.$router.push('/res');
    },
    navigateTolog() {
      this.$router.push('/log');
    },
    info() {
      axios.get('/nodolist/user/', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log(res.data)

          this.user = res.data.user.name; // 更新user变量

        })
        .catch(err => {
          console.error(err);
        })
    }
  },

}
</script>
<template>



  <mdui-top-app-bar style="position: relative;">
    <mdui-button-icon href="/" icon="menu"></mdui-button-icon>

    <mdui-top-app-bar-title>用户中心</mdui-top-app-bar-title>

    <div style="flex-grow: 1"></div>
    <mdui-segmented-button-group>
      <mdui-segmented-button @click="navigateToRes">注册</mdui-segmented-button>
      <mdui-segmented-button @click="navigateTolog">登录</mdui-segmented-button>
    </mdui-segmented-button-group>
  </mdui-top-app-bar>

  用户名:{{ user }}
  id:{{ userid }}

  <div class="ddd">
    <RouterView />
  </div>

</template>
