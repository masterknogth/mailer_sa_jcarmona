<template>
    <div class="container" style="margin-top:150px">
        <b-table responsive striped hover small :items="users" :fields="columnas" :tbody-tr-class="unClass">
            <template v-slot:cell(remi)="data">
                <div>
                    {{ data.item.city.name}}
                </div>
            </template>
        </b-table>
   
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";

    
        export default {
        name: "users",
        

        data() {
            return {
                columnas: [{
                    key: "id",
                    label: "#",
                    sortable: true,
                    thStyle: { "min-width": "100px !important" }
                },
                {
                    key: "nombre",
                    label: "Nombre",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                {
                    key: "telefono",
                    label: "Telefono",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                {
                    key: "cedula",
                    label: "Cedula",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                {
                    key: "email",
                    label: "Email",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                {
                    key: "remi",
                    label: "Ciudad",
                    thStyle: { "min-width": "150px !important", width: "80px !important" }
                }
            ],
            
            }
        },

        async created() {
            // No se puede entrar a esta interfaz si no se esta logeado
            if(!this.selectedAuth.loged){
                return this.$router.replace('/');    
            }
            await this.getUsers()
        },

        computed: {
            ...mapState("auth", [
            "selectedAuth"
            ]),
            ...mapState("users", [
            "users",
            ])
        },

        methods: {
            ...mapActions("auth", ["login"]),

            ...mapActions("users", ["getUsers"]),
           
         
        },
    };
</script>