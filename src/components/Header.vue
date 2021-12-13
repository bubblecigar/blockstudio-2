<template>
  <header>
    <div class="logo">B</div>
    <div class="links">
      <router-link :to="{ path:'/about', hash:'#about' }">About</router-link>
      <router-link :to="{ path:'/websites', hash:'#websites' }">Websites</router-link>
      <router-link :to="{ path:'/branding', hash:'#branding' }">Branding</router-link>
    </div>
    <div class="menu">M</div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss">
header {
  color: var(--light);
  background: rgba(0, 0, 0, 0.3);

  position: absolute;
  display: flex;
  width: 100%;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: var(--gap-lg);
  }

  .links {
    margin-left: auto;

    > a {
      color: var(--light);
      margin-left: var(--gap-lg);
      margin-right: var(--gap-lg);
      padding-top: 5px;
      padding-bottom: 5px;
      text-decoration: none;
      line-height: var(--gap-lg);
    }

    .router-link-active {
      border-bottom: 1px solid var(--light);
    }
  }

  .menu {
    background: var(--dark);
    padding: var(--gap-lg);
  }
}
</style>