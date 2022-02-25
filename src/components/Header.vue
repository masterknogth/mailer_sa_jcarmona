<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark header-fixed" >
        <div class="container-fluid">
           
            <router-link  class="navbar-brand" to="/">Navbar</router-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><router-link  class="dropdown-item" to="/registro">Registro</router-link></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.header-fixed{
	position:fixed;
	top:0;
	width:100%; 
	z-index:400;
    padding: 20px;
	
}
</style>