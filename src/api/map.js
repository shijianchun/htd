/**
 * Created by shijianchun 2018-02-01 19:41:18
 */
import Vue from 'vue'

export function MapService() {
	return Vue.resource('static/mock/map.json')
}

export function GeoCoordMapService() {
	return Vue.resource('static/mock/geoCoordMap.json')
}