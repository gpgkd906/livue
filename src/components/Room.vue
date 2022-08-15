<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flexChild" id="camera-container">
    <div class="camera-box">
      <video id="received_video" autoplay></video>
      <video id="local_video" autoplay muted></video>
      <button id="hangup-button" onclick="hangUpCall();" disabled>
        Hang Up
      </button>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
