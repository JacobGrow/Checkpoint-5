<template>
<div class="container blog-details"
  <div class="row">
    <div class="col-8">
    <h4> {{ blog.title }} </h4>
    <h5> {{ blog.body }} </h5>
    <p> {{ blog.creatorEmail }} </p>
    </div>
  </div>
  </div>
</template>

<script>
import Blog from "@/components/BlogComponent.vue";
export default {
  name: "blog-details",
  mounted() {
    this.$store.dispatch("getBlogDetails", this.$route.params.id);
  },
  data() {
    return {
      editBlog: {
        id: this.$route.params.id
      }
    }
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog.blog;
    }
  },
  componenets: {
    Blogs,
  }
}