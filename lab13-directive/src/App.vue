<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'green'">Color this</p>
                <p v-highlight>No value Color this</p>
                <hr>

                <p v-localhighlight>Local Directives No value</p>
                <p v-localhighlight:background.delayed="'red'">Local Directives have value</p>
                <p v-localhighlight:background.delayed.blink="{ mainColor : 'red' , blinkColor : 'yellow' , deleyed : 1000 }">
                    Local Directives Blink</p>

                <input type="text" v-numberic>

               <button class="btn btn-primary" v-live:click="clicked">Event Click</button>     
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives : {
            'localhighlight' : {
                bind (el , binding , vnode) {
                    let deley = 0;
                    //v-highlight:background.deleyed
                    if ( binding.modifiers['delayed'] )
                    {
                        deley = 3000;
                    }
                    if ( binding.modifiers['blink'] )
                    {
                        let mainColor = binding.value.mainColor;
                        let blinkColor = binding.value.blinkColor;
                        let currentColor = mainColor;
                        setInterval( () => {
                            if ( currentColor == blinkColor ? currentColor =  mainColor : currentColor = blinkColor )
                            el.style.backgroundColor = currentColor; 
                        } , binding.value.delayed )
                    }   
                    else
                    {
                        setTimeout( () => {
                            //v-highlight:background='value'
                            if ( binding.arg === 'background') {
                                el.style.backgroundColor = binding.value; 
                            } 
                            else  {
                                el.style.color = 'red';
                            }
                        }  , deley);
                    }

                    
                }
            } ,

            'live' : {
                bind : function( el , binding , vnode ) {
                    const events = binding.arg;
                    const fn = binding.value;

                    el.addEventListener( events , fn );

                }
            } ,
            'numberic' : {
                bind : function ( el , binding ) {
                    el.addEventListener( 'keypress' , (e) => {
                        console.log(e)
                        //if (String.fromCharCode(e.code).match(/[^0-9]/g)) return false;
                        // el.value = el.value.replace(/[^1-9\.]/g,'');
                        // console.log(el.value)
                        
                        let lastDigit = el.value.slice(-1);
                        console.log(lastDigit);
                        if (  Number(parseFloat(lastDigit)) != lastDigit )
                        {
                            el.value = el.value.replace( /\D/g , '' );
                        }
                        
                    })
                }
            }
        } ,

        methods : {
            clicked () {
                alert('was Click!!');
            }
        }
    }
</script>

<style>

</style>
