<template>
<div class="container">
  <div class="row">
    <div class="col text-center">
      <h1>Welcome</h1>
    </div>
  </div>
  <div class="row mt-2 d-flex justify-content-center">
    <div class="col-6"
    <div class="card w-50 card-height p-2" v-if="$auth.isAuthenticated">
    <h3 class="text-center">Enter your blog here!</h3>
      <form @submit.prevent="createBlog">
    <input type="text" placeholder="Title..." class="mb-2 mt-4 mw-75 form-control" v-model="newBlog.title"><br>
    <textarea placeholder="Enter Your Blog Here..." class="form-control m-0 text-area" v-model="newBlog.body">
    </textarea>
    <div class="row">
    <div class="col text-center">
    <button type="submit" class="btn btn-outline-success w-25 text-center mt-5">Submit</button>
    </div>
  </div>
    </form>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
    <blog v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
 
</div> 
</template>

<script>
import Blog from "@/components/BlogComponent.vue"
export default {
  name: "home",

  mounted() {
    this.$store.dispatch("getAllBlogs")
  },
  data() {
    return {
    newBlog: {},
    }
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", {...this.newBlog });
      this.newBlog = {};
    }
  },
  components: {
    Blog,
  },
};
</script>

