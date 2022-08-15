<script setup lang="ts">
import { createMeeting, joinMeeting, state } from '../store'
</script>

<template>
<div class="meet">
    <button @click="createMeeting">
        会議を開始する
    </button>
    <p></p>
    <p></p>
    <input type="text" v-model="state.meetingId">
    <button @click="joinMeeting">
        会議を参加する
    </button>

</div>  
</template>

<style scoped>
    .meet {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    input {
        width: 100%;
        max-width: 400px;
    }
    button {
        width: 200px;
        height: 50px;
        font-size: 20px;
        border: solid 1px black;
    }
</style>
