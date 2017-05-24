export default function (Vue) {
//bulding authentication packages
//the following is an object with four basic function

   //Method 1
    Vue.auth = {

        //set token
                                //key, value
        // localStorage.setItem('token', token)
        //setToken is our method
        setToken (token, expiration)  {
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
        },

        //get token, is the hardest one function to do
        //we want to store the token and the expiration in variable
        getToken () {
            var token = localStorage.getItem('token');
            var expiration = localStorage.getItem('expiration');

                    //if the token is not set or the expiration is not set than we want to return null
            if( ! token || ! expiration)
            return null;
            //if current date is grater than expiration date, we destroy the token with method destroyToken and we want to return null
            if (Date.now() > parseInt(expiration)) {
                this.destroyToken();
                return null;
             } else {
                 //otherwise we want to return the token
                 return token;
             }
               
                    
        },


        //destroyToken
        //this function will be use to logout from the application
        destroyToken () {
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },



        //isAuthenticated the easiest funtion to do an insied call the get token funciton taht 
        //will return the function

        isAuthenticated () {
            if(this.getToken())
                return true
            else 
                return false
            }
    }

    //to define $auth
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get () {
                return Vue.auth; //Method 1  returning the function of this method
            }
        }

    })
}