export default class WebSocketHelper {
    connection: WebSocket | undefined
    constructor(private connectionString: string, accessToken: string, private eventCallback: (e: any) => void, private connectSuccessCallback: () => void) {
    }
    connect() {
        this.connection = new WebSocket(this.connectionString)
        this.connection.onmessage = (event) => {
            this.eventCallback(event)
        }
        this.connection.onopen = (event) => {
            debugger;
            if ((event.currentTarget as WebSocket).readyState === 1)
                this.connectSuccessCallback()
            console.log("Successfully connected to the echo websocket server...")
        }
    }

    send(data: any) {
        if (this.connection) {
            this.connection.send(JSON.stringify(data))
        }
    }
}
