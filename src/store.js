import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI} from "@/axios-app";

Vue.use(Vuex)
export default new Vuex.Store({
    data() {
        return {
            state: {
                accessToken: localStorage.getItem('accessToken'),
                refreshToken: localStorage.getItem('refreshToken'),
            }
        }
    },
    mutations: {
        updateStorage (state, { access, refresh }) {
            state.accessToken = access
            state.refreshToken = refresh
        },
        destroyToken (state) {
            state.accessToken = null
            state.refreshToken = null
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
            console.log(localStorage.getItem('accessToken'))
            return new Promise((resolve, reject) => {
                getAPI.post('/api-token/', {
                    username: usercredentials.username,
                    password: usercredentials.password
                })
                    .then(response => {
                        context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh })
                        localStorage.setItem('accessToken', response.data.access)
                        localStorage.setItem('refreshToken', response.data.refresh)
                        resolve()
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    }
})