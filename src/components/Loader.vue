<template>
  <div class="preloader">
    <img src="load.gif" class="load_img" width="300" height="150" alt="" />
  </div>
</template>

<script>
export default {
  name: "loading",
};
</script>

<style>
.load_img {
  position: fixed;
  left: 45%;
  top: 40%;
  height: 80px;
  width: 70px;
  z-index: 1001;
}
.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  z-index: 3000;
  backface-visibility: hidden;
  background: #ffffff;
  opacity: 0.8;
}
</style>