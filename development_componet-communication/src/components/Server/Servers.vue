<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <appServer 
                v-for="server in serverList"
                :server="server"
                :selectFN="selectServer"
                :serverActive="serverActive"
            >
            </appServer>
        </ul>
    </div>
</template>

<script>
    import Server from "./Server.vue";
    import { ServerBus } from '../../main.js';

    export default {
        data() {
            return {
                serverList: [
                    {
                        id: 1,
                        status: "Error Citcal"
                    },
                    {
                        id: 2,
                        status: "Working fine"
                    },
                    {
                        id: 3,
                        status: "Hank Error"
                    },
                    {
                        id: 4,
                        status: "Normal"
                    }
                ] ,
                serverActive : 0
            }
        },

        methods : {
           selectServer( server )
           {
              if ( this.serverActive == server.id )
              {
                    this.serverActive = 0;
                    ServerBus.clearServer();
              }
              else
              {
                    this.serverActive = server.id;
                    ServerBus.selectServer( server );
              }
           } 
        } ,
        

        components: {
            appServer: Server
        }
    }

</script>

<style scoped>
    .list-group-item {
        cursor: pointer;
    }
</style>