const Home = resolve => {
    require.ensure( ['./components/views/Home.vue'] , () => {
        resolve( require('./components/views/Home.vue') );
    }) //create a 'user' group file
}

const Portfolio = resolve => {
    require.ensure( ['./components/views/portfolio/Portfolio.vue'] , () => {
        resolve( require('./components/views/portfolio/Portfolio.vue') );
    } ) //create a 'user' group file
}

const PortfolioDetail = resolve => {
    require.ensure( ['./components/views/portfolio/PortfolioDetail.vue'] , () => {
        resolve( require('./components/views/portfolio/PortfolioDetail.vue') );
    } ) //create a 'user' group file
}

const Contents = resolve => {
    require.ensure(
        ['./components/views/contents/Contents.vue'] , () => {
        resolve( require('./components/views/contents/Contents.vue') );    
    } , 'contentGroup')
} 

const ContentAdd = resolve => {
    require.ensure(
        ['./components/views/contents/ContentAdd.vue'] , () => {
        resolve( require('./components/views/contents/ContentAdd.vue') );    
    } , 'contentGroup')
} 

const ContentDetail = resolve => {
    require.ensure(
        ['./components/views/contents/ContentDetail.vue'] , () => {
            resolve( require('./components/views/contents/ContentDetail.vue') ); 
        } , 'contentGroup'
    )
}

//import ContentsList from './components/views/contents/ContentsList.vue';

//import Home from './components/views/Home.vue'

export const routes = [
    { 
        path : '' , 
        name : 'Home' , 
        component :  Home 
    } ,
    { 
        path : '/portfolio' , 
        components : {
            default : Portfolio
        } ,
        // children : [
        //     { 
        //         path : ':id/detail' ,
        //         name : 'PortfolioDetail' ,
        //         component : PortfolioDetail ,
        //         props : true ,
        //         beforeEnter: (to, from, next) => {
        //             console.log("Hello Child")
        //             //alert("before Enter in Router");
        //             next();
        //         }
        //     }
        // ] ,
    } ,

    {
        path : '/portfolio/:id/detail' ,
        name : 'PortfolioDetail' ,
        component :  PortfolioDetail,
        props : true ,
        beforeEnter: (to, from, next) => {
            if ( _.isNumber(to.params.id) == false  )
            {
                next({ redirect :{ name : 'Home' } });
            }
            else 
            {
                next();
            }
        }
    } ,

    {
        path : '/contents/' ,
        name : 'contents' ,
        component : Contents 
    } ,

    {
        path : '/contents/add' ,
        component : ContentAdd ,
        name : 'contentAdd'
    } ,

    {
        path : '/contents/:id/detail' ,
        component : ContentDetail ,
        name : 'contentDetail' ,
        props : true ,
        beforeEnter: (to, from, next) => {
            if ( to.params.id == ''  )
            {
                next({ redirect :{ name : 'Home' } });
            }
            else 
            {
                next();
            }
        }
    } ,
   

    { path : '*' , redirect : { name : 'Home'} } // '*' ดักทุกหน้าที่ไม่มีให้ทำเงื่อนไขนี้
]

