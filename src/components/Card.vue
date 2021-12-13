<template>
  <div class="card">
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
  props: {}
};
</script>

<style lang='scss'>
.card {
  margin: var(--gap-md);
  width: 360px;
  box-shadow: var(--box-shadow);
  border-radius: 3px;
  text-align: left;
  font-size: var(--font-size-md);

  img {
    width: 100%;
  }

  &:nth-child(3n + 2) {
    transform: translateY(var(--gap-lg));
  }
  &:nth-child(3n + 3) {
    transform: translateY(calc(2 * var(--gap-lg)));
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