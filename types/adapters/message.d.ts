import { Storage } from '../storage';
import * as Api from '../api';
import * as model from '../model';
declare const getMessageAdapter: (s: Storage, api: Api.ApiRequester) => {
    sendMessage(roomId: number, message: model.IQMessage): Promise<model.IQMessage>;
    getMessages(roomId: number, lastMessageId?: number, limit?: number, after?: boolean): Promise<model.IQMessage[]>;
    deleteMessage(uniqueIds: string[]): Promise<model.IQMessage[]>;
    markAsRead(roomId: number, messageId: number): Promise<void>;
    markAsDelivered(roomId: number, messageId: number): Promise<void>;
    searchMessages({ query, roomIds, userId, type, roomType, page, limit, }: {
        query: string;
        roomIds: number[];
        userId?: string | undefined;
        type?: string | undefined;
        roomType?: string | undefined;
        page?: number | undefined;
        limit?: number | undefined;
    }): Promise<model.IQMessage[]>;
    getFileList({ roomIds, fileType, page, limit, userId, includeExtensions, excludeExtensions, }: {
        roomIds?: number[] | undefined;
        fileType?: string | undefined;
        page?: number | undefined;
        limit?: number | undefined;
        userId?: string | undefined;
        includeExtensions?: string[] | undefined;
        excludeExtensions?: string[] | undefined;
    }): Promise<model.IQMessage[]>;
    updateMessage(message: model.IQMessage): Promise<model.IQMessage>;
};
export default getMessageAdapter;
export declare type MessageAdapter = ReturnType<typeof getMessageAdapter>;
export declare module PostCommentResponse {
    interface Avatar {
        url: string;
    }
    interface UserAvatar {
        avatar: Avatar;
    }
    interface Comment {
        comment_before_id: number;
        comment_before_id_str: string;
        disable_link_preview: boolean;
        email: string;
        extras: object;
        id: number;
        id_str: string;
        is_deleted: boolean;
        is_public_channel: boolean;
        message: string;
        payload: object;
        room_avatar: string;
        room_id: number;
        room_id_str: string;
        room_name: string;
        room_type: string;
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
    interface Results {
        comment: Comment;
    }
    interface RootObject {
        results: Results;
        status: number;
    }
}
export declare module GetCommentsResponse {
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
        room_type: string;
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
    interface Results {
        comments: Comment[];
    }
    interface RootObject {
        results: Results;
        status: number;
    }
}
export declare module DeleteCommentsResponse {
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
        room_type: string;
        status: string;
        timestamp: string;
        topic_id: number;
        topic_id_str: string;
        type: string;
        unique_temp_id: string;
        unix_nano_timestamp: any;
        unix_timestamp: number;
        user_avatar: UserAvatar;
        user_avatar_url: string;
        user_id: number;
        user_id_str: string;
        username: string;
    }
    interface Results {
        comments: Comment[];
    }
    interface RootObject {
        results: Results;
        status: number;
    }
}
export declare module UpdateCommentStatusResponse {
    interface Results {
        changed: boolean;
        last_comment_read_id: number;
        last_comment_read_id_str: string;
        last_comment_received_id: number;
        last_comment_received_id_str: string;
        user_id: number;
        user_id_str: string;
    }
    interface RootObject {
        results: Results;
        status: number;
    }
}
