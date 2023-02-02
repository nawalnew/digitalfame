<template>
  <header class="header">
    <g-link to="/"><h1>👨‍💻 {{siteName}}</h1></g-link>
    <ClientOnly>
      <ThemeToggle />
    </ClientOnly>
  </header>
</template>

<script>
export default {
  props: ["siteName"],
  components: {
    ThemeToggle: () => import('@/components/ThemeToggle')
  }
};
</script>

<style lang="scss">

</style>
