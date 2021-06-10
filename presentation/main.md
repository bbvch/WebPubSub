---
marp: true
header: 'bbv Software Services AG'
footer: 'Azure Cloud Community Meetup'
---

# Azure Web PubSub Servcie

Short introduction

---
![bg right 100%](socket.png)

# Sockets _(not WebSockets)_

are

- an abstraction of the network for an application
- can listen to incoming requests
- are exposed to the network by ports

---
![bg right 100%](websocket.png)

# WebSockets

are

- an abstraction of the network for a web application
- can be used as a channel for 2-way communication

---

# Web PubSub

Service on top of WebSockets to

- manage connections
- manage groups (hubs, namespaces) and roles
- trigger events

# Availability

Preview in 
- South East Asio
- North Europe
- West Europe
- East US
- West US 2

---

# Alternatives

- Socket.io (self-hosted)
- pusher.com
- ably
- pubnub
(- SignalR)
(- Firebase)
...

---

# Scaling and Pricing

- 1 unit per 1000 concurrent connections
- ca. 1.50$ per day per unit
- max units 100

---

# Features 

- Live trace tool


--- 

# Integration

- Can react to messages in the stream and trigger an event hub
