<template>
<div class="container blog-details h-100"
  <div class="row d-flex justify-content-center">
    <div class="col-6">
  <div class="card mt-5">
  <h3 class="ml-2 mt-2"> {{ blog.title }} </h3>
    <p class="ml-2" > {{ blog.body }} </p>
    <p class="text-right mr-2 mb-0"> {{ blog.creatorEmail }} </p>
    <div class="text-right mr-2 mt-1">
    <button type="button" class="btn btn-outline-danger" v-if="isCreator" @click="deleteBlog(blog.id)" >Delete Blog</button>
    <p class="underline" @click="showForm=!showForm" v-if="isCreator">Edit Blog</p>
    </div>
      <form class="form-inline" @submit.prevent="editBlog" v-if="showForm ">
                <div class="form-group ml-2">
                    <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
                        placeholder="Edit Title..." v-model="editBlogInfo.title" required />
                </div>
                <div class="form-group ml-2">
                    <textarea type="text" class="form-control mt-1 mb-1" name="body" id="body" aria-describedby="body"
                        placeholder="Edit Body..." v-model="editBlogInfo.body" required  rows="6" cols="85"/>
                    </div>
                    <div>
                    <button @click="editBlog" class="btn btn-outline-primary ml-2">Submit Changes</button>
                    </div>
                </form>
    <!-- <router-link> -->
    <p class="underline ml-2">Show Comments</p>
    <!-- </router-link> -->
  </div>
    </div>
  </div>
</div>
</template>

<script>
import Blogs from "@/components/BlogComponent.vue";
export default {
  
  name: "blog-details",
  mounted() { 
    this.$store.dispatch("getBlogDetails", this.$route.params.id);
  },
  data(){
    return {
      editBlogInfo: {},
      showForm: false
    }
  },

  methods: {
      deleteBlog(){
      this.$store.dispatch("deleteBlog", this.blog.id);
    },
     editBlog() {
        let blogInfo = {
        id: this.$route.params.id,
        editBlog: this.editBlogInfo
          }
        this.$store.dispatch("editBlog", blogInfo),
        this.editBlogInfo = { id: this.$route.params.id }
            },
 
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog.blog;
    },
    isCreator() {
      return this.$store.state.profile.email == this.blog.creatorEmail;
    },
  },
}

</script>