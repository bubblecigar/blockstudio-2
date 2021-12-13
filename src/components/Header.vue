<template>
  <header>
    <h3 class="logo">B</h3>
    <div class="links">
      <router-link :to="{ path:'/about', hash:'#about' }">About</router-link>
      <router-link :to="{ path:'/websites', hash:'#websites' }">Websites</router-link>
      <router-link :to="{ path:'/branding', hash:'#branding' }">Branding</router-link>
    </div>
    <div class="menu">
      <unicon name="bars" fill="white"></unicon>
    </div>
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
    position: relative;
    padding: 0 var(--gap-lg);

    &::before {
      content: "";
      position: absolute;
      width: 17px;
      left: 50%;
      top: -2px;
      transform: translate(-50%, -50%);
      border-top: 3px solid var(--light);
    }
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