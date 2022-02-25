<template>
    <div class="container" >
        <b-card style="margin-top:150px">
            <b-form method="POST">
                <br/><br/>
                <b-row>
                    <b-col sm="3">
                        <b-form-group>
                            <label
                            >Nombre
                                <span class="text-danger">(*)</span></label
                            >
                            <b-form-input id="nombre" name="nombre"></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label
                            >Email
                                <span class="text-danger">(*)</span></label
                            >
                            <b-form-input id="direccion"
                                            name="direccion"></b-form-input>              
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label>Teléfono</label >
                            <b-form-input id="direccion"
                                            name="direccion"></b-form-input>              
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label>Cédula
                                <span class="text-danger">(*)</span>
                            </label>
                            <b-form-input id="direccion"
                                name="direccion">
                            </b-form-input>              
                        </b-form-group>
                    </b-col>
                </b-row>
                <br/><br/><br/>
                <b-row>
                    <b-col sm="3">
                        <b-form-group>
                            <label>Fecha de nacimiento <span class="text-danger">(*)</span></label>
                            <b-form-input
                                id="telefono"
                                name="telefono" 
                                type="date"                                           
                            >
                            </b-form-input>
                            
                        
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label for="">Pais <span class="text-danger">(*)</span></label>
                        
                            <b-form-select v-model="selected" :options="options"></b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label for="">Estado <span class="text-danger">(*)</span></label>
                        
                            <b-form-select v-model="selected" :options="options"></b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col sm="3">
                        <b-form-group>
                            <label for="">Ciudad <span class="text-danger">(*)</span></label>
                        
                            <b-form-select v-model="selected" :options="options"></b-form-select>
                        </b-form-group>
                    </b-col>

                    
                </b-row>
                <br/><br/><br/>
                <b-row class="row justify-content-center" >
                    <b-col sm="3" >
                        <b-button
                            size="md"
                            variant="primary"
                        >
                        Guardar
                        </b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {
  name: "Registro",


  data() {
    return {
    selected: null,
    options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
    ]
    }
},

  created() {
    //console.log(this.$store.state.a.ingreso.email)
  
  },

  computed: {
   
  },

  methods: {
    async onSubmit() {
     
     
      //alert(JSON.stringify(values, null, 2));
    },
    
    
  },
};
</script>
>