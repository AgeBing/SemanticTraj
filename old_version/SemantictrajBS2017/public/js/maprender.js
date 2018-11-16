import L from 'leaflet';
import './leaflet-heat.js';
import * as DataManager from './datamanager.js';
import * as ShowMap from './showmap.js';
import * as BundlePath from './bundlepath.js';
import * as d3 from 'd3';
import TrajPath from './trajpath.js';

export const TRAJ = {
	color: '#999999',
	weight: 0.8,
	opacity:0.2,
	className: 'traj'
};

export const STOPPOINT = {
	max: 0.5,
	blur: 18,
	radius: 11,
	className: 'stop'
};

export let isTrajShow = true;
export let isStopShow = true;
export function setTrajShow(fl) {
	isTrajShow = fl;
}
export function setStopShow(fl) {
	isStopShow = fl;
}

export const trajs = new TrajPath(ShowMap.g.append('g'));
// export const trajs = L.polyline([], TRAJ).addTo(ShowMap.map);
export const stops = L.heatLayer([], STOPPOINT).addTo(ShowMap.map);
export const clusterTraj = L.polyline([], TRAJ).addTo(ShowMap.map);
export const clusterStop = L.heatLayer([], STOPPOINT).addTo(ShowMap.map);
export let clickedTraj = [], clickedStop = [];
// export const matrixTraj = L.polyline([], {
// 		color: 'white', weight: 0.4, opacity: 0.9, className: 'matrixTraj'}).addTo(ShowMap.map);
// export const groupTraj = L.polyline([], {
//     color: 'white', weight: 0.4, opacity: 0.9, className: 'groupTraj'}).addTo(ShowMap.map);
export const matrixTraj = new TrajPath(ShowMap.g.append('g'), {
		color: '#ef8a62', weight: 0.8, opacity: 0.2, className: 'matrixTraj'});
export const groupTraj = new TrajPath(ShowMap.g.append('g'), {
    color: '#ef8a62', weight: 1.7, opacity: 0.9, className: 'groupTraj'});
export const singleTraj = new TrajPath(ShowMap.g.append('g'), {
    color: '#ef8a62', weight: 1.7, opacity: 0.7, className: 'groupTraj'});

export function reRendering() {
	trajrender();
	stoprender();
}

function trajrender() {
	if (!isTrajShow) {
		return;
	}
	const data = [];
	const drawTraj = DataManager.drawTraj;
	const sites = DataManager.sites;
	for (let i = 0; i < drawTraj.length; i ++) {
		if (drawTraj[i].filter) {
			continue;
		}
		const latLngs = [];
		for (let site of drawTraj[i].traj) {
			if (!sites.has(site.site * 1)) {
				continue;
			}
			const thisSite = sites.get(site.site * 1);
			latLngs.push([thisSite.latitude, thisSite.longitude]);
		}
		if (latLngs.length > 1) {
			data.push(latLngs);
		}
	}
	// if (data.length > 1000) {
	// 	data.length = 1000;
	// }
	// trajs.setLatLngs(BundlePath.transform(data));
	trajs.setLatLngs(data);
}

function stoprender() {
	if (!isStopShow) {
		return;
	}
	const data = [];
	const drawTraj = DataManager.drawTraj;
	const sites = DataManager.sites;
	for (let i = 0; i < drawTraj.length; i ++) {
		if (drawTraj[i].filter) {
			continue;
		}
		for (let site of drawTraj[i].traj) {
			if (!sites.has(site.site * 1)) {
				continue;
			}
			const thisSite = sites.get(site.site * 1);
			data.push([thisSite.latitude, thisSite.longitude]);
		}
	}
	if (data.length > 1000) {
		data.length = 1000;
	}
	stops.setLatLngs(data);
}