<template>
    <div class="container" >
        <b-card style="margin-top:150px">
            <Form @submit="onSubmit">
                <br/><br/>
                <b-row>
                    <b-col sm="3">
                        <b-form-group>
                            <label>Nombre
                                <span class="text-danger">(*)</span>
                            </label>
                            <Field v-model="selectedUser.nombre" name="nombre" rules="required" class="form-control form-control-md"/>
                        </b-form-group>
                        <ErrorMessage name="nombre" class="text-danger"/>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label>Email
                                <span class="text-danger">(*)</span>
                            </label>
                            <Field name="email" v-model="selectedUser.email" rules="required|email" class="form-control form-control-md"/>      
                        </b-form-group>
                        <ErrorMessage name="email" class="text-danger"/>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label>Teléfono</label >
                            <b-form-input 
                                name="telefono"
                                v-model="selectedUser.telefono"
                            >
                            </b-form-input>              
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label>Cédula
                                <span class="text-danger">(*)</span>
                            </label>
                            <Field name="cedula" v-model="selectedUser.cedula" rules="required" class="form-control form-control-md"/>
                                   
                        </b-form-group>
                        <ErrorMessage name="cedula" class="text-danger"/>
                    </b-col>
                </b-row>
                <br/><br/><br/>
                <b-row>
                    <b-col sm="3">
                        <b-form-group>
                            <label>Fecha de nacimiento <span class="text-danger">(*)</span></label>
                            <Field name="fecha" v-model="selectedUser.fecha_nacimiento" rules="required" class="form-control form-control-md" type="date" />
                        </b-form-group>
                        <ErrorMessage name="fecha" class="text-danger"/>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label for="">País <span class="text-danger">(*)</span></label>
                            <Field name="pais"  v-model="selectedIds.country_id" @input="getCountryId" as="select" class="form-control form-control-md" >
                                <option :value="null" disabled>-- Por favor Selecciona un opcion --</option>
                                <option v-for="country in countries" :key="country.id" :value="country.id">
                                {{ country.name }}
                                </option>
                            </Field>
                           <ErrorMessage name="pais" class="text-danger"/>
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label for="">Estado <span class="text-danger">(*)</span></label>
                        
                           <Field name="estado"  :disabled="stateActive" v-model="selectedIds.state_id" @input="getStateId" as="select" class="form-control form-control-md" >
                                <option :value="null" disabled>-- Por favor Selecciona un opcion --</option>
                                <option v-for="state in states" :key="state.id" :value="state.id">
                                {{ state.name }}
                                </option>
                            </Field>
                            <ErrorMessage name="estado" class="text-danger"/>
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label for="">Ciudad <span class="text-danger">(*)</span></label>
                        
                            <Field name="ciudad"  :disabled="cityActive" as="select"  v-model="selectedUser.city_id" class="form-control form-control-md">
                                <option :value="null" disabled>-- Por favor Selecciona un opcion --</option>
                                <option v-for="city in cities" :key="city.id" :value="city.id">
                                {{ city.name }}
                                </option>
                            </Field>
                            <ErrorMessage name="ciudad" class="text-danger"/>
                        </b-form-group>
                    </b-col>

                    
                </b-row>
                <br/><br/><br/>
                <b-row>
                    <b-col sm="3">
                        <b-form-group>
                            <label>Codigo de ciudad
                                <span class="text-danger">(*)</span>
                            </label>
                            <Field 
                                name="codigo"
                                rules="required"
                                type="number"
                                class="form-control form-control-md"
                                v-model="selectedUser.codigo_ciudad"
                            />
                            <ErrorMessage name="codigo" class="text-danger"/>
                                     
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label>Contraseña
                                <span class="text-danger">(*)</span>
                            </label>
                            <Field
                                name="password"
                                type="password"
                                rules="required"
                                class="form-control form-control-md"
                                v-model="selectedUser.password"
                            />
                               
                        </b-form-group>
                        <ErrorMessage name="password" class="text-danger error"/>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label>Confirmar Contraseña
                                <span class="text-danger">(*)</span>
                            </label>
                            <Field 
                                name="confirm_password"
                                type="password"
                                rules="required|confirmed:password"
                                class="form-control form-control-md"
                            />
                              
                        </b-form-group>
                        <ErrorMessage name="confirm_password" class="text-danger error"/>
                    </b-col>


                </b-row>

                <br/><br/><br/>
                <b-alert variant="success" v-if="success" show>Usuario registrado</b-alert>
                <b-row class="row justify-content-center" >
                    <b-col sm="3" >
                        <b-button
                            size="md"
                            variant="primary"
                            type="submit"
                        >
                        Guardar
                        </b-button>
                    </b-col>
                </b-row>
            </Form>
        </b-card>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";


defineRule('confirmed', (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }
  return 'La contraseña no coincide';
});


export default {
  name: "Registro",
  components: {
    Form,
    Field,
    ErrorMessage,
  }, 

  data() {
      return {
          stateActive: false,
          cityActive: false,  
      };
  },

  async created() {
    // No se puede entrar a esta interfaz si ya se esta logeado  
    if(this.selectedAuth.loged){
      return this.$router.replace('/email');    
    }
    await this.getCountries();

  },

  computed: {
   ...mapState("regions", [
       "countries",
       "states",
       "cities",
       "selectedIds"
    ]),
    ...mapState("users", [
       "selectedUser",
       "success"
    ]),
    ...mapState("auth", [
     "selectedAuth"
    ])
  },

  methods: {
    ...mapActions("regions", [
        "getCountries",
        "getStates",
        "getCities"
    ]),

    ...mapActions("users", [
        "newUser"
    ]),

    ...mapMutations("regions", [
        "resetSelectedIds"
    ]),


    getFecha(){
        console.log(this.selectedUser.fecha_nacimiento)

        
    },
     
  
     
    // Se obtiene el id del pais para listar los estados que pertenecen al pais
    async getCountryId(){
        await this.getStates();
    }, 

    // Se obtiene el id del estado para listar las ciudades que pertenecen al estado
    async getStateId(){
        await this.getCities();
    },
    async onSubmit() {
        await this.newUser()
        //Se limpia los selects de  pais y estado
        this.resetSelectedIds()
        this.alert = true;
        setTimeout(() => {
            this.alert = false;    
        },5000)
    },
    
    
  },
};
</script>
>