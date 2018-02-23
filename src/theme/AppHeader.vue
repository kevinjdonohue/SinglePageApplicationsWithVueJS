<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <router-link to="/">
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item is-tab" to="/">Home</router-link>
        <router-link class="navbar-item is-tab" to="/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>
