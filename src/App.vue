<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Rightnav from './components/Rightnav.vue';
import Navigation from './components/Navigation.vue';
import SmallNav from './components/SmallNav.vue';

</script>

<template>
  <div>
    <SmallNav/>
    <Header/>
    <div class="mx-auto padding_x-2 sm:px-2 md:px-11 lg:px-16 bg-container_color pb-5 z-10">
      <div class="md:flex gap-10 justify-between relative bg-container_color">
      <Navigation/>
      <div class="py-3 md:py-0 w-full md:mt-20">
        <router-view></router-view>
      </div>

      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
