<template>
  <Header />
  <HeroImage />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import HeroImage from "@/components/HeroImage.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    HeroImage,
    Footer
  }
};
</script>

<style lang="scss">
:root {
  --dark: #000000;
  --light: #ffffff;
  --gray-1: #f8f8f8;
  --gray-2: #9b9b9b;
  --gray-3: #4a4a4a;
  --gray-4: #2c2c2c;
  --box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  --border-radius: 3px;
  --font-size-lg: 18px;
  --font-size-md: 16px;
  --font-size-sm: 14px;
  --gap-xl: 80px;
  --gap-lg: 40px;
  --gap-md: 20px;
  --gap-sm: 10px;
}

* {
  box-sizing: border-box;
}

h1 {
  font-weight: bold;
  font-size: 60px;
  // line-height: 64px;
}
h2 {
  font-weight: 500;
  font-size: 48px;
  // line-height: 55px;
}
h3 {
  font-weight: 500;
  font-size: 36px;
  // line-height: 42px;
}
h4 {
  font-weight: 500;
  font-size: 28px;
  // line-height: 36px;
}
h5 {
  font-weight: normal;
  font-size: 24px;
  // line-height: 26px;
}
h6 {
  font-weight: 500;
  font-size: 20px;
  // line-height: 24px;
}

#app {
  font-family: Ubuntu, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark);

  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  line-height: initial;
}
</style>
