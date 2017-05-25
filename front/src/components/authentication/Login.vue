<template>

    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-dfault">
                <div class="panel-body">
                    <div class="form-group">
                        <input 
                        v-model="email" 
                        class="form-control" 
                        type="email" 
                        placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input 
                        v-model="password" 
                        class="form-control" 
                        type="password" 
                        placeholder="Password">
                    </div>
                    <button @click="login"
                    class="btn btn-success pull-right">
                    Login</button>
                </div>
            </div>
        </div>
        <!-- to preoutput data using v-model up here 
        <pre>
        {{$data}}
        </pre> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //two way bingin data, email and password
                email: '',
                password: ''
            }
        },
        methods:{
            login () {
                var data = {
                    client_id: 2,
                    client_secret: '6odT0PRd7RLkR9WZpJ1aNZemwsvTZtMv3qDNNwn7',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password,

                }

 //use HTTP option insted calling localhost each time
                //take a look insede main js before navigation guard
                //into main.js i put: Vue.http.options.root = 'http://127.0.0.1:8000'

                //our view resource
                //insted use this URIform beacuse we setted into main.js Vue.http.options.root = 'http://127.0.0.1:8000'
                //this.$http.post("oauth/token", data)
                //this.$http.post("http://127.0.0.1:8000/oauth/token", data)
                this.$http.post("oauth/token", data)
                    .then(response=>{
                        //console.log(response)
                        //we set the token
                        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                        //we redirect automaticallyuser to feed page
                        this.$router.push("/feed")
                    })
                   /* 
                   the same uphere the following is the old way
                   .then(function (response){
                        console.log(response)
                    })
                    */
            }
        }
    }
</script>

<style>
    
</style>