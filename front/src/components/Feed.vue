<template>
<h1>feed</h1>

</template>
<script>
    export default {
        data () {
            return {
                products: []
            }
        },

            created () {
                this.$http.get('api/products')
            }
    }

//     {
//   // GET /someUrl
//   this.$http.get('/someUrl').then(response => {

//     // get body data
//     this.someData = response.body;

//   }, response => {
//     // error callback
//   });
// }
</script>
