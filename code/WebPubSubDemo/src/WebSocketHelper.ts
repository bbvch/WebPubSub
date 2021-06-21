import { WebPubSubServiceClient } from "@azure/web-pubsub";

export default class WebSocketHelper {
    pubConnection: WebSocket | undefined
    subConnection: WebSocket | undefined
    constructor(
        private pubSubAddress: string,
        private hubName: string,
        private accessToken: string,
        private eventCallback: (e: any) => void,
        private connectSuccessCallback: (message: string) => void) {
    }
    connect() {
        let subConnectionString = `${this.pubSubAddress}/client/hubs/${this.hubName}?access_token=${this.accessToken}`
        this.subConnection = new WebSocket(subConnectionString, 'json.webpubsub.azure.v1');

        this.subConnection.onmessage = (event) => {
            this.eventCallback(event)
        }
        this.subConnection.onopen = (event) => {
            if ((event.currentTarget as WebSocket).readyState === 1)
                this.connectSuccessCallback("sub connected")
        }

        this.subConnection.onerror = (ev: Event) => {
            console.log(JSON.stringify(ev))
        }

        let pubConnectionString = `${this.pubSubAddress}/client/hubs/${this.hubName}?access_token=${this.accessToken}`
        this.pubConnection = new WebSocket(pubConnectionString, 'json.webpubsub.azure.v1');

        this.pubConnection.onopen = (event) => {
            if ((event.currentTarget as WebSocket).readyState === 1)
                this.connectSuccessCallback("pub connected")
        }

    }

    send(data: any) {
        let serviceClient = new WebPubSubServiceClient("Endpoint=https://demopubsubforbbv.webpubsub.azure.com;AccessKey=CRw8rCCSj7EE9QAm60E/3jjEurKq2pbMYYB0txSGoiI=;Version=1.0;", this.hubName);
        serviceClient.sendToAll(data, { contentType: "text/plain" });
        /* if (this.pubConnection) {
             this.pubConnection.send(JSON.stringify(data))
         }
         */
    }
}
