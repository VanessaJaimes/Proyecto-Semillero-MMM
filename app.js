const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Formulario con Vue',
        usuarios:[],
        nuevoUsuario:''
    },
    methods:{
        agregarUsuario: function(){
           // console.log('diste click', this.nuevoUsuario);
           this.usuarios.push({
            nombre: this.nuevoUsuario
           });
           console.log(this.usuarios);
            this.nuevoUsuario ='';
            localStorage.setItem('form-vue', JSON.stringify(this.usuarios));
    
        }
    }
    });