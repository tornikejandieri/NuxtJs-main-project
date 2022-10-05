<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=2000"
      title="Hello There!"
      previewText="This is my first post!"
    />
    <PostPreview
      id="2"
      thumbnail="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=2000"
      title="Hello There! for the second time"
      previewText="This is my second post!"
    />
    <PostPreview
      id="3"
      thumbnail="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=2000"
      title="Hi! for the third time "
      previewText="This is my third post!"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview.vue";
export default {
  components: { PostPreview },
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
