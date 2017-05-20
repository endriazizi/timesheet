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
                    <button 
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
                email: '',
                password: ''
            }
        }
    }
</script>

<style>
    
</style>