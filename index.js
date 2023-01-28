const { World, Engine, Runner, Render, Bodies, Mouse, MouseConstraint } =
  Matter;

const WIDTH = 800;
const HEIGHT = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine,
  options: {
    wireframes: false,
    width: WIDTH,
    height: HEIGHT,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

// Walls
const walls = [
  Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
];

walls.forEach((wall) => World.add(world, wall));

// Random Shapes
for (let i = 0; i <= 30; i++) {
  if (Math.random() > 0.5) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * WIDTH, Math.random() * HEIGHT, 50, 50)
    );
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * WIDTH, Math.random() * HEIGHT, 35)
    );
  }
}
