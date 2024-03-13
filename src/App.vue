<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Rightnav from './components/Rightnav.vue';
import Navigation from './components/Navigation.vue';
import SmallNav from './components/SmallNav.vue';

</script>

<template>
  <Header/>
  <SmallNav/>
    <div class="mx-auto px-2 sm:px-6 md:px-11 lg:px-16 bg-container_color pb-5">
      <div class="md:flex gap-10 justify-between relative bg-container_color">
      <Navigation/>
      <div class="p-0 border w-full border-red-500 md:mt-5">
        <router-view></router-view>
      </div>

      </div>
    </div>
  <Footer/>
</template>

<style scoped>

</style>
