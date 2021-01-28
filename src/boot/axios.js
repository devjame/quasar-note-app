import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const api = axios.create({baseURL: 'http://127.0.0.1:5000'})

Vue.prototype.$api = api

export { axios, api}