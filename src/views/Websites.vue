<template>
  <div class="Websites" id="websites">
    <div class="dark-color-picker">
      <button
        v-for="(color, index) of darkColors"
        @click="setDarkColor(index)"
        :key="{color}"
        :style="{ background: color}"
      ></button>
    </div>
    <div class="light-color-picker">
      <button
        v-for="(color, index) of lightColors"
        @click="setLightColor(index)"
        :key="{color}"
        :style="{ background: color}"
      ></button>
    </div>
    <a target="_BLANK" href="https://codepen.io/alphardex/pen/dyPorwJ">
      Snow effects by alphardex
      <unicon name="external-link-alt" fill="var(--gray-3)"></unicon>
    </a>
  </div>
</template>

<script>
export default {
  name: "Websites",
  components: {},
  data: function() {
    return {
      darkColors: ["#000000", "#2C5F2D", "#5F4B8B", "#00203F", "#606060"],
      lightColors: ["#ffffff", "#F4DF4E", "#E69A8D", "#ADEFD1", "#D6ED17"],
      darkIndex: 0,
      lightIndex: 0
    };
  },
  methods: {
    setTheme: function() {
      const app = document.querySelector("#app");
      app.dispatchEvent(
        new CustomEvent("change-theme", {
          detail: {
            dark: this.darkColors[this.darkIndex],
            light: this.lightColors[this.lightIndex]
          }
        })
      );
    },
    setDarkColor: function(index) {
      this.darkIndex = index;
      this.setTheme();
    },
    setLightColor: function(index) {
      this.lightIndex = index;
      this.setTheme();
    }
  }
};
</script>


<style lang='scss'>
#websites {
  button {
    width: 50px;
    height: 50px;
    box-shadow: var(--box-shadow);
    border-radius: 25px;
    background: var(--dark);
    color: var(--light);
    padding: var(--gap-sm) var(--gap-md);
    margin: var(--gap-sm) var(--gap-md);
    outline: none;
    border: none;
  }
  .dark-color-picker,
  .light-color-picker {
    border-radius: 3px;
    padding: var(--gap-md);
    margin: var(--gap-md);
    margin-bottom: var(--gap-xl);
    position: relative;
  }
  .dark-color-picker::before {
    content: "dark color picker";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
    background: var(--dark);
    padding: var(--gap-sm) var(--gap-md);
    border-radius: 30px;
    border: 1px solid var(--dark);
  }
  .light-color-picker::before {
    content: "light color picker";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
    background: var(--light);
    color: var(--dark);
    padding: var(--gap-sm) var(--gap-md);
    border-radius: 30px;
    border: 1px solid var(--dark);
  }
  width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
  color: var(--light);
  font-size: var(--font-size-lg);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    color: var(--gray-4);
    display: inline-flex;
    align-items: flex-end;
    border-bottom: 1px solid var(--gray-3);

    div {
      margin-left: var(--gap-sm);
      transform: translate(0, 3px);
    }
  }
}
</style>