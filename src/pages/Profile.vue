<template>
<div class="container">
  <div class="row">
    <div class="col">
   <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    </div>
  </div>
  </div>
  <div class="row">
    <div class="col text-center">
      <h2>Here are your blogs</h2>
      <blog v-for="blog in myBlogs" :key="blog.id" :blog="blog"/>
    </div>
  </div>
</div>
</template>

<script>
import blog from "@/components/ProfileBlogsComponent.vue"
export default {
  name: "Profile",
  mounted(){
    this.$store.dispatch("getMyBlogs");
},
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    myBlogs() {
      return this.$store.state.myBlogs;
  }
},
    components: {
      blog,
}
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
