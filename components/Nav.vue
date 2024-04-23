<template>
  <NuxtLink to="/">Index</NuxtLink>
  <NuxtLink to="/test">Test1</NuxtLink>
  <p>
    CSRF: {{ csrf }}
  </p>
</template>

<script setup lang="ts">
const { csrf } = useCsrf();
</script>
