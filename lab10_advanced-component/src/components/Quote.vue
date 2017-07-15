<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <slot name="subtitle"><span>This is default Slot if we don't set from parent</span></slot>
        </div>
            <hr>
        <div>
            <slot ></slot>
        </div>
    </div>
    
</template>

<script>
    export default {
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black ;
        padding: 30px;
        margin: auto;
        text-align: center;
    }
    h2 {
        color : red;
    }
    .title {
        font-style: italic;
    }
    .subtitle {
        color : #F2F2F2;
        font-size: 8px;
        font-style: italic;
    }
</style>