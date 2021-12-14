<template>
  <div class="branding">
    <div id="branding" class="award row">
      <h2>Woden Public Realm Improvements Works Package 1 Including Lift & Stairs</h2>
      <div />
      <div class="award-grid">
        <h4>Award</h4>
        <span class="title">CLIENT</span>
        <span class="title">STATUS</span>
        <span>ACT Government</span>
        <span>Completed 2017</span>
        <span class="title">SUMMARY</span>
        <span class="title">LOCATION</span>
        <span>On time and on budget - 2017 MBA Award Winning Project</span>
        <span>Woden Bus Interchange Bradely Street Phillip ACT 2606</span>
      </div>
    </div>
    <div class="intro row">
      <div class="description">
        <h6>INTRO</h6>
        <p>The nominated works were described as the partial demolition of the upper and lower area including overhead walkway and roof slab, public toilets and cafe and the construction of new stairs and provision of an external public lift at the Woden Bus Interchange.The nominated works were described as the partial demolition of the upper and lower area including overhead walkway and roof slab, public toilets and cafe and the construction of new stairs and provision of an external public lift at the Woden Bus Interchange.</p>
      </div>
      <div />
      <SlideShowImage width="480px" height="360px" />
    </div>
    <div class="detail row">
      <img src="https://picsum.photos/700/400" />
      <p>The nominated works were described as the partial demolition of the upper and lower area including overhead walkway and roof slab, public toilets and cafe and the construction of new stairs and provision of an external public lift at the Woden Bus Interchange.The nominated works were described as the partial demolition of the upper and lower area including overhead walkway and roof slab, public toilets and cafe and the construction of new stairs and provision of an external public lift at the Woden Bus Interchange.</p>
      <div />
    </div>
    <div class="row">
      <div class="video-placeholder">
        <img src="https://picsum.photos/960/580" />
        <button @click="openYoutube" />
      </div>
    </div>
    <hr />
    <h5>
      Woden Public Realm Improvements Works Package
      <br />1 including Lift & Stairs.
    </h5>
    <div class="buttons">
      <button>Prev</button>
      <button>Next</button>
    </div>
    <div v-if="showIframe" class="overlay" @click="closeYoutube">
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gVKEM4K8J8A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import SlideShowImage from "@/components/SlideShowImage.vue";
export default {
  components: {
    SlideShowImage
  },
  data: function() {
    return {
      showIframe: false
    };
  },
  methods: {
    openYoutube: function() {
      this.showIframe = true;
    },
    closeYoutube: function() {
      this.showIframe = false;
    }
  }
};
</script>

<style lang='scss'>
.branding {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.row {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: var(--gap-xl);
  padding-bottom: 0;

  > *:first-child {
    flex-basis: 0;
    flex-grow: 4;
  }
  > *:nth-child(2) {
    flex-basis: 0;
    flex-grow: 0.5;
  }
  > *:nth-child(3) {
    flex-basis: 0;
    flex-grow: 3;
  }
}
.award {
  background: var(--gray-1);
  padding-bottom: var(--gap-xl);
}
.award-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  > * {
    padding-bottom: var(--gap-sm);
    padding-right: var(--gap-sm);
  }
  h4 {
    grid-column: 1 / 3;
  }
  .title {
    color: var(--gray-2);
    margin-top: var(--gap-lg);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      border-top: 2px solid var(--dark);
      width: 30px;
      top: calc(-1.5 * var(--gap-sm));
    }
  }
}
.intro {
  h6 {
    color: var(--gray-2);
    padding-bottom: var(--gap-md);
  }
  img {
    height: auto;
  }
}
.detail {
  align-items: flex-end;
  position: relative;
  margin-bottom: var(--gap-xl);

  p {
    position: absolute;
    bottom: calc(-1 * var(--gap-lg));
    right: 0;
    width: 55%;
    background: var(--light);
    padding: var(--gap-lg);
    padding-right: var(--gap-xl);
    padding-top: var(--gap-xl);

    &::before {
      content: "";
      position: absolute;
      border-top: 2px solid var(--dark);
      width: 30px;
      top: calc(var(--gap-xl) - var(--gap-md));
    }
    &::after {
      content: "";
      position: absolute;
      border-top: 1px solid var(--dark);
      width: 200px;
      bottom: 0;
      right: 0;
      transform: rotate(-45deg);
    }
  }
}
.video-placeholder {
  position: relative;
  padding-bottom: 56%;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
  }

  button {
    cursor: pointer;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 88px;
    height: 88px;
    outline: none;
    border: none;
    border-radius: 50%;
    background: var(--gray-3);

    &::after {
      content: "";
      position: absolute;
      transform: translate(-40%, -50%);
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-left: 30px solid var(--light);
      border-right: 0px solid transparent;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
    }

    &:hover {
      background: var(--gray-1);
      &::after {
        border-left: 30px solid var(--gray-3);
        border-right: 0px solid transparent;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
      }
    }
  }
}
.overlay {
  z-index: 15;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  padding: var(--gap-xl);
  display: flex;
}
.video {
  position: relative;
  width: 100%;
  overflow: hidden;

  iframe {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    left: 0;
  }
}
hr {
  border-right: 1px solid var(--light);
  border-left: 0;
  height: 120px;
  margin-top: var(--gap-lg);
  width: 0;
}
.buttons {
  margin-top: calc(2 * var(--gap-xl));
  display: flex;
  width: 100%;

  button {
    flex-grow: 1;
    color: var(--light);
    padding: var(--gap-lg);
    font-size: var(--font-size-lg);
    outline: none;
    border: none;
    width: auto;
    border-top: 1px solid var(--gray-4);

    &:first-child {
      position: relative;
      background: var(--light);
      color: var(--gray-4);

      &::after {
        content: "↼";
        position: absolute;
        left: 30%;
        transform: scale(1.5);
      }
    }
    &:last-child {
      position: relative;
      background: var(--gray-4);
      color: var(--light);

      &::after {
        content: "⇀";
        position: absolute;
        right: 30%;
        transform: scale(1.5);
      }
    }
  }
}
</style>