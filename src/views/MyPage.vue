<template>
    <div>
        <h1>This is MyPage.</h1>
        はじめまして。私の名前は、yoitsu1838です。
        <profile msg="大学生です。"></profile>
        <my-button></my-button>
    </div>
</template>

<script>
import Profile from "@/components/Profile.vue"
import MyButton from "@/components/MyButton.vue"

export default {
    name:'MyPage',
    components:{
        Profile,
        MyButton
    }
}

</script>

<style scoped>

</style>