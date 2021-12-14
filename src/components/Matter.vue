<template>
  <div class="content">
    <div id="testLabel">Testing</div>
    <canvas id="drawhere"></canvas>
    debug:{{JSON.stringify(debug)}}
  </div>
</template>

<script>
import Matter from "matter-js";
import decomp from "poly-decomp";
export default {
  data: function() {
    return {
      debug: null,
      canvasProp: {
        wallWidth: 1
      }
    };
  },
  computed: {
    myObjStyle(top, left) {
      return `position:absolute;top:${top};left:${left}`;
    }
  },
  mounted() {
    // module aliases
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
      canvas: document.querySelector("#drawhere"),
      engine: engine,
      options: {
        background: "transparent",
        wireframes: false // <-- important
      }
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  }
};
</script>


<style lang='scss'>
#drawhere {
  outline: 1px solid var(--dark);
}
</style>