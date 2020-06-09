import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    comments: [],
    myBlogs: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },

    setBlogs(state, blogs) {
      state.blogs = blogs
    },

    setActiveBlog(state, blog) {
      state.activeBlog = blog;
    },

    setMyBlogs(state, blogs) {
      state.myBlogs = blogs
    },

    addBlog(state, data) {
      state.blogs.push(data)
    },

    setComments(state, comments){
      state.comments = comments;
    }

  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({ commit, dispatch}) {
      try {
        let res = await api.get("blogs")
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getMyBlogs({ commit, dispatch}) {
      try {
        let res = await api.get("profile/blogs")
        commit("setMyBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    // async getComments({ commit, dispatch }, id) {
    //   try {
        
    //   }
    // },

    async getBlogDetails({ commit, dispatch }, id) {
      try {
        let res = await api.get("blogs/" + id);
        commit("setActiveBlog", res.data);
      }
      catch (error){
        console.error(error)
      }
    },

    async createBlog({commit, dispatch}, newBlog) {
      try{
      let res = await api.post('blogs', newBlog);
      dispatch("getAllBlogs")
      } catch (error) {
        console.error(error);
      }
    },

    async deleteBlog({ commit, dispatch }, _id) {
      try {
        let res = await api.delete("blogs/" + _id);
        dispatch("getAllBlogs");
      } catch (error) {
        console.error(error)
      }
    },

    async editBlog({ commit, dispatch}, blog) {
      try {
        let res = await api.put("blogs/" + blog.id, blog.editBlog)
        commit('addBlog', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
});
