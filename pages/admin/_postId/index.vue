<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
export default {
  components: { AdminPostForm },
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blog-ea935-default-rtdb.europe-west1.firebasedatabase.app/posts/-NDhz3wjaZp-VgvGRS2w" +
          context.params.id +
          ".json"
      )
      .then((res) => {
        return {
          loadedPost: res.data,
        };
      })
      .catch((e) => context.error(e));
  },
  layout: "admin",
  methods: {
    onSubmitted(editedPost) {
      axios
        .post(
          "https://nuxt-blog-ea935-default-rtdb.europe-west1.firebasedatabase.app/posts/-NDhz3wjaZp-VgvGRS2w" +
            this.$route.params.postId +
            ".json",
          editedPost
        )
        .then((res) => {
          this.$router.push("/admin");
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
