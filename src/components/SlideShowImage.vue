<template>
  <div class="slide-show-image" :style="{ width, height }">
    <img
      v-for="(image, index) of images"
      :key="index"
      :src="image"
      :class="{ show: showedIndex === index }"
    />
  </div>
</template>

<script>
export default {
  props: {
    width: Number,
    height: Number
  },
  data: function() {
    return {
      images: [
        "https://picsum.photos/300/300",
        "https://picsum.photos/300/301",
        "https://picsum.photos/300/302"
      ],
      showedIndex: 0,
      intervalId: null
    };
  },
  mounted: function() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  },
  beforeUnMount: function() {
    clearInterval(this.intervalId);
  },
  methods: {
    prev: function() {
      this.move(-1);
    },
    next: function() {
      this.move(1);
    },
    move: function(step) {
      this.showedIndex =
        (this.showedIndex + step + this.images.length) % this.images.length;
    }
  }
};
</script>

<style lang='scss'>
.slide-show-image {
  line-height: 0;
  margin: var(--gap-md);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    transition: opacity 1s linear;

    &.show {
      opacity: 1;
    }
  }
}
</style>