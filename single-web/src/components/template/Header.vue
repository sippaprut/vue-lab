<template>

    <header>
        <nav class="nav has-shadow">
            <div class="container">
                <div class="nav-left">
                <a class="nav-item">
                    <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
                </a>
                <router-link class="nav-item is-tab is-hidden-mobile"  active-class="is-active" exact to="/">
                    Home 
                </router-link>

                <router-link class="nav-item is-tab is-hidden-mobile"  active-class="is-active"  to="/portfolio">
                    Portfolio 
                </router-link>

                <router-link class="nav-item is-tab is-hidden-mobile"  active-class="is-active"  
                to="/contents">
                    Contents 
                </router-link>


                <a class="nav-item is-tab is-hidden-mobile">Contact</a>
                </div>

                <span class="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

            </div>
        </nav>
    </header>


</template>





<script>
    export default {
    }
</script>