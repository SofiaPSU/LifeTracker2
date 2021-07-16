import axios from "axios"

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl
    this.token = null
  }

  setToken(token) {
    this.token = token
  }

  async request({ endpoint, method, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`
    console.debug("API Call:", endpoint, data, method)
    const params = method === `GET` ? data : {}
    const headers = {
      "Content-Type": "application/json",
    }
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`
    }

    try {
      const res = await axios({ url, method, data, params, headers })
      return { data: res.data, error: null, message: null }
    } catch (error) {
      console.error("APIclient.makeRequest.error", error.response)
      const message = error?.response?.data?.error?.message
      return { data: null, error: message ?? String(error) }
    }
  }

 
  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` })
  }

  async signupUser(credentials) {
    return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
  }

  async loginUser(credentials) {
    return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
  }

  async createGiving(giving){
    return await this.request({ endpoint:`give`, method: `POST`, data: giving })
  }

  async logoutUser() {
    this.setToken(null)
    localStorage.setItem("beauty_token", "")
  }
}

export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001")