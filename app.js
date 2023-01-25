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
            //console.log(this.usuarios.filter(user =>user.usuario == this.nuevoUsuario));
            const passnum = Math.floor(Math.random() * ((9999 - 1000) + 1000));
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let result1 = '';
            const charactersLength = characters.length;
            for (let i = 0; i < 4; i++) {
                result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            const password = passnum + result1;
            //console.log(result1);
            //console.log(passnum);
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = "0" + dd;
            if (mm < 10) mm = "0" + mm;

            const formattedToday = yyyy + "-" + mm + "-" + dd;
            let y = new Date(this.fecha_nac);
            let x = new Date(formattedToday);
            const diffInDays = Math.floor((x - y) / (1000 * 60 * 60 * 24));
            const years = diffInDays / 365;
            //console.log('diste click', this.nuevoUsuario);
            if (this.usuarios.filter(user => user.usuario == this.nuevoUsuario).length <= 0) {
                this.usuarios.push({
                    nombres: this.nombres,
                    apellidos: this.apellidos,
                    nombre_completo: this.nombres + " " + this.apellidos,
                    usuario: this.nuevoUsuario,
                    fecha_nac: this.fecha_nac,
                    edad: years.toFixed(1) + "años",
                    clave: password
                });
                console.log(this.usuarios);
                this.nombres = '';
                this.apellidos = '';
                this.nuevoUsuario = '';
                this.fecha_nac = '';
            } else {
                alert("El usuario ya existe");
            }
        }
    }

});
