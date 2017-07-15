<template>
    <form action="">
        <div class="clearfix">
            <textarea class="form-control" v-model="message" rows="3"></textarea>
        </div>
        <div class="clearfix">
            <button type="button" 
            @click="addQuotes"
            class="btn btn-large btn-block btn-primary">Add Quote</button>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                message : ''
            }
        } , 
        props : {
            lists : {
                type : Array
            } ,
            limit : {
                type : Number
            }
        } ,
        methods : {
            addQuotes()
            {
                if ( this.message == "" )
                {
                    alert("Please fill the message!");
                    return false
                }


                if ( this.lists.length >= this.limit )
                {
                    alert("You can post message more than " + this.limit + " messages" );
                    return false;
                }
                this.$emit('newMessage' , this.message );
                //this.lists.unshift( this.message );
                this.message = "";
                
            }
        }
    }
</script>