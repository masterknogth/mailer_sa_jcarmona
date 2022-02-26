<template >
    
    <div class="container" style="margin-top:150px">
        <Loader v-if="loader"/>
        <b-table responsive striped hover small :items="emails" :fields="columnas" :tbody-tr-class="unClass">
            <template v-slot:cell(remi)="data">
                <div>
                    {{ data.item.user.nombre}}
                </div>
            </template>
        </b-table>
   
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    import Loader from "../Loader.vue";
    
        export default {
        name: "List-email",
        components: {
           Loader
        },

        data() {
            return {
                columnas: [{
                    key: "id",
                    label: "#",
                    sortable: true,
                    thStyle: { "min-width": "100px !important" }
                },
                {
                    key: "destino",
                    label: "Destinatario",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                {
                    key: "asunto",
                    label: "Asunto",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                {
                    key: "contenido",
                    label: "Contenido",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                {
                    key: "estado",
                    label: "Estado",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                {
                    key: "remi",
                    label: "Remintente",
                    thStyle: { "min-width": "150px !important", width: "80px !important" }
                }
            ],
            
            }
        },

        async created() {
            this.load(true)
            // No se puede entrar a esta interfaz si no se esta logeado
            if(!this.selectedAuth.loged){
            return this.$router.replace('/');    
            }
            await this.getEmails()
            this.load(false)
        },

        computed: {
            ...mapState("loader", [
                "loader"
            ]),
            ...mapState("auth", [
            "ingreso",
            "selectedAuth"
            ]),
            ...mapState("emails", [
            "selectedEmail",
            "emails"
            ])
        },

        methods: {
            ...mapMutations("loader", [
                "load"
            ]),
            ...mapActions("auth", ["login"]),

            ...mapActions("emails", ["getEmails"]),
                      
        },
    };
</script>