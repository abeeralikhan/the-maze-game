const { World, Engine, Runner, Render, Bodies } = Matter;

const WIDTH = 600;
const HEIGHT = 600;
const WALL_SIZE = 30;
const CELLS = 3;

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

// Walls
const walls = [
  Bodies.rectangle(0, HEIGHT / 2, WALL_SIZE, HEIGHT, { isStatic: true }),
  Bodies.rectangle(WIDTH, HEIGHT / 2, WALL_SIZE, HEIGHT, { isStatic: true }),
  Bodies.rectangle(WIDTH / 2, 0, WIDTH, WALL_SIZE, { isStatic: true }),
  Bodies.rectangle(WIDTH / 2, HEIGHT, WIDTH, WALL_SIZE, { isStatic: true }),
];

walls.forEach((wall) => World.add(world, wall));

// Maze generation

const grid = Array(CELLS)
  .fill(null)
  .map(() => Array(CELLS).fill(false));

const verticals = Array(CELLS)
  .fill(null)
  .map(() => Array(CELLS - 1).fill(false));

const horizontals = Array(CELLS - 1)
  .fill(null)
  .map(() => Array(CELLS).fill(false));

console.log(grid);
console.log(verticals);
console.log(horizontals);
