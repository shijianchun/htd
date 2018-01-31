/**
 * Created by shijianchun 2018-01-16 17:04:48
 */
import Vue from 'vue'

export function MenuService() {
	return Vue.resource('static/mock/menu.json')
}
