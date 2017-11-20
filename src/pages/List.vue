<template>
  <section class="section">
    <div class="container">
      <div class="card margin-card" v-for="post in posts">
        <header class="card-header">
          <p class="card-header-title">
            {{post.title}}
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            {{post.content}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        posts: [],
      };
    },
    created() {
      this.$http.get('http://localhost:9000/posts').then((response) => {
        this.posts = response.data.posts;
      });
    },
  };
</script>

<style>
  .margin-card {
    margin-bottom: 20px;
  }
</style>
