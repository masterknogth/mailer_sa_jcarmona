<template>
    <div class="container" >
        <b-card style="margin-top:150px">
            <Form @submit="onSubmit">
                <br/><br/>
                <b-row >
                    <b-col sm="6">
                        <b-form-group>
                            <label>Destinatario
                                <span class="text-danger">(*)</span>
                            </label>
                            <Field name="destino" v-model="selectedEmail.destino" rules="required|email" class="form-control form-control-md"/>
                        </b-form-group>
                        <ErrorMessage name="destino" class="text-danger"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="6">
                        <b-form-group>
                            <label>Asunto
                                <span class="text-danger">(*)</span>
                            </label>
                            <Field  name="asunto" v-model="selectedEmail.asunto" rules="required" class="form-control form-control-md"/>
                        </b-form-group>
                        <ErrorMessage name="asunto" class="text-danger"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="6">
                        <b-form-group>
                            <label>Contenido
                                <span class="text-danger">(*)</span>
                            </label>
                            <Field  name="contenido" v-model="selectedEmail.contenido" rules="required" as="textarea" class="form-control form-control-md"/>
                        </b-form-group>
                        <ErrorMessage name="contenido" class="text-danger"/>
                    </b-col>
                </b-row>
                <br/><br/><br/>
                <b-alert variant="success" v-if="alert" show>Correo Enviado</b-alert>
                
                <br/><br/><br/>
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


defineRule("required", (value) => {
  if (!value || !value.length) {
    return "El campo es requerido";
  }
  return true;
});
defineRule("email", (value) => {
  if (!value || !value.length) {
    return true;
  }
  
  if (!value.includes('@')) {
    return "El campo debe ser un Email";
  }
  return true;
  
});


export default {
  name: "Email",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data() {
      return {
        alert:false
      }
    },

  created() {
    // No se puede entrar a esta interfaz si no se esta logeado
    if(!this.selectedAuth.loged){
      return this.$router.replace('/');    
    }
  },

  computed: {
    ...mapState("auth", [
      "ingreso",
      "selectedAuth"
    ]),
    ...mapState("emails", [
      "selectedEmail"
    ])
  },

  methods: {
    ...mapActions("auth", ["login"]),

    ...mapActions("emails", ["newEmail"]),
    async onSubmit() {
      await this.newEmail()
      this.alert = true;
      setTimeout(() => {
          this.alert = false;    
      },5000)
    },
    
    
  },
};
</script>
