<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="! serverSelected">Please Select a server</p>
        <p v-else>
            Server Details is {{ serverSelected.id }} Server Status is {{ serverSelected.status }}
            <button @click="fixServer">Fix Issue</button>
        </p>
    </div>

</template>

<script>
    import { ServerBus } from "../../main.js"

    export default {

        data() {
            return {
                serverSelected: false
            }
        },

        methods: {
            fixServer() {
                this.serverSelected.status = 'Normal'
            }
        },

        created() {

            ServerBus.$on('viewServerDetail', (server) => {
                this.serverSelected = server;
            })

            ServerBus.$on('clearServer', () => {
                this.serverSelected = false;
            })

        }


    }

</script>

<style>

</style>