<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name</button>
        <p>Name is {{ fullname }} </p>
        <p>Age is {{ age }} </p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :myName="fullname" 
                    :resetFN="resetData"
                    @nameWasReset="fullname = $event"
                    :myAge="age"
                    ></app-user-detail>
                <!-- :fullname include that varible to child -->
                <!-- @nameWasReset="fullname = $event" change value from child to pararent , $event is a parameter -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :myAge="age"
                    @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data : function() {
            return {
                fullname : "John Doe" ,
                age : 29
            }
        } ,

        methods : {
            changeName() {
                this.fullname = "Jane Doe"
            } ,
            resetData () {
                this.fullname = "John Doe!";
            }

        } ,

        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
