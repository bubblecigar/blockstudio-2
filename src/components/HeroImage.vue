<template>
  <div class="hero-image">
    <div />
    <main>
      <h1>Commercial builders with pride - workmanship that values quality.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus atque ipsam excepturi cupiditate corporis distinctio magnam maxime, voluptatum nisi autem facilis voluptatibus quaerat suscipit hic soluta pariatur, rem fuga.</p>
    </main>
    <nav>
      <div class="links">
        <a>fb</a>
        <a>ig</a>
        <a>yt</a>
      </div>
      <div class="scroll-hint">
        <span>scroll</span>
        <hr />
      </div>
      <div></div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.hero-image::before {
  content: "Block Studio c 2018 Copyright. All Rights Reserved.";
  position: absolute;
  left: 0;
  top: 50%;
  padding: var(--gap-lg);
  transform-origin: 0 50%;
  transform: rotate(90deg) translate(-50%, -50%);
}
.hero-image {
  background-image: url("https://picsum.photos/900/600");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  color: var(--light);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  > * {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
  }

  main {
    max-width: 1000px;
    padding: var(--gap-lg);
    h1 {
      padding-bottom: var(--gap-lg);
    }
    p {
      max-width: 730px;
      margin: auto;
    }
  }

  nav {
    margin-top: auto;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    > div {
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 0;
    }

    .links {
      display: flex;
      a {
        padding: var(--gap-lg);
      }
    }

    .scroll-hint {
      display: flex;
      flex-flow: column;

      span {
        padding: var(--gap-lg);
      }
      hr {
        border-right: 1px solid var(--light);
        height: 80px;
        margin-bottom: var(--gap-lg);
      }
    }
  }
}
</style>