import * as Api from '../api';
import * as m from '../model';
import { Storage } from '../storage';
export interface IQSyncEvent {
    'room.cleared': (room: m.IQChatRoom) => void;
    'message.new': (message: m.IQMessage) => void;
    'message.delivered': (data: m.IQMessage) => void;
    'message.deleted': (message: m.IQMessage) => void;
    'message.read': (message: m.IQMessage) => void;
    'message.updated': (message: m.IQMessage) => void;
    'last-message-id': (id: m.IQAccount['lastMessageId']) => void;
    'last-event-id': (id: m.IQAccount['lastSyncEventId']) => void;
}
export declare type SyncAdapter = ReturnType<typeof getSyncAdapter>;
export default function getSyncAdapter(o: {
    s: Storage;
    api: Api.ApiRequester;
    shouldSync: () => boolean;
    logger: (...args: string[]) => void;
}): {
    synchronize(messageId: m.IQAccount['lastMessageId']): void;
    synchronizeEvent(eventId: m.IQAccount['lastSyncEventId']): void;
    onNewMessage(callback: (message: m.IQMessage) => void): () => void;
    onMessageUpdated(callback: (message: m.IQMessage) => void): () => void;
    onMessageDelivered(callback: (m: m.IQMessage) => void): () => void;
    onMessageRead(callback: (m: m.IQMessage) => void): () => void;
    onMessageDeleted(callback: (message: m.IQMessage) => void): () => void;
    onRoomCleared(callback: (room: m.IQChatRoom) => void): () => void;
    onSynchronized(callback: () => void): () => void;
};
export declare module SyncResponse {
    interface Extras {
    }
    interface Payload {
    }
    interface Avatar {
        url: string;
    }
    interface UserAvatar {
        avatar: Avatar;
    }
    interface Comment {
        chat_type: string;
        comment_before_id: number;
        comment_before_id_str: string;
        disable_link_preview: boolean;
        email: string;
        extras: Extras;
        id: number;
        id_str: string;
        is_deleted: boolean;
        is_public_channel: boolean;
        message: string;
        payload: Payload;
        room_avatar: string;
        room_id: number;
        room_id_str: string;
        room_name: string;
        status: string;
        timestamp: string;
        topic_id: number;
        topic_id_str: string;
        type: string;
        unique_temp_id: string;
        unix_nano_timestamp: number;
        unix_timestamp: number;
        user_avatar: UserAvatar;
        user_avatar_url: string;
        user_id: number;
        user_id_str: string;
        username: string;
    }
    interface Meta {
        last_received_comment_id: number;
        need_clear: boolean;
    }
    interface Results {
        comments: Comment[];
        meta: Meta;
    }
    interface RootObject {
        results: Results;
        status: number;
    }
}
export declare module _SyncResponse {
    interface Meta {
        last_received_comment_id: number;
        need_clear: boolean;
    }
    interface Payload {
    }
    interface Avatar {
        url: string;
    }
    interface UserAvatar {
        avatar: Avatar;
    }
    interface Comment {
        id: number;
        topic_id: number;
        room_id: number;
        room_name: string;
        comment_before_id: number;
        message: string;
        type: string;
        payload: Payload;
        extras?: any;
        disable_link_preview: boolean;
        email: string;
        username: string;
        user_avatar: UserAvatar;
        user_avatar_url: string;
        timestamp: Date;
        unix_timestamp: number;
        unique_temp_id: string;
    }
    interface Results {
        meta: Meta;
        comments: Comment[];
    }
    interface RootObject {
        status: number;
        results: Results;
    }
}
export declare module SyncEventResponse {
    interface Actor {
        id: string;
        email: string;
        name: string;
    }
    interface DeletedMessage {
        message_unique_ids: string[];
        room_id: string;
    }
    interface DeletedRoom {
        avatar_url: string;
        chat_type: string;
        id: number;
        id_str: string;
        last_comment: any;
        options: object;
        raw_room_name: string;
        room_name: string;
        unique_id: string;
        unread_count: number;
    }
    interface DataMessageDeleted {
        deleted_messages: DeletedMessage[];
        is_hard_delete: boolean;
    }
    interface DataRoomCleared {
        deleted_rooms: DeletedRoom[];
    }
    interface DataMessageDelivered {
        comment_id: number;
        comment_unique_id: string;
        email: string;
        room_id: number;
    }
    interface Payload {
        actor: Actor;
        data: DataMessageDeleted | DataMessageDelivered | DataRoomCleared;
    }
    interface Event {
        id: any;
        timestamp: any;
        action_topic: 'read' | 'delivered' | 'clear_room' | 'deleted_message';
        payload: Payload;
    }
    interface RootObject {
        events: Event[];
        is_start_event_id_found: boolean;
    }
}
