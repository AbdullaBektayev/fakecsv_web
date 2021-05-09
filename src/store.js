import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from "@/axios-app";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
        username: localStorage.getItem('username'),
        hours: localStorage.getItem('hours')
    },
    mutations: {
        updateStorage (state, { access, refresh, username }) {
            state.accessToken = access
            state.refreshToken = refresh
            state.username = username
            state.hours = new Date().getHours().toString()
            localStorage.setItem('accessToken', access)
            localStorage.setItem('refreshToken', refresh)
            localStorage.setItem('username', username)
            localStorage.setItem('hours', state.hours)
        },
        destroyToken (state) {
            state.accessToken = null
            state.refreshToken = null
            state.username = null
            state.hours = '10000'
            localStorage.setItem('accessToken', null)
            localStorage.setItem('refreshToken', null)
            localStorage.setItem('username', null)
        }
    },
    getters: {
        loggedIn (state) {
            return state.accessToken != 'null'
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
                    password: usercredentials.password,
                })
                    .then(response => {
                        context.commit('updateStorage', {
                            access: response.data.access,
                            refresh: response.data.refresh,
                            username: usercredentials.username,
                        })
                        resolve()
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    }
})