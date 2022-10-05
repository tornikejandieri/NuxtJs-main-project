<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
export default {
  components: { AdminPostForm },
  data() {
    return {
      loadedPost: {
        author: "Tornike",
        title: "My awesome Post",
        content: "Super Amazing, thanks for that!",
        thumbnailLink:
          "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=2000",
      },
    };
  },
  layout: "admin",
};
</script>
