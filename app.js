const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Formulario con Vue',
        usuarios: [],
        nombres: '',
        apellidos: '',
        nuevoUsuario: '',
        fecha_nac: '',
        edad: ''
    },
    methods: {
        agregarUsuario: function () {
            //console.log('diste click', this.nuevoUsuario);
            this.usuarios.push({
                nombres: this.nombres,
                apellidos: this.apellidos,
                usuario: this.nuevoUsuario,
                fecha_nac: this.fecha_nac,
                edad: this.fecha_nac,
                clave: this.clave
            });
            console.log(this.usuarios);
            this.nombres='';
            this.apellidos='';
            this.nuevoUsuario = '';
            this.fecha_nac='';

        }
    }
});