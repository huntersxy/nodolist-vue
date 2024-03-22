<script setup>
import axios from 'axios'
</script>

<script>
export default {
    mounted() {
        this.info(); // 初始获取数据
        //this.intervalId = setInterval(this.doing_info); // 每5秒轮询一次
    },
    data(){
        return {
            user: 'username',
        };
    },
    methods: {
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
<!-- <button @click="info">info</button> -->
用户名:{{ user }}
</template>