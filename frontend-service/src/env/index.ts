import { RedisEnvInterface } from "../interfaces"

export const RedisKeys: RedisEnvInterface = {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT)
}

export const ExpressPort: number = Number(process.env.CONSUMER_A_PORT) || 4000

export const EventService: string = process.env.EVENT_SERVICE || 'Event_Service'

export const ConsumingService = process.env.CONSUMING_SERVICE || 'Consuming_Service'