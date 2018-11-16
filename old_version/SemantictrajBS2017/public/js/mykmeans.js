import * as DataManager from './datamanager.js';
import * as HoneyComb from './honeycomb.js';
import kMeans from 'kmeans-js';
export let K = 15,
    p0 = 1,
    p1 = 2.5,
    p2 = 5,
    documents = [],
    kmDocuments = [];

export let KMeans;

export function updateRawDocuments(pattern) {
  documents.length = [];
  let cnt = 0;
  let mst = DataManager.maxStopTime;
  DataManager.reverseMap.clear();
  for (let [pat, traj] of pattern) {
    let data = [];
    let tmp = pat.split(",").map(o => parseInt(o));
    let num = 0;
    for (let i = 0; i < tmp.length; i ++) {
      if (tmp[i] < 0) {
        num ++;
      }
    }
    traj.data.forEach(node => {
      if (node.hasOwnProperty("stoppoint")) {
        num --;
        if (data.length != 0) {
          let a = tmp[tmp.indexOf(parseInt(node.site)*-1)-1];
          data.push(a > 0 ? a : 0);
        }
        let time = new Date(node.time);
        data.push(time.getHours()/24 * p0);
        data.push(node.stopTime/mst.get(node.site) * p1);
        const topics = DataManager.siteTopic.get(node.site);
        const topicArray = [];
        for (let o of topics) {
          topicArray[DataManager.topic2WordIndex.get(o.topic)] = o.val;
        }
        for (let d of topicArray) if (d) data.push(d * p2);
      }
    });
    if (num == 0) {
      DataManager.reverseMap.set(cnt, pat);
      cnt ++;
      documents.push(data);
    } 
  }
  // console.log('documents: ', documents);
}

function getKMDocuments() {
  let maxL = 0;
  kmDocuments.length = 0;
  documents.forEach((o, i) => {
    maxL = Math.max(maxL, o.length);
  })
  for (let i = 0;i < documents.length; i ++) {
    kmDocuments.push([]);
    for (let j = 0; j < documents[i].length; j ++) {
      kmDocuments[i].push(documents[i][j]);
    }
    while(kmDocuments[i].length < maxL) {
      kmDocuments[i].push(0);
    }
  }
}

export function clusterDataByKMeans() {
  getKMDocuments();
  if (kmDocuments.length == 0) {
    console.log('documents length:', 0);
    return ;
  }
  KMeans = useKMeans(K);
  HoneyComb.showClusters()
}

function useKMeans(K) {
  let km = new kMeans({
    K: K
  });
  km.cluster(kmDocuments);
  while (km.step()) {
    km.findClosestCentroids();
    km.moveCentroids();
    if(km.hasConverged()) break;
  }
  console.log("Kmeans result", km.centroids, km.clusters);
  return km;
}