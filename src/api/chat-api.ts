
let ws: WebSocket | null

const closeHandler = () => {
    setTimeout(createChanel, 3000)

}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages))
}

const createChanel = () => {
    ws?.removeEventListener("close", closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.close()

    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
}

let subscribers = [] as SubscriberType[]

export const chatAPI = {
    start() {
      createChanel()
    },
    stop() {
        subscribers = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messageHandler)
        ws?.close()
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unSubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    },

}



type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string,
}
