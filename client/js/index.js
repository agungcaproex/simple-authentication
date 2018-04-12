var app = new Vue({
    el: '#app',
    data: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        token: ''
    },
    methods: {
        loginUser: function(){
            axios.post('http://localhost:3000/login', {
                email: this.email,
                password: this.password
            })
            .then((response) => {
                if(response.status == 200){
                    localStorage.setItem('token', response.data.data.token)
                    localStorage.setItem('userId', response.data.data.id)
                    localStorage.setItem('email', response.data.data.email)
                    localStorage.setItem('name', response.data.data.name)
                    location.reload()
                } else {
                    alert('Your Email or Password is Wrong')
                }
            })
            .catch(err => {
                console.log(err)
            })
        },

        register: function(){
            axios.post('http://localhost:3000/register', {
                email: this.email,
                password: this.password,
                first_name: this.first_name,
                last_name: this.last_name
            })
            .then((response) => {
                if(response == 200){
                    
                }
            })
        }
    }
})