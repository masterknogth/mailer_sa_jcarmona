<template>
    
    <Form @submit="onSubmit">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Form> 

      <!--<b-table striped hover :items="items"></b-table>-->

    

    <!--<Form @submit="onSubmit">
    <Field name="name" as="input" rules="required" />
    <ErrorMessage name="name" />
    <br />
    <Field name="email" as="input" rules="required|email" />
    <ErrorMessage name="email" />
    <br />
    <button>Submit</button>
    </Form>-->
</template>

<script>
import { createApp } from 'vue'
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
  /*if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
    return "El campo debe ser un Email";
  }*/
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
  },

  data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },

  created() {
    //console.log(this.$store.state.a.ingreso.email)
    console.log(this.ingreso.email)
  },

  computed: {
   ...mapState("auth", ["ingreso"])
  },

  methods: {
    ...mapActions("auth", ["login"]),
    async onSubmit() {
      console.log(this.ingreso.email)
      await this.login()
      //alert(JSON.stringify(values, null, 2));
    },
    
    
  },
};

</script>

<style scoped>
  .error{
    font-size: 15px;
  }
</style>
