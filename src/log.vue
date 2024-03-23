<script setup>
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'
//import Utils from './util.js';  
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>

export default {
    name: '登录',
    data() {
        return {
            // 定义username属性
            username: '',
            password: '',
        };
    },
    methods: {
        tst() {  
           console.log("1");
   }  ,
        postData() {

            var config = {
                method: 'post',
                url: '/nodolist/user/login/?username=' + this.username + '&password=' + this.password,
                headers: {

                }
            };

            axios(config)
                .then(function (response) {
                    console.log(response);
                    var login_data = response.data


                    
                    
                    try {
                        // 尝试执行的代码
                        if (response.data.token != '') {
                        console.log('登录成功' + response.data.base.msg);
                        console.log(response.data.user.id
)
                        localStorage.setItem('token', login_data['token']);
                        localStorage.setItem('userid', response.data.user['id']);
                        console.log(localStorage.getItem('token'));
                        

                    }
                    } catch (error) {
                        // 处理错误的代码
                        console.error("发生错误:", error);
                        // 在这里可以设置一个错误标志或者执行其他错误处理逻辑
                    } finally {
                        // 这段代码无论是否发生错误都会执行
                        if (response.data.msg == "Username or password not verified") {
                        alert('用户名或密码错误')
                    }

                        else if (response.data.msg == 'User is not exist') {
                        console.log('账号不存在' + response.data.msg);
                        alert('账号不存在')
                    }
                    }
                    // 继续执行其他代码
                    



                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
};

</script>




<template>




    <!--     账号：<input v-model="username">
    密码：<input v-model="password">
    <button @click="postData">登录</button>
  -->
    <div class="div1">
        <div>
            <mdui-text-field label="账号" :value="username" @input="username = $event.target.value"></mdui-text-field>
        </div>
        <div>
            <mdui-text-field rows="" label="密码" :value="password"
                @input="password = $event.target.value"></mdui-text-field>
        </div>
        <div class="null">
            <p></p>
        </div>
        <div class="div2">
            <mdui-button @click="postData" full-width>登录</mdui-button>
        </div>
    </div>

</template>
<style>
.div1 {
    width: 50%;
    /* 或者你需要的宽度 */
    margin-left: auto;
    margin-right: auto;

}

.div2 {
    width: 50%;
    /* 或者你需要的宽度 */
    margin-left: 25%;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.null {
    opacity: 0;
}
</style>
