export const fruitMixin  = {
    data() {
        return {

            fruits : ['Apple' , 'Banana' , 'Mango' , 'Melon'] ,
            fruitSearch : ''
        }
    } ,
    
    computed: {
        filterFruits() {
            return this.fruits.filter( (ele) => {
                console.log(ele)
                return ele.match(this.fruitSearch);
            })
        }
    }
}