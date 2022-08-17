<script setup lang="ts">
import { createMeeting, joinMeeting, state } from '../store'
</script>

<template>
<div class="meet">
    <button @click="createMeeting">
        Start a Meeting
    </button>
    <div class="note">
        The Host who started a meeting can't leave (including reload the page), or the meeting ID will be invalidated
    </div>
    <p class="dividebar"></p>
    <p></p>
    <input type="text" v-model="state.meetingId">
    <p></p>
    <button @click="joinMeeting">
        Join a Meeting
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
        width: 600px;
        height: 40px;
        border-radius: 10px;
    }
    button {
        width: 200px;
        height: 50px;
        font-size: 20px;
        border: solid 1px black;
    }
    .dividebar {
        border: solid 0.2rem #5e104a;
        width: 700px;
        border-radius: 50px;
    }
</style>
