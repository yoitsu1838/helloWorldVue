<template>
    <div>
        {{ num }}
        <button @click="OnClick()">test</button>
    </div>
</template>

<script>
export default {
    name:"MyButton",
    data:function() {
        return{
            num:0,
        }
    },
    methods: {
        OnClick() {
            this.num = this.num +1
            console.log(this.num)
        }
    }

}
</script>