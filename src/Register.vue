<script setup>
import axios from 'axios'
</script>

<script>
export default {
    name: '注册',
    data() {
        return {
            // 定义username属性
            username_reg: '',
            password_reg: '',
        };
    },
    methods: {
        reg() {
            var reg_post = {
                method: 'post',
                url: '/nodolist/user/register/?username='+this.username_reg+'&password='+this.password_reg,
                headers: {
                    
                }
            };

            axios(reg_post)
                .then(function (response) {
                    console.log(response.data.base);
                    if (response.data.base.msg == 'Success') {
                        console.log('注册成功'+response.data.base.msg)
                        
                    }
                    if (response.data.base.msg == 'Wrong Parameter has been given') {
                        console.log('名字太短'+response.data.base.msg)
                    }
                    if (response.data.base.msg == 'User existed') {
                        console.log('名字已存在'+response.data.base.msg)
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

    账号：<input v-model="username_reg">
    密码：<input v-model="password_reg">
    <button @click="reg">注册</button>
</template>