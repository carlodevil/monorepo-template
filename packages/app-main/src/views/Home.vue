<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br><btn>asd</btn>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import GenericBtn from 'button-generic';

export default {
  name: 'Home',
  components: {
    btn: GenericBtn,
  },
};
</script>
