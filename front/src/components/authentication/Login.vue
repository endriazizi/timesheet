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

                //our view resource
                this.$http.post("http://127.0.0.1:8000/oauth/token", data)
                    .then(response=>{
                        //console.log(response)
                        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
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