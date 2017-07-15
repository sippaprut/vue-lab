<template>
    <li
        class="list-group-item"
        :class="{ active : serverActive == server.id }"
        @click="selectFN(server)"
        >
         Server #{{ server.id }}
    </li>
</template>

<script>
    export default {

        props : [ 
            'server' ,
            'selectFN' ,
            'serverActive'
        ] 
        
    }
</script>



