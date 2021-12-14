<template>
  <footer>
    <div class="info">
      <h3 class="logo" @click="reload">B</h3>
      <div class="links">
        <router-link :to="{ path:'/about', hash:'#about' }">About</router-link>
        <router-link :to="{ path:'/websites', hash:'#websites' }">Websites</router-link>
        <router-link :to="{ path:'/branding', hash:'#branding' }">Branding</router-link>
        <div class="contact">
          T. 02-2885-8586
          <br />E. info@blockstudio.tw
          <br />3F., No.2, Ln. 80, Sec. 4, Chengde Rd., Shilin Dist., Taipei City 111, Taiwan
        </div>
      </div>
      <div class="social-media">
        <a>
          <unicon name="facebook-f" fill="var(--light)"></unicon>
        </a>
        <a>
          <unicon name="instagram" fill="var(--light)"></unicon>
        </a>
        <a>
          <unicon name="youtube" fill="var(--light)"></unicon>
        </a>
      </div>
    </div>
    <div class="copyright">Block Studio©2018 Copyright. All Rights Reserved.</div>
  </footer>
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

<style lang='scss'>
footer {
  background: var(--dark);
  color: var(--light);

  display: flex;
  width: 100%;
  flex-flow: column;
  justify-content: space-between;

  > div {
    width: 100%;
    padding: var(--gap-lg);
  }

  .info {
    padding: var(--gap-lg) calc(3 * var(--gap-lg));
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
  }
  .logo {
    cursor: pointer;
    align-self: flex-start;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 17px;
      left: 3px;
      top: -2px;
      border-top: 3px solid var(--light);
    }
  }
  .links {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0 calc(3 * var(--gap-lg));

    a {
      color: var(--light);
      text-decoration: none;
      font-size: var(--font-size-lg);
      font-weight: bold;
      padding-right: calc(3 * var(--gap-lg));
      padding-bottom: var(--gap-sm);
    }
  }
  .contact {
    text-align: left;
    width: 100%;
    line-height: 2;
  }
  .social-media {
    margin-left: auto;
    display: flex;

    a {
      padding-left: calc(1 * var(--gap-lg));
    }
  }
  .copyright {
    text-align: center;
    padding: var(--gap-sm);
    border-top: 1px solid var(--light);
  }
}
</style>