<template>
    <div class="container">
        <h3>Some User Details</h3>
        User ID : {{ $route.params.id }}
        <br/>
        <router-link 
        :to="link" 
        class="btn btn-primary">Edit</router-link>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                link : 
                { 
                    name : 'userEdit' , 
                    params : { id : this.$route.params.id } , 
                    query : { langue : 'th' , ass: 10 } ,
                    hash : '#hashData'
                }
            }
        }
    }
</script>