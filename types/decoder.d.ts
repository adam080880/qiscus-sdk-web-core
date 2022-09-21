import { IAppConfig } from './defs';
import { IQAccount, IQChatRoom, IQMessage, IQParticipant, IQUser } from './model';
export declare const loginOrRegister: <T extends Record<string, any>>(json: T) => IQAccount;
interface AccountJson {
    avatar_url: string;
    email: string;
    extras: object;
    id: number;
    id_str: string;
    last_comment_id: number;
    last_comment_id_str: string;
    last_sync_event_id: number;
    pn_android_configured: boolean;
    pn_ios_configured: boolean;
    rtKey: string;
    token: string;
    username: string;
}
export declare const account: <T extends AccountJson>(json: T) => [IQAccount, AccountJson['token']];
interface UserJson1 {
    email: string;
    extras: object;
    user_avatar_url: string;
    user_id: number;
    user_id_str: string;
    username: string;
}
export interface UserJson2 {
    avatar_url: string;
    email: string;
    extras: object;
    id: number;
    id_str: string;
    username: string;
}
export declare function user(json: UserJson1): IQUser;
export declare function user(json: UserJson2): IQUser;
interface ParticipantJson {
    avatar_url: string;
    email: string;
    extras: object;
    id: number;
    id_str: string;
    last_comment_read_id: number;
    last_comment_read_id_str: string;
    last_comment_received_id: number;
    last_comment_received_id_str: string;
    username: string;
}
export declare const participant: <T extends ParticipantJson>(json: T) => IQParticipant;
interface RoomJson {
    avatar_url: string;
    chat_type: string;
    id: number;
    id_str: string;
    is_public_channel: boolean;
    is_removed: boolean;
    last_comment?: MessageJson;
    options: string;
    raw_room_name: string;
    room_name: string;
    unique_id: string;
    unread_count: number;
    participants: ParticipantJson[];
}
export declare const room: <T extends RoomJson>(json: T) => IQChatRoom;
export interface MessageJson {
    comment_before_id: number;
    comment_before_id_str: string;
    disable_link_preview: boolean;
    email: string;
    extras: object;
    id: number;
    is_deleted?: boolean;
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
    user_avatar_url: string;
    user_id: number;
    user_id_str: string;
    username: string;
}
export declare const message: <T extends MessageJson>(json: T) => IQMessage;
interface IAppConfigJson {
    base_url: string;
    broker_lb_url: string;
    broker_url: string;
    enable_event_report: boolean;
    enable_realtime: boolean;
    enable_realtime_check: boolean;
    sync_interval: number;
    sync_on_connect: number;
    extras: string | Record<string, any>;
}
export declare const appConfig: <T extends IAppConfigJson>(json: T) => IAppConfig;
export {};
