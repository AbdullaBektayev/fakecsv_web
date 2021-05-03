import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from "@/axios-app";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
    },
    mutations: {
        updateStorage (state, { access, refresh }) {
            state.accessToken = access
            state.refreshToken = refresh
            localStorage.setItem('accessToken', access)
            localStorage.setItem('refreshToken', refresh)
        },
        destroyToken (state) {
            state.accessToken = null
            state.refreshToken = null
            localStorage.setItem('accessToken', null)
            localStorage.setItem('refreshToken', null)
        }
    },
    getters: {
        loggedIn (state) {
            return state.accessToken != null
        }
    },
    actions: {
        userLogout (context) {
            if (context.getters.loggedIn) {
                context.commit('destroyToken')
            }
        },
        userLogin (context, usercredentials) {
            return new Promise((resolve, reject) => {
                getAPI.post('/api-token/', {
                    username: usercredentials.username,
                    password: usercredentials.password
                })
                    .then(response => {
                        context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh })
                        resolve()
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    }
})