<template>

    <div class="card column">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="portfolio.photo" alt="Image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img :src="portfolio.photo" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ portfolio.name }}</p>
                    <p class="subtitle is-6">@Sippaprut</p>
                </div>
                
            </div>
            <div class="card-content">
                <a target="blank" :href="portfolio.url">{{ portfolio.url }}</a>
                
            </div>
            <footer class="card-footer">
                <router-link class="card-footer-item" 
                :to="link" >View More</router-link>
            </footer>
          
            
        </div>
    </div>


</template>

<script>
    export default {
        props: {
           portfolio : {
               type : Object 
           }
        }  ,
        data() {
            return {
                link : {
                    name : 'PortfolioDetail' ,
                    params : {
                        id : this.portfolio.id 
                    }
                }
            }
        }
    }
</script>