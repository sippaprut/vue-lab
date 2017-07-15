<template>
    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" 
        aria-valuemax="100" 
        :style="{ width : getPercent() + '%'}"
        >
            {{ count }}/{{ limit }}
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            limit : {
                type : Number 
            } ,
            count : {
                type : Number 
            }
        } ,
        methods : {
            getPercent()
            {
                return (this.count / this.limit ) * 100;
            }
        }
        
    }
</script>