<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
import axios from "axios";
export default {
  components: { AdminPostForm },
  layout: "admin",
  methods: {
    onSubmitted(postData) {
      axios
        .post(
          "https://nuxt-blog-ea935-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
          { ...postData, updatedDate: new Date() }
        )
        .then((result) => console.log(result))
        .cath((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
