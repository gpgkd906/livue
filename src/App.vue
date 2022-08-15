<script setup lang="ts">
  import Top from './views/Top.vue'
  import Meet from './views/Meet.vue'
  // import Peer from './views/Peer.vue'
  import { meetingId } from './store'
</script>
<template>
  <!-- <peer></peer> -->
  <div v-show="!meetingId">
    <top></top>
  </div>
  <div v-show="meetingId">
    <meet></meet>
  </div>
</template>

<style scoped>
</style>
