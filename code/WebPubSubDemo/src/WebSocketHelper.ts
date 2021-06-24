//import { WebPubSubServiceClient } from "@azure/web-pubsub";

export default class WebSocketHelper {
    connection: WebSocket | undefined
    constructor(
        private pubSubAddress: string,
        private hubName: string,
        private accessToken: string,
        private eventCallback: (e: any) => void,
        private connectSuccessCallback: (message: string) => void) {
    }
    connect() {
        let connectionString = `${this.pubSubAddress}/client/hubs/${this.hubName}?access_token=${this.accessToken}`
        this.connection = new WebSocket(connectionString, 'json.webpubsub.azure.v1');

        this.connection.onmessage = (event: MessageEvent) => {
            this.eventCallback(event.data)
        }
        this.connection.onopen = (event: any) => {
            /*
            if ((event.currentTarget as WebSocket).readyState === 1)
                this.connection.send(JSON.stringify({
                    type: 'joinGroup',
                    group: this.hubName
                }));
                */
            this.connectSuccessCallback("sub connected")
        }

        this.connection.onerror = (ev: any) => {
            console.log(`Error: ${JSON.stringify(ev)}`)
        }
    }

    send(data: string) {
        if (this.connection) {
            let payload = JSON.stringify({
                type: 'sendToGroup',
                group: this.hubName,
                dataType: 'text',
                data: data
            })
            this.connection.send(payload)
        }
    }
}
