<template>
    <div>
        <p>$route.params.id : {{$route.params.id}}</p>
        <p>$route.query.id : {{$route.query.id}}</p>

        <ul>
            <li><button @click="click1">리터럴 string 이동</button></li>
            <li><button @click="click2">object 이동 - path</button></li>
            <li><button @click="click3">object 이동 - name</button></li>
            <li><button @click="click4">object 이동 - path 로 params 까지</button></li>
            <li><button @click="click5">object 이동 - path 와 params 따로</button></li>
            <li><button @click="click6">object 이동 - name 과 params 따로</button></li>
            <li><router-link :to="{ name: 'user', params: { id: 'mark' }}">User Mark</router-link></li>
        </ul>

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

  click1() {
    this.$router.push("/");
  }

  click2() {
    this.$router.push({ path: "/about" });
  }

  click3() {
    this.$router.push({ name: "about" });
  }

  click4() {
    this.$router.push({ path: "/user/mark" });
  }

  click5() {
    this.$router.push({ path: "/user", params: { id: "mark" } });
  }

  click6() {
    this.$router.push({ name: "user", params: { id: "mark" } });
  }
}
</script>

