export default class WebSocketHelper {
    connection: WebSocket
    constructor(private connectionString: string, accessToken: string, private eventCallback: (e: any) => void, private connectSuccessCallback: () => void) {
        this.connection = new WebSocket(this.connectionString, ["access_token", accessToken])
    }
    connect() {
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
        this.connection.send(JSON.stringify(data))
    }
}
