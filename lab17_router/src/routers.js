// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import UserDetail from './components/user/UserDetail.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'

//Make lazy load component in webpack because we don't want load some component everytime
//It is load when we use that component.
const User = resolve => {
    require.ensure( ['./components/user/User.vue'] , () => {
        resolve( require('./components/user/User.vue') );
    } , 'user') //create a 'user' group file
}

const UserStart = resolve => {
    require.ensure( ['./components/user/UserStart.vue'] , () => {
        resolve( require('./components/user/UserStart.vue') );
    } , 'user')
}

const UserEdit = resolve => {
    require.ensure( ['./components/user/UserEdit.vue'] , () => {
        resolve( require('./components/user/UserEdit.vue') );
    } , 'user' )
}

const UserDetail = resolve => {
    require.ensure( ['./components/user/UserDetail.vue'] , () => {
        resolve( require('./components/user/UserDetail.vue') );
    } , 'user')
}



// function routeProps(route)
// {
//     return {
//         id : route.params.id
//     }
// }

export const routes = [
    { path : '' , name : 'home' ,  components : {
        default : Home ,
        'header-top' : Header
    }  } ,
    //example.com/user
    //{ path : '/user/:id' , component : User , props : true } // Pass route.params to props
    //{ path : '/user/:id' , component : User , props : routeProps } // custom logic for mapping between route and props
    { path : '/user/' , 
    components : {
        default : User ,
        'header-bottom' : Header
    } , 
        children :[
            { path : '' , component : UserStart } ,
            { path : ':id/edit' , component : UserEdit , name : 'userEdit' , props : true } ,
            { path : ':id/detail' , component : UserDetail , beforeEnter: (to, from, next) => {
                console.log("before Enter in Router");
                next();
            } }
        ]
    } , // No props, no nothing

    //auto redirect
    { path : '/redirect-page' , redirect : { name : 'home' }} ,
    { path : '*' , redirect : {name : 'home'} } // '*' ดักทุกหน้าที่ไม่มีให้ทำเงื่อนไขนี้

]