<template>
    <div>
        <div id="on"
            @click="switched(true)"
            :class="{ active : value }"
            
        >On</div>

        <div id="off"
         @click="switched(false)"
            :class="{active  : !value }">Off</div>
    </div>
</template>

<script>
    export default {
        props : ['value'] ,
        methods : {
            switched( isOn ) {
                //จะต้องกลับไป input event เพราะ เป็น default vue ในกรณีที่ใช้กับสร้าง components ใหม่แทน v-model
                this.$emit("input" , isOn);
            }
        }
        /*
        data() {
            return {
                isOn : true
            }
        }*/
    }
</script>

<style >
#on , #off {
    width : 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
}
#on.active , 
#off.active ,
#on:hover ,
#off:hover  {
    background-color: lightcoral !important;
}

</style>