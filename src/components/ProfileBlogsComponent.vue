<template>
  <div class="profile-blogs row d-flex justify-content-center">
    <div class="col-6">
      <div class="card mt-3">
        <h4 class="text-left ml-2 mt-2"> {{ blog.title }}</h4>
        <p class="text-left ml-2 mt-2 mr-3"> {{ blog.body }}</p>
        <p class="text-right mr-3 mt-0 mb-0"> {{ blog.creatorEmail }} </p>
        <p class="underline text-left ml-2"> Show Comments </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-blogs",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: ["blog"]
};
</script>