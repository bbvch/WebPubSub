
export default class WebSocketHelper {
    connection = {}
    val: any
    constructor(reactiveValue: any) {
        this.val = reactiveValue
    }

    connect() {

        this.connection = new WebSocket("wss://echo.websocket.org")
        this.connection.onmessage = function (event) {
            console.log(event);
            this.val += event.data + "\n"
        }
        this.connection.onopen = function (event) {
            console.log(event)
            console.log("Successfully connected to the echo websocket server...")
        }
    }
    send(data) {
        // Send data to the backend - use JSON.stringify(data)
        this.connection.send(JSON.stringify(data))
    }

}
