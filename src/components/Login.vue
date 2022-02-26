<template>
    
    <Form @submit="onSubmit">
      <Loader v-if="loader"/>
      <section class="vh-100" >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">

                  <h3 class="mb-5">Login</h3>

                  <div class="form-outline mb-4">
                    <Field type="email" name="email"  v-model="ingreso.email"  rules="email|required" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX-2">Email</label>
                    <br/>
                    <ErrorMessage name="email" class="text-danger error"/>
                  </div>

                  <div class="form-outline mb-4">
                    <Field type="password" name="password"  v-model="ingreso.password"  rules="required"  class="form-control form-control-lg" />
                    <label class="form-label" for="typePasswordX-2">Contraseña</label>
                    <br/>
                    <ErrorMessage name="password"  class="text-danger error"/>
                  </div>
                  <div>
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                  </div>
                  <br/>
                  <b-alert variant="danger" v-if="success" show>Error de usuario o contraseña</b-alert>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Form> 


</template>

<script>
import { createApp } from 'vue'
import { mapState, mapActions, mapMutations } from "vuex";
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import Loader from "./Loader.vue";


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
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
    Loader
  },

  data() {
      return {
       
      }
    },

  created() {
    // Si ya hay un usuario logeado, no puede entrar a la interfaz de login
    this.load(false)
    if(this.selectedAuth.loged){
      return this.$router.replace('/email');    
    }
  },

  computed: {
    ...mapState("loader", [
        "loader"
    ]),
    ...mapState("auth", [
     "ingreso",
     "selectedAuth",
     "success"
    ])
  },

  methods: {
    ...mapMutations("loader", [
        "load"
    ]),
    ...mapActions("auth", ["login"]),

    async onSubmit() {
      this.load(true)
      await this.login()
      this.load(false)
      if(this.selectedAuth.loged){
        return this.$router.replace('/email');    
      }
      
      
    },
    
    
  },
};

</script>

<style scoped>
  .error{
    font-size: 15px;
  }
</style>
