<template>
    <div>
        <div class="form-group">
            <label for="">First Name</label>
            <input type="text" 
  
            class="form-control"  ref="firstname" :value="firstname" @input="changeFullName()" placeholder="Input field">
        </div>

        <div class="form-group">
            <label for="">Last Name</label>
            <input type="text" 

            class="form-control" ref="lastname" :value="lastname" @input="changeFullName()" placeholder="Input field">
        </div>

    </div>
    

</template>

<script>
    export default {
        props : [ 'value' ] ,
        methods : {
            changeFullName() {
                let name = this.$refs.firstname.value + " " + this.$refs.lastname.value;
               
                this.$emit("input" , name);
            }
        } ,
        computed :{
            firstname(){
                return this.value.split(" ")[0];
            } ,
            lastname() {
                return this.value.split(" ")[1];
            }
        }
    }
</script>