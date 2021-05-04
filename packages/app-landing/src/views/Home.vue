<template>
  <div class="home">
    <comp>Welcome to your Landing Page Application!</comp>
  </div>
</template>

<script>
// @ is an alias to /src
import { TestComponent } from '@monorepo-template/ui';

export default {
  name: 'Home',
  components: {
    comp: TestComponent,
  },
};
</script>
