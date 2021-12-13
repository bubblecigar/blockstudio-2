<template>
  <div class="about">
    <h1>Works</h1>
    <div class="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <hr />
    <h5>
      Woden Public Realm Improvements Works Package
      <br />1 including Lift & Stairs.
    </h5>
    <button>More</button>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "About",
  components: {
    Card
  }
};
</script>

<style lang='scss'>
.about {
  text-align: center;
  button {
    background: var(--light);
    color: var(--dark);
    padding: var(--gap-sm) var(--gap-md);
    border-radius: 3px;
    outline: none;
    border: 1px solid var(--dark);
    width: 200px;
    margin-bottom: calc(2.5 * var(--gap-lg));
  }
  h1 {
    padding: var(--gap-lg);
    padding-top: calc(2 * var(--gap-lg));
  }
  h5 {
    padding: var(--gap-md) 0;
  }
  hr {
    border-right: 1px solid var(--light);
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