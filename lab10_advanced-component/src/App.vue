<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button class="btn btn-default" @click="dynamicComponent = 'app-quote'">Quote</button>
                <button class="btn btn-default" @click="dynamicComponent = 'app-news'">News</button>
                <button class="btn btn-default" @click="dynamicComponent = 'app-contact'">Contact</button>

                <hr>
                <p>Component is {{ dynamicComponent }}</p>
                <!-- Keep alive tag  คือ การไม่ทำลาย component ทิ้งเวลาเปลี่ยน component ตัวแปรยังคงอยู่ -->
                <keep-alive>
                    <component :is="dynamicComponent">
                        <p >This is Default Content</p>
                    </component>
                </keep-alive>
                

               <!--<app-quote>
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <p >
                        Can use this html with 'slot tag'
                        <br/>
                        ถ้าไม่กำหนด name ให้ slot ในหน้า child จะ tag นั้นเป็นdefault
                   </p>
               </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import News from './components/News.vue';
    import Contact from './components/Contact.vue';

    export default {
        data()  {
            return {
                quoteTitle : "Parse Html to Child with Slot of Vue Components!" ,
                dynamicComponent : "app-quote"
            }
        } ,
        components : {
            appQuote : Quote ,
            appNews : News ,
            appContact : Contact 
        }
    }
</script>

<style>
</style>
