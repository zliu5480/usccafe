import Vue from 'vue'
import Vuex from 'vuex'
import {getToken, removeToken, setToken} from "@/utils/auth";
import {getInfo, logout,login} from "@/api/login";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operation: '',
    token: getToken(),
    user: {},
    roles: []
  },
  mutations: {
    SET_OP: (state, payload) => {
      state.operation = payload
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // Login in
    Login({ commit }, userInfo) {
      const rememberMe = userInfo.rememberMe
      return new Promise((resolve, reject) => {
        login(userInfo.username, userInfo.password, userInfo.code, userInfo.uuid).then(res => {
          setToken(res.data.token, rememberMe)
          commit('SET_TOKEN', res.data.token)
          setUserInfo(res.data.user, commit)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          setUserInfo(res.data, commit)
          console.log('执行完了')
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(res => {
          logOut(commit)
          resolve()
        }).catch(error => {
          logOut(commit)
          reject(error)
        })
      })
    }
  },
  getters: {
  }

})


const logOut = (commit) => {
  commit('SET_TOKEN', '')
  commit('SET_ROLES', [])
  removeToken()
}

const setUserInfo = (user, commit) => {
  if (user.roles.length === 0) {
    commit('SET_ROLES', ['ROLE_SYSTEM_DEFAULT'])
  } else {
    commit('SET_ROLES', user.roles)
  }
  commit('SET_USER', user.user)
}
