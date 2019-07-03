function spiral(n) {
  let spiral = Array(n)
    .fill(null)
    .map(row => Array(n).fill(null));
  let number = 1,
    row = 0,
    column = 0;
  const directions = {
    right: "right",
    left: "left",
    up: "up",
    down: "down"
  };
  let direction = directions.right;
  const visitedLocations = new Set();
  while (number <= n * n) {
    spiral[row][column] = number;
    visitedLocations.add(row.toString() + column.toString());
    switch (direction) {
      case directions.right: {
        if (
          column >= n - 1 ||
          visitedLocations.has(row.toString() + (column + 1).toString())
        ) {
          direction = directions.down;
          row++;
        } else {
          column++;
        }
        break;
      }
      case directions.down: {
        if (
          row >= n - 1 ||
          visitedLocations.has((row + 1).toString() + column.toString())
        ) {
          direction = directions.left;
          column--;
        } else {
          row++;
        }
        break;
      }
      case directions.left: {
        if (
          column <= 0 ||
          visitedLocations.has(row.toString() + (column - 1).toString())
        ) {
          direction = directions.up;
          row--;
        } else {
          column--;
        }
        break;
      }
      case directions.up: {
        if (visitedLocations.has((row - 1).toString() + column.toString())) {
          direction = "right";
          column++;
        } else {
          row--;
        }
        break;
      }
    }
    number++;
  }
  return spiral;
}

console.log(spiral(4));
