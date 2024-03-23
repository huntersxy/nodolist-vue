<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
</script>

<script>

export default {
    mounted() {
        this.get_doing(); // 初始获取数据
        //this.intervalId = setInterval(this.doing_info); // 每5秒轮询一次
    },
    watch: {
        // whenever question changes, this function will run
        question(newQuestion, oldQuestion) {
            if (true) {
                console.log('111')
                this.get_doing()
            }
        },
        num(newNum, oldNum) {
            if (true) {
                console.log('111')
                this.change_status()
                setTimeout(this.numadd, 500);
                
            }
        }
    },
    data() {
        return {
            // 定义username属性
            title: '',
            content: '',
            question: '1',
            tasks: [],
            jsonStr: '',
            num: '',
        };
    },
    methods: {
        post_list() {
            this.post()
            setTimeout(this.numadd, 500);
        },
        numadd() {

            this.question++;
        },
        get_doing() {
            axios.get('/nodolist//tasks/doing', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(res => {
                    this.tasks = JSON.stringify(res.data.tasks)||'[]'

                    this.jsonStr = JSON.parse(this.tasks)

                    console.log(res.data)
                })
                .catch(err => {
                    console.error(err);
                    console.log("error")
                    
                })
        },
        post() {
            var reg_post = {
                method: 'post',
                url: '/nodolist/task/create/?title=' + this.title + '&content=' + this.content,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            };

            axios(reg_post)
                .then(function (response) {
                    console.log(response.data);

                })
                .catch(function (error) {
                    console.log(error);
                    alert("请先登录")
                });

        },
        change_status() {
            axios.get('nodolist/task/status?id='+this.num+'&status=1', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.error(err);
                })
        }

    },

}

</script>

<template>
    <mdui-top-app-bar style="position: relative" >

        <mdui-button-icon href="/login" icon="menu"></mdui-button-icon>
        <mdui-top-app-bar-title>Nodolist</mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>
        
        <mdui-navigation-drawer close-on-overlay-click class="example-drawer">


            
            <!--  {{ title }} -->
            <div>
                <div class="null">
                    <p>null</p>
                </div>
                <mdui-text-field label="标题" :value="title" @input="title = $event.target.value"></mdui-text-field>
            </div>
            <div>

                <mdui-text-field rows="15" label="内容" :value="content"
                    @input="content = $event.target.value"></mdui-text-field>



            </div>

            <div class="null">
                <p>null</p>
            </div>
            <div class="post_button">
                <mdui-button full-width>关闭</mdui-button></div><div class="null">
                    <p>null</p>
                </div>
                <mdui-button full-width class="example-button" @click="post_list">创建</mdui-button>
                
            


            <!--  <button >创建</button> -->
            

        </mdui-navigation-drawer>
        <mdui-button icon="edit">新建</mdui-button>
        <!-- <button @click="change_status">改变状态</button> -->
    </mdui-top-app-bar>


    <!--     <div>
        {{ jsonStr }}
    </div> -->

    <div class="container">
        <mdui-list>
            {{ num }}
            <mdui-list-subheader>未完成
            </mdui-list-subheader>
            <li v-for="(json,index) in jsonStr">
                <mdui-list-item> {{ index }} - {{ json.title }} - {{ json.content }}
                    <div class="right"><mdui-button-icon icon="check" @click="this.num=json.id;"></mdui-button-icon>{{ json.id }}</div>
                
                </mdui-list-item>
            
            
            
            </li>
        </mdui-list>
    </div>



</template>

<style>
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.mdui-bottom-app-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
}



.null {
    opacity: 0;
    height: 0;
}
.right {
    float: right;
}
</style>