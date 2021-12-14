<template>
  <header>
    <a href="https://github.com/bubblecigar/blockstudio-2">
      <h3 class="logo" @click="reload">B</h3>
    </a>

    <div class="links">
      <router-link :to="{ path:'/about', hash:'#about' }">About</router-link>
      <router-link :to="{ path:'/websites', hash:'#websites' }">Websites</router-link>
      <router-link :to="{ path:'/branding', hash:'#branding' }">Branding</router-link>
    </div>
    <div class="menu">
      <unicon name="bars" fill="var(--light)"></unicon>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    reload: function() {
      window.location.href = location.origin;
    }
  }
};
</script>
<style lang="scss">
header {
  color: var(--light);
  background: rgba(0, 0, 0, 0.3);

  position: absolute;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  .logo {
    cursor: pointer;
    position: relative;
    padding: 0 var(--gap-lg);
    color: var(--light);

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