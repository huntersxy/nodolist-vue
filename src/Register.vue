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
                url: '/nodolist/user/register/?username=' + this.username_reg + '&password=' + this.password_reg,
                headers: {

                }
            };

            axios(reg_post)
                .then(function (response) {
                    console.log(response.data.base);
                    if (response.data.base.msg == 'Success') {
                        console.log('注册成功' + response.data.base.msg)

                    }
                    if (response.data.base.msg == 'Wrong Parameter has been given') {
                        console.log('名字太短' + response.data.base.msg)
                    }
                    if (response.data.base.msg == 'User existed') {
                        console.log('名字已存在' + response.data.base.msg)
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
    <div class="div1">
    <div>
        <mdui-text-field label="账号" :value="username_reg" @input="username_reg = $event.target.value"></mdui-text-field>
    </div>
    <div>
        <mdui-text-field rows="" label="密码" :value="password_reg" @input="password_reg = $event.target.value"></mdui-text-field>
    </div>
    <div class="null"><p></p></div>
    <div class="div2">
        <mdui-button @click="reg" full-width>注册</mdui-button>
    </div>
</div>

</template>
<style>
.div1 {
  width: 50%; /* 或者你需要的宽度 */
  margin-left: auto;
  margin-right: auto;
  
}

.div2 {
  width: 50%; /* 或者你需要的宽度 */
  margin-left: 25%;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.null{
    opacity:0;
}
</style>