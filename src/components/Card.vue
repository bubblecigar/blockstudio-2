<template>
  <div class="card" :class="{isShowed}">
    <img src="https://picsum.photos/400/300" />
    <div class="description">
      <button class="card-award">Award</button>
      <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
      <p>Lorem ipsum dolor sit amet.</p>
      <div class="card-info-grid">
        <span class="title">CLIENT</span>
        <span class="title">STATUS</span>
        <span>ACT Government</span>
        <span>Completed 2017</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {},
  data: function() {
    return {
      isShowed: false
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.isShowed = true;
    }, 100);
  }
};
</script>

<style lang='scss'>
@media (min-width: 1200px) {
  .card:nth-child(3n + 2) {
    transform: translateY(calc(0 * var(--gap-lg)));
  }
  .card:nth-child(3n + 2) {
    transform: translateY(calc(1 * var(--gap-lg)));
  }
  .card:nth-child(3n + 3) {
    transform: translateY(calc(2 * var(--gap-lg)));
  }
}
@media (min-width: 1600px) {
  .card:nth-child(4n + 1) {
    transform: translateY(calc(0 * var(--gap-lg)));
  }
  .card:nth-child(4n + 2) {
    transform: translateY(calc(1 * var(--gap-lg)));
  }
  .card:nth-child(4n + 3) {
    transform: translateY(calc(2 * var(--gap-lg)));
  }
  .card:nth-child(4n + 4) {
    transform: translateY(calc(3 * var(--gap-lg)));
  }
}
.card {
  margin: var(--gap-md);
  width: 360px;
  box-shadow: var(--box-shadow);
  border-radius: 3px;
  text-align: left;
  font-size: var(--font-size-md);
  opacity: 0;
  transition: opacity 1s linear;
  overflow: hidden;

  :last-child {
    margin-right: auto;
  }

  &.isShowed {
    opacity: 1;
  }

  img {
    width: 100%;
  }

  .card-award {
    background: var(--dark);
    color: var(--light);
    padding: var(--gap-sm) var(--gap-md);
    margin-bottom: var(--gap-md);
    border-radius: 3px;
    outline: none;
    border: none;
    width: auto;
  }

  .description {
    padding: var(--gap-md);
  }
  .card-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    span {
      padding-bottom: var(--gap-sm);
    }

    .title {
      padding-top: var(--gap-md);
      color: var(--gray-2);
    }
  }
}
</style>