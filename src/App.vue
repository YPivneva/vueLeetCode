<script>
  import { RouterLink, RouterView } from 'vue-router'
  
</script>

<template>
  <div>

    <img alt="Vue logo" class="logo" src="@/assets/iconSvg.svg" width="125" height="125" />
    <h1>Аналог сайта LeetCode</h1>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
</template>



<style scoped>

</style>
