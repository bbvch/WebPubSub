export default class WebSocketHelper {
    connection: WebSocket
    callback: (event: any) => void
    constructor(connectionString: string, cb: (e: any) => void) {
        this.connection = new WebSocket(connectionString)
        this.callback = cb
    }
    connect() {
        this.connection.onmessage = (event) => {
            this.callback(event)
        }
        this.connection.onopen = function (event) {
            console.log(event)
            console.log("Successfully connected to the echo websocket server...")
        }
    }
    send(data: any) {
        this.connection.send(JSON.stringify(data))
    }
}
