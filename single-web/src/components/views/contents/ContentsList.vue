<template>
    <div class="clearfix">
        <article class="media">
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>
                            <router-link :to="link">{{ content.title }}</router-link>
                        </strong>
                    </p>
                </div>
            </div>
        </article>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    export default{
       props : ['content'] ,
       data() {
           return {
               link : {
                   name : 'contentDetail' ,
                   params : {
                       id : this.content['.key']
                   }
               }
           }
       }
    }
</script>

