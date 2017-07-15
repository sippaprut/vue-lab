<template>
    <div class="container">
        <form>
            <legend>Signup</legend>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    
                    <app-fullname  v-model="users.name"></app-fullname>
             
                  

                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" v-model.lazy="users.email" class="form-control" id="" placeholder="Input field">
                    </div>

                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" v-model.lazy="users.password" class="form-control" id="" placeholder="Input field">
                    </div>

                    <div class="form-group">
                        <app-switch v-model="users.store"></app-switch>
                    </div>
                
                    
                
                    <button @click.prevent="save" type="submit" class="btn btn-primary">Submit</button>
                 
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>

       <br/>

        <div class="row" v-if="saved">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ users.name }} </p>
                        <p>Mail: {{ users.email }} </p>
                        <p>Password: {{ users.password }}</p>
                        <p>Store in Database?: {{ users.store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import SwitchButton from './Switch.vue'
    import Fullname from './Fullname.vue'

    export default {
        components : {
            'app-switch' : SwitchButton ,
            'app-fullname' : Fullname
        } ,
        data(){
            return {
                saved : false ,
                users : {
                    name : 'John Doe' ,
         
                    email : '' ,
                    password : '' ,
                    store : 'Yes'
                }
            }
        } ,

        methods : {
            save() {
                this.saved = true;
            }
        }

    }

</script>

<style>
</style>
