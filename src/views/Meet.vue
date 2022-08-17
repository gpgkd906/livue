<script setup lang="ts">
import { state, localStream, remoteStream } from '../store'
</script>

<template>
  Meeting ID: <strong>{{ state.meetingId }}</strong>
  <p></p>
  <div class="camera-box">
    <video :srcObject="localStream" autoplay muted></video>
    <video v-show="remoteStream" :srcObject="remoteStream" autoplay></video>
  </div>
</template>

<style scoped>
.camera-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
video {
  width: 100%;
  min-width: 30vw;
  border: 1px solid #000;
}
</style>
