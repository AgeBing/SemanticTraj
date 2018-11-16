import * as ForceEdgeBundling from './d3-ForceEdgeBundling.js';
import * as ShowMap from './showmap.js';
import L from 'leaflet';

// export function transform(data) {
//   const nodeData = {}, edgeData = [], pos2Id = new Map();
//   let nodeCnt = 0;
//   const edgeR = new Map();
//   for (let i = 0; i < data.length && i <= 200; ++ i) {
//     for (let j = 0; j < data[i].length && j <= 100; ++ j) {
//       const str = pos2Str(data[i][j]);
//       if (!pos2Id.has(str)) {
//         const point = ShowMap.map.latLngToLayerPoint(data[i][j]);
//         nodeData[''+nodeCnt] = {x: point.x, y: point.y};
//         pos2Id.set(str, nodeCnt ++);
//       }
//       if (j >= 1) {
//         const id = pos2Id.get(str),
//             str2 = pos2Str(data[i][j-1]),
//             id2 = pos2Id.get(str2);
//         if (edgeR.has(id + '-' + id2) || edgeR.has(id2 + '-' + id)) {
//           continue;
//         }
//         edgeR.set(id2 + '-' + id, 1);
//         edgeData.push({
//           source: '' + id2,
//           target: '' + id
//         });
//       }
//     }
//   }
//   // console.log('nodeData', nodeData);
//   // console.log('edgeData', edgeData);
//   const bundleRes = ForceEdgeBundling().nodes(nodeData).edges(edgeData)();
//   const res = [];
//   for (let i = 0; i < bundleRes.length; ++ i) {
//     res.push([]);
//     for (let j = 0; j < bundleRes[i].length; ++ j) {
//       const lPoint = ShowMap.map.layerPointToLatLng([bundleRes[i][j].x, bundleRes[i][j].y]);
//       res[i].push([lPoint.lat, lPoint.lng]);
//     }
//   }
//   console.log('path bundle done!')
//   // console.log(res)
//   return res;
// }

export function transform(data) {
  const nodeData = {}, edgeData = [], pos2Id = new Map();
  let nodeCnt = 0;
  const edgeR = new Map();
  for (let i = 0; i < data.length; ++ i) {
    for (let j = 0; j < data[i].length; ++ j) {
      const str = pos2Str(data[i][j]);
      if (!pos2Id.has(str)) {
        ShowMap.adjustSvg(data[i][j][0], data[i][j][1])
        // const point = ShowMap.map.latLngToLayerPoint(data[i][j]);
        nodeData[nodeCnt] = {x: data[i][j][0], y: data[i][j][1]};
        pos2Id.set(str, nodeCnt ++);
      }
      if (j >= 1) {
        const id = pos2Id.get(str),
            str2 = pos2Str(data[i][j-1]),
            id2 = pos2Id.get(str2);
        if (edgeR.has(id + '-' + id2) || edgeR.has(id2 + '-' + id)) {
          const cnt = edgeR.get(id2 + '-' + id);
          edgeR.set(id2 + '-' + id, cnt + 1);
          edgeR.set(id + '-' + id2, cnt + 1);
          continue;
        }
        edgeR.set(id2 + '-' + id, 1);
        edgeR.set(id + '-' + id2, 1);
        edgeData.push({
          source: id2,
          target: id
        });
      }
    }
  }
  const res = [];
  let maxV = 0, minV = 10000000000000;
  for (let i = 0; i < edgeData.length; ++ i) {
    res.push([]);
    const u = edgeData[i].source, v = edgeData[i].target;
    res[i].push({x: nodeData[u].x, y: nodeData[u].y});
    res[i].push({x: nodeData[v].x, y: nodeData[v].y});
    const cnt = edgeR.get(u + '-' + v);
    res[i].cnt = cnt;
    maxV = Math.max(maxV, cnt);
    minV = Math.min(minV, cnt);
  }
  res.maxCnt = maxV;
  res.minCnt = minV;
  console.log('path bundle done!')
  // console.log(res)
  return res;
}

function pos2Str(data) {
  return data[0] + '-' + data[1];
}