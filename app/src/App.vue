<script setup>
import Navigation from './components/Navigation.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Education from './components/Education.vue';
</script>

<template>
  <Navigation />
  <!---------|| Page Content ||------>
  <div class="container-fluid p-0">
    <About />
    <hr class="m-0"/>
    <Experience />
    <hr class="m-0" />
    <Education />
  </div>
</template>
