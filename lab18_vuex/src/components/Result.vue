<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed : {
            counter() {
                return this.$store.getters.stringCounter2;
            }
        }
    }
</script>