<template>
   
    <div class="container">
         <h3>Edit the User</h3>
         <p>QueryString : {{ $route.query.langue}}</p> 
         <p>Ass : {{ $route.query.ass}}</p> 
        <div class="">
            <label for="">User: </label>
            <input type="text" class="form-control" :value="id">
        </div>
        <button class="btn btn-primary" @click="leavePage = true">Confirm</button>
        <div style="height:1000px;">
        </div>
        <p id="hashData">Hello Hash</p>
    </div>

</template>

<script>
    export default {
        props : ['id'] ,
        data() {
            return {
                leavePage : false
            }
        } ,

        beforeRouteEnter(to, from, next) {
            //console.log(vm.id)
            next( (vm) => {
                if ( !isNaN(parseFloat(vm.id)) && isFinite(vm.id)) return true;
                console.log( "is not numberice " + vm.id );
                vm.leavePage = true;
                vm.$router.push('/');
            } );
        } ,

        beforeRouteLeave (to, from, next) {
            //has access to `this` component instance
            if ( this.leavePage ) {
                next();
            }
            else {
                if ( confirm('Are you want to leave this page') )
                {
                    next();
                }
                else 
                {
                    next(false);
                }
            }
        }
    }
</script>