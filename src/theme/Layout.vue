<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <a href="/">
          <img src="http://bit.ly/vue-img" alt="Vue SPA" />
        </a>
      </div>
    </nav>
    <section class="main-section section"></section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          Follow us on <a href="https://twitter.com/bstavroulakis" target="_blank">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'PWA Stats', content: 'A community-driven list of stats and news related to...' },
        { id: 2, title: 'PWA Stats', content: 'A community-driven list of stats and news related to...' },
        { id: 3, title: 'PWA Stats', content: 'A community-driven list of stats and news related to...' },
        { id: 4, title: 'PWA Stats', content: 'A community-driven list of stats and news related to...' },
        { id: 5, title: 'PWA Stats', content: 'A community-driven list of stats and news related to...' },
        { id: 6, title: 'PWA Stats', content: 'A community-driven list of stats and news related to...' }
      ]
    };
  }
};
</script>
<style lang="scss">
@import '~bulma';
</style>
