import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { Peer } from "peerjs";

export const state = reactive({
    meetingId: ''
})

export const uid = crypto.randomUUID()
export const meetingId = ref('')

/// <reference types="webrtc" />
const navigator = window.navigator;
const getUserMedia = navigator.getUserMedia ?? navigator.webkitGetUserMedia ?? navigator.mozGetUserMedia;

export const localStream: Ref<MediaStream|undefined> = ref(undefined)
export const remoteStream: Ref<MediaStream|undefined> = ref(undefined)

let peer: Peer = new Peer(uid)

const connectMeeting = (meetingId: string) => {
    const call = peer.call(meetingId, localStream.value!)
    call.on("stream", function(stream: MediaStream) {
        remoteStream.value = stream
    })

    var conn = peer.connect(meetingId);
    conn.on('open', function(){
        conn.send({ uid: uid });
    });
}

peer.on('call', function(call) {
    call.answer(localStream.value)
    call.on('stream', function(stream) {
        remoteStream.value = stream
    });
});

peer.on('connection', function(conn) {
    conn.on('data', function(data){
        console.log("ondata", data);
    });
});


export const createMeeting = () => {
    state.meetingId = uid
    joinMeeting()
}

export const joinMeeting = async () => {
    if (!state.meetingId) {
        return;
    }
    if (meetingId.value !== state.meetingId) {
        meetingId.value = state.meetingId
    }
    localStream.value = await initStream()
    if (uid !== state.meetingId) {
        connectMeeting(state.meetingId)
    }
}

const initStream = async (): Promise<MediaStream> => {
    return new Promise((resolve, reject) => {
        getUserMedia({ video: true, audio: true }, resolve, err => {
            alert(err.message)
            reject(err)
        })
    })
}