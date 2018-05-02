# JAMCHAT

### Chat, Collaborate, Make Music

JamChat is an ephemeral electronic music making application where you chat with your friends and together compose a musical track. Chat messages are automatically translated into notes on a 16 step sequencer while chatting, however the sequence can also be manually edited.

Participants in a session can capture their sequence at any given time to contribute to the arrangement, at which point the sequence is cemented in as part of final track. Once a track is closed by its creator, the chat ends and no further sequences can be added. Session data is stored in a Mongo database, and can be compiled for playback through Tone.js at a future time, by future visitors.

## Purpose

This is part of a series of conceptual apps whose aims are to mimic the polished 'app' aesthetic, while subtly subverting the idea of a functional (useful) application. In this sense, JamChat is one part art piece, one part multiplayer game, and one part functional chat application. The musical output is not intended to be pleasing, nor is the 'composing' of a track intended to be flexible.

I took this opportunity as well to learn how to build a full stack application using modern web development tools from the ground up.

## Materials

* React
* Redux
* Socket.io
* Passport
* Express
* MongoDB
* Tone.js

## Future Development & Contributing

This is a work in progress. There is plenty of potential for expanding functionality while holding true to the application's intentions -- storing sequences with MIDI data, enabling the keyboard for playback and recording passages, adding effects and hooking them to user actions, etc. While I built this alone with the intention of learning as much as possible, I am happy to welcome PRs.

## Acknowledgments

Much of the initial boiler plate and help getting started came from [verekia's](https://github.com/verekia) wonderful [JavaScript Stack from Scratch tutorial](https://github.com/verekia/js-stack-from-scratch). I got an emoji medal at the end once I finished it. Thanks of course to all the maintainers and contributors to the open source tools used.
