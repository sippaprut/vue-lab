<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="save">Submit</button>
                <hr>

                <input type="text" class="form-control" @blur="fetchData" v-model.lazy="node"><br/>
      
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} {{ u.email}}</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user : {
                    username : '' ,
                    email : ''
                } ,
                users : [] ,
                resource : {} ,
                node : 'data'
            }
        } ,
        methods : {
            save() {

                this.resource.saveAlt( { node : this.node } , this.user)

                //this.resource.save({} , this.user );

                // this.$http.post('data.json' , this.user )
                //     .then( response => {
                //         console.log(response);
                //     } , error => {
                //         console.log(error)
                //     })
                //     .then( () => {
                //         this.fetchData();
                //     });
            } ,

            fetchData() {
                this.resource.getData( { node : this.node }  )
                    .then( response => {
                        return response.json();
                    } )
                    .then( data => {
                        this.users = data;
                    });
                // this.$http.get('data.json')
                //     .then( response => {
                //         return response.json()
                //     } , error => {
                //         console.log(error);
                //     })
                //     .then( data => {
                //         this.users = data;
                //         console.log(data);
                //     } )
            }
        } ,
        created() {
            const customActions = {
                saveAlt : { method : 'POST' , url : 'alternative.json' } ,
                getData : { method : 'GET' }
            }

            this.resource = this.$resource('{node}.json' , {} , customActions );
            this.fetchData();
        }
    }
</script>

<style>
</style>
