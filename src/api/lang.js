/**
 * Created by shijianchun 2018-01-19 17:45:05
 */
import Vue from 'vue'

import langsJson from '../../static/langs.json'

export class LangService {

    constructor() {
        this.langs = langsJson
        this.DEFAULT_LANG = this.langs[0].id

        // setTimeout(() => {
        // this.getLocales().get().then(res => {
        // var doc = yaml.load(res.body)
        // console.log(doc)
        // })
        // })
    }

    getJson(lang) {
        return Vue.resource(`static/locale/${lang}.json`)
    }

    setDefaultLang(lang = this.getStorage()) {
        this.saveStorage(lang)
        this.getJson(lang).get().then(res => {

            Vue.i18n.add(lang, res.body)
            Vue.i18n.set(lang)
        })
    }

    getDefaultLangNme(lang = this.getStorage()) {
        return this.langs.find(item => {
            return item.id == lang
        }).name
    }

    saveStorage(lang) {
        window.localStorage.lang = lang
    }

    getStorage() {
        return window.localStorage.lang || this.DEFAULT_LANG
    }

}