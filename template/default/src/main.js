import Vue from 'vue'
<%_ if(options.elementUI) { _%>
import ElementUI from 'ElementUI'
Vue.use(ElementUI)
<%_ } _%>

<%_ if(options.vuex) { _%>
import Vuex from 'vuex'
Vue.use(Vuex)
<%_ } _%>