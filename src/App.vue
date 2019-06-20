<template lang="pug">
  v-app(dark)
    router-view
</template>


<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="stylus">
a {
  text-decoration: none;
  color: white;
}
</style>

