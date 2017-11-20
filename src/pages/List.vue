<template>
  <section class="section">
    <div class="container">
      <div class="title">
        <input type="text" v-model="postText"> <button @click="addPost()">click</button>
      </div>
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
        postText: '',
      };
    },
    created() {
      this.$http.get('http://localhost:9000/posts').then((response) => {
        this.posts = response.data.posts;
      });
    },
    sockets:{
      connect: function(){
        console.log('socket connected');
      },
      post: function(val){
        this.posts.unshift({
          title: 'ANONIMO',
          content: val,
        });
      },
    },
    methods: {
      addPost() {

        this.$socket.emit('post', this.postText);
        this.postText = '';
      },
    },
  };
</script>

<style>
  .margin-card {
    margin-bottom: 20px;
  }
</style>
