### Socket.io app

The basic implementation od the socket.io

### Tests Postman
Currently, socket.io collection sharing is not yet available [issue](https://github.com/postmanlabs/postman-app-support/issues/11252), so I will leave the prints of how I tested it below.<br/>

Open Postman and on your collection, on the icon + click and select the option View More templates, look for websocket, select and that's it<br/>

![connection](postman/event%20connection.png) <br/>
This applies to all events, just change the event name in send, except the word event.<br/>

Word event<br/>
![word](postman/event%20word.png)<br/>

Add listener for `result`<br/>
![result](postman/listen%20result.png)

