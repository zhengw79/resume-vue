<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Navigation />
  <!---------|| Page Content ||------>
  <div class="container-fluid p-0">
    <router-view v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>