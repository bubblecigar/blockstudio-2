<template>
  <div class="Websites" id="websites">
    Snow effects by
    <a target="_BLANK" href="https://codepen.io/alphardex/pen/dyPorwJ">alphardex</a>
  </div>
</template>

<script>
export default {
  name: "Websites",
  components: {}
};
</script>


<style lang='scss'>
#websites {
  width: 100%;
  min-height: 100vh;
  background-image: radial-gradient(
    ellipse at bottom,
    #1b2735 0%,
    #090a0f 100%
  );
  background-attachment: fixed;
  color: var(--light);
  font-size: var(--font-size-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    color: var(--light);
    margin-left: 0.5em;
  }
}
</style>