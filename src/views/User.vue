<template>
    <div>
        <p>$route.params.id : {{$route.params.id}}</p>
        <p>$route.query.id : {{$route.query.id}}</p>

        <router-view to="/profile"></router-view>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Route } from "vue-router";

@Component
export default class User extends Vue {
  created() {
    console.log("created");
    console.log(this.$route.params.id);
    console.log(this.$route.query.id);
  }
  destroyed() {
    console.log("destroyed");
    console.log(this.$route.params.id);
    console.log(this.$route.query.id);
  }
  beforeRouteEnter(to: Route, from: Route, next: Function) {
    console.log("beforeRouteEnter", from, "=>", to);
    next();
  }
  beforeRouteLeave(to: Route, from: Route, next: Function) {
    console.log("beforeRouteLeave", from, "=>", to);
    next();
  }
  beforeRouteUpdate(to: Route, from: Route, next: Function) {
    console.log("beforeRouteUpdate", from, "=>", to);
    next();
  }
}
</script>

