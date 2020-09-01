<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-10">
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/area">Area</router-link> |
            <router-link to="/hypotenuse">Hypotenuse</router-link> |
            <router-link to="/seconds">Seconds</router-link> |
            <router-link to="/recursion">Recursion</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  margin-top:60px
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
