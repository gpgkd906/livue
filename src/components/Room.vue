<script setup lang="ts">
import { ref } from 'vue'
import { Peer } from "peerjs";

const received_video: Ref<HTMLVideoElement> = ref(undefined)
const local_video:Ref<HTMLVideoElement> = ref(undefined)
const hangup:Ref<HTMLButtonElement> = ref(undefined)

const peer = new Peer("10000")
const navigator = window.navigator as any;
const getUserMedia = navigator.getUserMedia ?? navigator.webkitGetUserMedia ?? navigator.mozGetUserMedia;

const call = () => {
  getUserMedia({
    video: true, 
    audio: true
  },
  function(stream: MediaStream) {
    local_video.value.srcObject = stream
    const call = peer.call("10001", stream)
    call.on("stream", function(remoteStream: MediaStream) {
      received_video.value.srcObject = remoteStream
    })
  }, function(err: any) {
    console.log('Failed to get local stream' ,err);
  })
}

peer.on('call', function(call) {
  getUserMedia({video: true, audio: true}, function(stream: MediaStream) {
    local_video.value.srcObject = stream
    call.answer(stream)
    call.on('stream', function(remoteStream) {
      received_video.value.srcObject = remoteStream
    });
  }, function(err: any) {
    console.log('Failed to get local stream' ,err);
  });
});
</script>

<template>
  <div class="flexChild" id="camera-container">
    <div class="camera-box">
      <video ref="received_video" autoplay></video>
      <video ref="local_video" autoplay muted></video>
      <button ref="hangup" :click="call()">
        call
      </button>
    </div>
  </div>
</template>

<style scoped>
video {
  border: 1px solid #000;
}
</style>
