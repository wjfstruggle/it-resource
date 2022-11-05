<template>
    <div>
        <button class="aaa" @click="dianwo()">我是一个按钮{{aaa}}</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            aaa:'aaaaa'
        }
    },
    methods:{
        dianwo(){
            console.log('1111');
        }
    }
}
</script>

<style scoped>
    .aaa{
        background: red;
        cursor: pointer;
        border: 0;
        color: #fff;
    }
</style>