<script setup>
import axios from 'axios'
</script>

<script>

export default {
    name: '登录',
    data() {
        return {
            // 定义username属性
            username: '',
            password: '',
            receivedData: ''
        };
    },
    methods: {
        postData() {
            // 配置请求

           // var axios = require('axios');

            var config = {
                method: 'post',
                url: '/nodolist/user/login/?username='+this.username+'&password='+this.password,
                headers: {
                    
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(response);
                    var login_data = response.data
                    
                    if (response.data.msg != 'User is not exist') {
                    console.log('登录成功'+response.data.base.msg);

                    localStorage.setItem('token', login_data['token']);
                    console.log(localStorage.getItem('token'));

                    }
                    
                    if (response.data.msg == 'User is not exist' ) {
                        console.log('账号不存在'+response.data.msg);
                        //alert('账号不存在')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
};

</script>

<template>
    账号：<input v-model="username">
    密码：<input v-model="password">
    <button @click="postData">登录</button>
</template>
