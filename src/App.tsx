import React from 'react';
import { Client } from "colyseus.js";

const App = () => {
    let client: any = new Client("ws://localhost:3000");

    client.joinOrCreate("table").then((room: any) => {
        console.log("joined table");
        room.onStateChange.once((state: any) => {
            console.log("initial room state:", state);
        });

        // new room state
        room.onStateChange((state: any) => {
            // this signal is triggered on each patch
        });

        // listen to patches coming from the server
        room.onMessage("messages", (message: any) => {
            console.log("message", 1);
        });

        // send data to room
        //room.send("message", 2);
    });

    return <div>Привет</div>
}

export default App;