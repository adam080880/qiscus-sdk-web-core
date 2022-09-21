import type { MqttClient } from 'mqtt';
import type { Callback, Subscription } from '../defs';
import * as m from '../model';
import { Storage } from '../storage';
export declare type MqttAdapter = ReturnType<typeof getMqttAdapter>;
export default function getMqttAdapter(s: Storage, opts?: {
    getClientId?: () => string;
}): {
    readonly mqtt: _MqttClient | undefined;
    clear(): void;
    conneck(): void;
    onMqttConnected(callback: () => void): () => void;
    onMqttReconnecting(callback: () => void): Subscription;
    onMqttDisconnected(callback: () => void): Subscription;
    onMessageDeleted(callback: (data: m.IQMessage) => void): () => void;
    onMessageDelivered(callback: (data: m.IQMessage) => void): () => void;
    onMessageRead(callback: (m: m.IQMessage) => void): () => void;
    onNewMessage(callback: (data: m.IQMessage) => void): () => void;
    onMessageUpdated(callback: (data: m.IQMessage) => void): () => void;
    onRoomDeleted(callback: (data: number) => void): () => void;
    onUserPresence(callback: (userId: string, isOnline: boolean, lastSeen: Date) => void): () => void;
    onUserTyping(callback: (userId: string, roomId: number, isTyping: boolean) => void): () => void;
    publishCustomEvent(roomId: number, userId: string, data: any): void;
    subscribeCustomEvent(roomId: number, callback: Callback<any>): void;
    unsubscribeCustomEvent(roomId: number): void;
    sendPresence(userId: string, isOnline: boolean): void;
    sendTyping(roomId: number, userId: string, isTyping: boolean): void;
    subscribeUser(userToken: string): Subscription;
    subscribeUserPresence(userId: string): void;
    unsubscribeUserPresence(userId: string): void;
    subscribeRoom(roomId: number): void;
    unsubscribeRoom(roomId: number): void;
    subscribeChannel(appId: string, channelUniqueId: string): void;
    unsubscribeChannel(appId: string, channelUniqueId: string): void;
};
export declare type MqttMessage = {
    id: number;
    comment_before_id: number;
    message: string;
    username: string;
    email: string;
    user_avatar: string;
    timestamp: string;
    unix_timestamp: number;
    created_at: Date;
    room_id: number;
    room_name: string;
    topic_id: number;
    unique_temp_id: string;
    disable_link_preview: boolean;
    chat_type: string;
    comment_before_id_str: string;
    extras: object;
    is_public_channel: boolean;
    payload: object;
    raw_room_name: string;
    room_avatar: string;
    room_id_str: string;
    room_options: string;
    room_type: string;
    status: string;
    topic_id_str: string;
    type: string;
    unix_nano_timestamp: number;
    user_avatar_url: string;
    user_id: number;
    user_id_str: string;
};
export declare type MqttNotification = {
    id: number;
    timestamp: number;
    action_topic: string;
    payload: {
        actor: {
            id: string;
            email: string;
            name: string;
        };
        data: {
            deleted_messages: [{
                message_unique_ids: string[];
                room_id: string;
            }];
            is_hard_delete: boolean;
            deleted_rooms: [{
                avatar_url: string;
                chat_type: string;
                id: number;
                id_str: string;
                options: object;
                raw_room_name: string;
                room_name: string;
                unique_id: string;
                last_comment: object;
            }];
        };
    };
};
export declare type MqttMessageReceived = {
    message: MqttMessage;
};
export declare type MqttMessageDelivery = {
    roomId: number;
    userId: string;
    messageId: string;
    messageUniqueId: string;
};
export declare type MqttUserPresence = {
    userId: string;
    isOnline: boolean;
    lastSeen: Date;
};
export declare type MqttUserTyping = {
    isTyping: boolean;
    userId: string;
    roomId: number;
};
export declare type MqttCustomEvent = {
    roomId: number;
    payload: any;
};
declare type _MqttClient = MqttClient & {
    _resubscribeTopics: string[];
};
export {};
