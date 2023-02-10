<template>
  <div>
    <button @click="increment">{{ value }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "hello",
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    increment() {
      this.value += 1;
    },
  },
});
</script>
