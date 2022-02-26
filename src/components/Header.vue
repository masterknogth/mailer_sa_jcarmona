<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark header-fixed" >
        <Loader v-if="loader"/>
        <div class="container-fluid">
           
            <!--<router-link  class="navbar-brand" to="/">Navbar</router-link>-->
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                
                <router-link class="nav-link active" to="/email">Inicio</router-link>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Opciones
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><router-link v-if="!selectedAuth.loged" class="dropdown-item" to="/registro">Registro</router-link></li>
                    <li><router-link v-if="selectedAuth.loged && selectedAuth.rol == 1" class="dropdown-item" to="/usuarios">Usuarios</router-link></li>
                    <li><router-link v-if="selectedAuth.loged" class="dropdown-item" to="/email">Enviar correo</router-link></li>
                    <li><router-link v-if="selectedAuth.loged" class="dropdown-item" to="/lista-email">Correos</router-link></li>
                    <li><router-link v-if="selectedAuth.loged" @click="logOut" class="dropdown-item" to="/email">Cerrar Sesion</router-link></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>

import { mapState, mapActions, mapMutations } from "vuex";
import Loader from "./Loader.vue";

export default {
  name: "Header",
  components: {     
      Loader
  }, 
  
  data() {
      return {
    
      }
    },

  created() {
    
    /*if(this.selectedAuth.loged){
      return this.$router.replace('/email');    
    }*/
  },

  computed: {
    ...mapState("loader", [
        "loader"
    ]),
    ...mapState("auth", [
      "ingreso",
      "selectedAuth"
    ]),
    ...mapState("users", [
      "selectedUser"
    ])
  },

  methods: {
    ...mapMutations("loader", [
        "load"
    ]),
    ...mapActions("auth", ["logout"]),
    ...mapMutations("users", [
        "resetSelectedUser"
    ]),

    ...mapMutations("regions", [
        "resetSelectedIds"
    ]),
    
    async logOut() {
      this.load(true)
      await this.logout()
      this.resetSelectedUser()
      this.resetSelectedIds()
      if(!this.selectedAuth.loged){
        return this.$router.replace('/');    
      }
      this.load(false)
      
    },
    
    
  },
};

</script>


<style scoped>
.header-fixed{
	position:fixed;
	top:0;
	width:100%; 
	z-index:400;
    padding: 20px;
	
}
</style>