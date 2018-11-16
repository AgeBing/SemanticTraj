import * as HoneyComb from './honeycomb.js';

export const hexagonPath = new Map();

export function getHexagonPath() {
  const queue = [],
      hexagonD = HoneyComb.hexagonD,
      r = HoneyComb.r,
      x = HoneyComb.centerX,
      y = HoneyComb.centerY,
      center = HoneyComb.quad.find(x, y),
      start = {
        identify: center.identify, 
        id: center.id,
        x: center.x,
        y: center.y,
        path: '',
      };
  hexagonPath.set(center.id, {
    path: '',
    x: center.x,
    y: center.y
  })
  const vis = new Map();
  vis.set(center.id, 1);
  queue.push(start);
  while(queue.length > 0) {
    const now = queue.shift();
    for (let i = 0; i < 6; i ++) {
      const nx = now.x + hexagonD[i][0] * r,
          ny = now.y + hexagonD[i][1] * r,
          next = HoneyComb.quad.find(nx, ny);
      // console.log(next, ' ************ ')
      if (vis.get(next.id)) {
        continue;
      }
      let nextPath;
      if (checkIdentify(now.identify, next.identify) == 2) {
        nextPath = now.path + ',' + i;
      } else if (checkIdentify(now.identify, next.identify) == 1) {
        nextPath = now.path + `[${i}]` + i;
      } else {
        nextPath = now.path + `{${i}}` + i;
      }
      queue.push({
        path: nextPath,
        x: nx,
        y: ny,
        identify: next.identify,
        id: next.id
      });
      vis.set(next.id, 1);
      hexagonPath.set(next.id, {
        path: nextPath,
        x: nx,
        y: ny,
      });
    }
  }
}

function checkIdentify(a, b) {
  const i0 = a.split('@'),
      i1 = b.split('@');
  if (i0[0] == i1[0] && i0[1] == i1[1]) {
    return 2;
  } else if (i0[0] == i1[0]) {
    return 1;
  } else {
    return 0;
  }
}