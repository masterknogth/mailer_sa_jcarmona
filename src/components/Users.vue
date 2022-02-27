<template>
    <div class="container" style="margin-top:150px">
        <Loader v-if="loader"/>
        <b-row class="my-1">
            <b-col sm="3">
                <b-form-input  size="sm" v-model="filtro.text" placeholder="Buscar"></b-form-input>
            </b-col>
            <b-col sm="1">
                <!--<b-button variant="primary" size="sm" @click="buscar()">Buscar</b-button>-->
                <div class="btn-group" role="group" aria-label="Basic example">
                    <b-button  variant="primary" size="sm" @click="buscar()">Buscar</b-button>
                    <b-button  size="sm" @click="limpiar()">Limpiar</b-button>
                </div>
            </b-col>
        </b-row>  
        <br/>
        <b-collapse visible>
            <b-table id="my-table"  responsive striped hover small :items="users.data" :fields="columnas" :tbody-tr-class="unClass">
                <template v-slot:cell(remi)="data">
                    <div>
                        {{ data.item.city.name}}
                    </div>           
                </template>
                <template v-slot:cell(edit)="data">
                
                    <button v-b-modal.modal-1 class="bt btn-success btn-sm btn-block" @click="verDatos(data.item)">
                        Editar                                               
                    </button>    
                                            
                </template>
                <template v-slot:cell(delete)="data">
                
                    <button class="bt btn-danger btn-sm btn-block" v-b-modal.modal-2 @click="getEliminar(data.item)">                            
                        Eliminar                         
                    </button>                                 
                </template>
            </b-table>
            <br/>
            <b-pagination
                aria-controls="my-table"              
                v-model="filtro.page"
                :total-rows="users.total"
                :per-page="filtro.perPage"
                @click.native ="setPagePagination(filtro.page)"
            >
           
            </b-pagination>
        </b-collapse>
      
       

       
        <b-modal id="modal-1" title="Editar usuario" hide-footer>
            <b-container>
                <Form @submit="enviar" >
                    <b-row style="color: black">
                        <b-form-group label="Nombre:">
                            <Field
                                v-model="selectedUser.nombre"
                                rules="required"
                                class="form-control form-control-md"
                                name="nombre"
                            />
                            <ErrorMessage name="nombre" class="text-danger"/>
                        </b-form-group>   
                        
                    </b-row>
                    <b-row style="color: black">
                        <b-form-group label="Telefono:">
                            <b-form-input
                                    v-model="selectedUser.telefono"
                                    type="text"
                                    
                            >
                            </b-form-input>
                            
                        </b-form-group>   
                    </b-row>
                    <b-row style="color: black">
                        <b-form-group>
                            <label>Fecha de nacimiento </label>
                            <Field 
                                name="fecha"
                                v-model="selectedUser.fecha_nacimiento"
                                rules="required"
                                class="form-control form-control-md"
                                type="date"
                                max="2004-01-01" />
                            <ErrorMessage name="fecha" class="text-danger"/> 
                        </b-form-group>
                       
                    </b-row>
                    <b-row style="color: black">
                        <b-form-group label="Codigo ciudad:">
                            <Field
                                    v-model="selectedUser.codigo_ciudad"
                                    type="number"
                                    name="codigo"
                                    rules="required"
                                    class="form-control form-control-md"
                            />                 
                            <ErrorMessage name="codigo" class="text-danger"/> 
                        </b-form-group>   
                    </b-row>
                    <b-row style="color: black">
                        <b-form-group label="Pais:">
                        <Field name="pais"  v-model="selectedIds.country_id"  @input="getCountryId(selectedIds.country_id)"  as="select" class="form-control form-control-md" >
                                <option :value="null" disabled>-- Por favor Selecciona un opcion --</option>
                                <option v-for="country in countries" :key="country.id" :value="country.id">
                                {{ country.name }}
                                </option>
                            </Field>
                        </b-form-group>   
                    </b-row>
                    <b-row style="color: black">
                        <b-form-group label="Estado:">
                            <Field name="estado"  v-model="selectedIds.state_id" @input="getStateId(selectedIds.state_id)" as="select" class="form-control form-control-md" >
                                    <option :value="null" disabled>-- Por favor Selecciona un opcion --</option>
                                    <option v-for="state in states" :key="state.id" :value="state.id">
                                    {{ state.name }}
                                    </option>
                                </Field>
                            <ErrorMessage name="estado" class="text-danger"/>
                        </b-form-group>   
                    </b-row>
                    <b-row style="color: black">
                        <b-form-group>
                            <label for="">Ciudad <span class="text-danger">(*)</span></label>
                            
                            <Field name="ciudad" as="select"  v-model="selectedUser.city_id" class="form-control form-control-md">
                                <option :value="null" disabled>-- Por favor Selecciona un opcion --</option>
                                <option v-for="city in cities" :key="city.id" :value="city.id">
                                {{ city.name }}
                                </option>
                            </Field>
                            <ErrorMessage name="ciudad" class="text-danger"/>
                        </b-form-group>
                    </b-row>
                    <b-alert variant="success" v-if="success" show>Usuario Editado</b-alert>    
                    <b-button class="mt-3 float-right" type="submit" variant="primary" block >Editar</b-button>
                </Form>
            </b-container>
            
        </b-modal>

        <b-modal id="modal-2" title="Eliminar usuario" hide-footer>
            <b-container>
                <h4 class="text-center">Desea Eliminar este usuario?</h4>
                <br/>
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-3 col-sm-3  row justify-content-center">
                        <b-button class="mt-3" variant="primary" block >No</b-button>
                    </div>
                    <div class="col-md-1">
                    </div>
                     <div class="col-lg-3 col-md-3 col-sm-3 row justify-content-center">
                        <b-button class="mt-3" @click="userDelete()" block >Si</b-button>
                    </div>
                </div>
                <br/>
                <b-alert variant="danger" v-if="success" show>Usuario Eliminado</b-alert>
            </b-container>
        </b-modal>
   
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
    import Loader from "./Loader.vue";

    
        export default {
        name: "users",
        components: {
            Form,
            Field,
            ErrorMessage,
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
                    key: "fecha_nacimiento",
                    label: "Fecha Nacimiento",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                {
                    key: "edad",
                    label: "Edad",
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
                    key: "codigo_ciudad",
                    label: "Codigo de ciudad",
                    sortable: true,
                    thStyle: { "min-width": "140px !important" }
                },
                           
                {
                    key: "remi",
                    label: "Ciudad",
                    sortable: true,
                    thStyle: { "min-width": "150px !important", width: "80px !important" }
                },
                {
                    key: "edit",
                    label: "Editar",
                    thStyle: { "min-width": "80px !important", width: "80px !important" }
                },
                {
                    key: "delete",
                    label: "Eliminar",
                    thStyle: { "min-width": "80px !important", width: "80px !important" }
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
           
            await this.getUsers()
             console.log(this.users)
            this.load(false)
            
        },

        computed: {
            ...mapState("loader", [
                "loader"
            ]),
            ...mapState("auth", [
                "selectedAuth"
            ]),
            ...mapState("users", [
                "success",
                "users",
                "selectedUser",
                "idUser",
                "filtro"
            ]),
           ...mapState("regions", [
                "countries",
                "states",
                "cities",
                "selectedIds"
            ])
        },

        methods: {
            ...mapMutations("loader", [
                "load"
            ]),
            ...mapActions("auth", ["login"]),
            ...mapActions("users", [
                "getUsers",
                "editUser",
                "deleteUser",
                "setPagePagination"
            ]),
            ...mapActions("regions", [
                "getCountries",
                "getStates",
                "getCities"
            ]),
            ...mapMutations("users", [
                "setUserEdit",
                "setIdUser",
                "resetFiltro",
                "firtPage"
            ]),

            // Se obtiene el id del pais para listar los estados que pertenecen al pais
            async getCountryId(id){
                this.load(true)
                await this.getStates(id);
                this.load(false)
            }, 

            // Se obtiene el id del estado para listar las ciudades que pertenecen al estado
            async getStateId(id){
                this.load(true)
                await this.getCities(id);
                this.load(false)
            },

            async buscar(){
                this.load(true)
                this.firtPage()    
                await this.getUsers()
                this.load(false)
            },
            async limpiar(){
                this.load(true)
                this.resetFiltro()
                await this.getUsers()
                this.load(false)
            },
            async verDatos(data){
                this.load(true)

                this.selectedUser.id = data.id
                this.selectedUser.nombre = data.nombre
                this.selectedUser.telefono = data.telefono
                this.selectedUser.cedula = data.cedula
                this.selectedUser.email = data.email
                this.selectedUser.fecha_nacimiento = data.fecha_nacimiento
                this.selectedUser.codigo_ciudad = data.codigo_ciudad
                this.selectedUser.city_id = data.city_id
            
                this.selectedIds.country_id = data.city.state.country_id
                this.selectedIds.state_id = data.city.state_id
                await this.getCountries();
                await this.getStates(data.city.state.country_id)
                await this.getCities(data.city.state_id)

                this.load(false)
            },

            aver(){
                alert(this.users.page)
            },
            getEliminar(data){
                this.setIdUser(data.id)
            },

            async userDelete(){
                this.load(true)
                await this.deleteUser()
                await this.getUsers()
                this.load(false)
            },

            async enviar(){
                this.load(true)
                await this.editUser()
                await this.getUsers()
                this.load(false)
            }
           
         
        },
    };
</script>