<template>

    <div>
        <div @click="switchChange('Yes')"
        class="radio-button btn" 
        :class="{ 'btn-primary' : value == 'Yes' , 'btn-default' : value == 'No' }" >
            Yes
        </div>
        <div @click="switchChange('No')"
        class="radio-button btn" 
        :class="{ 'btn-primary' : value == 'No' , 'btn-default' : value == 'Yes' }" >
            No
        </div>

    </div>
    
</template>

<script>
    export default {
        props : [ 'value' ] ,
        methods  : {
            switchChange(v){
                this.$emit('input' , v);
            }
        }
    }
</script>

