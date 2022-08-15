<script setup lang="ts">
import { state, localStream, remoteStream } from '../store'
</script>

<template>
  <div class="camera-box">
    会議ID: {{ state.meetingId }}
    <video :srcObject="localStream" autoplay muted></video>
    <video v-show="remoteStream" :srcObject="remoteStream" autoplay></video>
  </div>
</template>

<style scoped>
.camera-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
video {
  border: 1px solid #000;
}
</style>
