<template>
  <div class="about">
    <h1 id="about">Works</h1>
    <div class="cards">
      <Card v-for="(card, index) in cards" :key="index" />
    </div>
    <hr />
    <h5>
      Woden Public Realm Improvements Works Package
      <br />1 including Lift & Stairs.
    </h5>

    <div class="load-hint">
      <Loader v-show="isLoading" />
      <button v-show="!isLoading" id="load-button" @click="load">More</button>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "About",
  components: {
    Card,
    Loader
  },
  data: function() {
    return {
      cards: 3,
      isLoading: false,
      timeoutId: null,
      remainScroll: 0,
      observer: null
    };
  },
  methods: {
    load: function() {
      if (this.isLoading) {
        // do nothing
      } else {
        this.isLoading = true;
        this.timeoutId = setTimeout(() => {
          this.cards += 3;
          this.isLoading = false;
          this.remainScroll = 20;
          requestAnimationFrame(this.scrollAbove);
        }, 500 + Math.random() * 1000);
      }
    },
    scrollAbove: function() {
      if (this.remainScroll > 0) {
        document.scrollingElement.scrollTop -= 40;
        this.remainScroll--;
        requestAnimationFrame(this.scrollAbove);
      }
    }
  },
  mounted: function() {
    const bottom = document.querySelector(".copyright");
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.8) {
          this.load();
        }
      });
    };
    this.observer = new IntersectionObserver(callback, {
      threshold: 0.2
    });
    this.observer.observe(bottom);
  },
  beforeUnmount: function() {
    clearTimeout(this.timeoutId);
    const bottom = document.querySelector(".copyright");
    this.observer.unobserve(bottom);
    this.observer.disconnect();
  }
};
</script>

<style lang='scss'>
.about {
  text-align: center;
  .load-hint {
    display: flex;
    height: 200px;
    align-items: center;
    justify-content: center;
    padding-bottom: calc(2.5 * var(--gap-lg));
  }
  button {
    cursor: pointer;
    background: var(--light);
    color: var(--dark);
    padding: var(--gap-sm) var(--gap-md);
    border-radius: 3px;
    outline: none;
    border: 1px solid var(--dark);
    width: 200px;
  }
  h1 {
    padding: var(--gap-lg);
    padding-top: calc(2 * var(--gap-lg));
  }
  h5 {
    padding: var(--gap-md) 0;
  }
  hr {
    border-right: 1px solid var(--dark);
    border-left: 0;
    height: 120px;
    margin-top: var(--gap-lg);
    width: 0;
  }
}
.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  padding-bottom: calc(2 * var(--gap-lg));
}
</style>