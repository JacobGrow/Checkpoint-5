<template>
  <div class="col-8 blog-component">
    <div class="card mt-2">
      <div class="card-body">
        <h5 class="card-title">{{ blog.title }}</h5>
         <router-link :to="{ name: 'BlogDetails', params: { id: blog.id }}">
        <p class="pointer mb-0 underline">Show More...</p>
        </router-link>
         <p class="text-right mb-0"> Created by: {{blog.creatorEmail}}
        </p>
        <div v-if="isCreator">
        <button type="button" class="btn btn-outline-danger" @click="deleteBlog(blog.id)" >Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: "blog-component",
 props: ["blog"],
  data() {
    return {};
  },
  methods: {
    deleteBlog(){
      this.$store.dispatch("deleteBlog", this.blog.id);
    }
  },
  computed: {
    isCreator() {
      return 
        this.$store.state.profile.email == this.blog.creatorEmail;
    },
},
  components: {
  }
}
</script>

<style>
</style>