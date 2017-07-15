<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID : {{ id }}</p>
        <button @click="navigationToHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
    

</template>

<script>
    export default {
       // props : ['id'] ,
        // data(){
        //     return {
        //         id : this.$route.params.id
        //     }
        // } ,
        methods : {
            navigationToHome() {
                this.$router.push('/');
            }
        } ,
        // created() {
        //     console.log(this.$route);
        // } ,
        // watch: {
        //     //vue จะไม่อัพเดท component ใหม่ ทำให้ route ไม่อัพเดท จึงต้อง watch ที่ route
        //     '$route'(to , from) {
        //         this.id = to.params.id;
        //     }
        // }
    }
</script>