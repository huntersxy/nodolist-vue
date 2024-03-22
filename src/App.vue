<script setup>
import axios from 'axios'
import list from './list.vue'
import top from './top.vue'
import app from './main.vue'
import log from './login.vue'
import reg from './Register.vue'

import info from './info.vue'


/* import doing from './doing.vue'
import cre from './creat.vue' */


</script>



<script>
var token_data = localStorage.getItem('token');
export default {
    data(){
        return{
            token_data : '',
        }
    },
    methods: {

    }
}
</script>


<template>
      
    <top></top>
<!--     <div>
        <info></info>
        token:{{ token_data }}
    </div>
 -->
<!--     <div>
        登录：<log></log>
    </div>

    <div>
        注册：<reg></reg>
    </div> -->

    
        <list></list>
    


</template>

<style>
::marker{
    color:red;
    font-size: 0px;
}

</style>
