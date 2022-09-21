import { IQUser, IQChatRoom, IQMessage } from './model';
import type { Storage } from './storage';
export declare const makeApiRequest: (storage: Storage) => {
    request: <Resp extends unknown>(api: Partial<Api>) => Promise<Resp>;
};
export declare type ApiRequester = ReturnType<typeof makeApiRequest>;
declare type ApiRequest<O> = (o: O) => Partial<Api>;
export declare type Api = {
    baseUrl?: string;
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    url: string;
    params?: Record<string, string>;
    headers?: Record<string, string>;
    body?: Record<string, unknown>;
};
export declare type withHeaders = {
    headers: {
        'qiscus-sdk-app-id': string;
        'qiscus-sdk-version': string;
    };
};
export declare type withCredentials = {
    headers: {
        'qiscus-sdk-token': string;
        'qiscus-sdk-user-id': string;
    };
} & withHeaders;
export declare type loginOrRegisterParams = {
    userId: string;
    userKey: string;
    username?: string;
    avatarUrl?: string;
    deviceToken?: string;
    extras?: Record<string, unknown>;
};
export declare const loginOrRegister: ApiRequest<loginOrRegisterParams & withHeaders>;
export declare const getNonce: ApiRequest<withHeaders>;
export declare const verifyIdentityToken: ApiRequest<{
    identityToken: string;
} & withHeaders>;
export declare const getProfile: ApiRequest<withCredentials>;
export declare const patchProfile: ApiRequest<Partial<IQUser> & withCredentials>;
export declare const getUserList: ApiRequest<{
    page?: number;
    limit?: number;
    query?: string;
} & withCredentials>;
export declare const blockUser: ApiRequest<{
    userId: IQUser['id'];
} & withCredentials>;
export declare const unblockUser: ApiRequest<{
    userId: IQUser['id'];
} & withCredentials>;
export declare const getBlockedUsers: ApiRequest<{
    page?: number;
    limit?: number;
} & withCredentials>;
export declare const getTotalUnreadCount: ApiRequest<{} & withCredentials>;
export declare const getRoomUnreadCount: ApiRequest<withCredentials>;
export declare const createRoom: ApiRequest<{
    name: string;
    userIds: IQUser['id'][];
    avatarUrl?: IQChatRoom['avatarUrl'];
    extras?: IQChatRoom['extras'];
} & withCredentials>;
export declare const getOrCreateRoomWithTarget: ApiRequest<{
    userIds: IQUser['id'][];
    extras?: IQChatRoom['extras'];
} & withCredentials>;
export declare const getOrCreateRoomWithUniqueId: ApiRequest<{
    uniqueId: string;
    name?: string;
    avatarUrl?: string;
    options?: Record<string, any>;
} & withCredentials>;
export declare const getRoomById: ApiRequest<{
    id: IQChatRoom['id'];
} & withCredentials>;
export declare const updateRoom: ApiRequest<{
    id: IQChatRoom['id'];
    name?: IQChatRoom['name'];
    avatarUrl?: IQChatRoom['avatarUrl'];
    extras?: IQChatRoom['extras'];
} & withCredentials>;
export declare const getUserRooms: ApiRequest<{
    page?: number;
    limit?: number;
    type?: IQChatRoom['type'];
    showParticipants?: boolean;
    showRemoved?: boolean;
    showEmpty?: boolean;
} & withCredentials>;
export declare const getRoomInfo: ApiRequest<{
    roomIds?: IQChatRoom['id'][];
    roomUniqueIds?: IQChatRoom['uniqueId'][];
    showParticipants?: boolean;
    showRemoved?: boolean;
    page?: number;
} & withCredentials>;
export declare const getRoomParticipants: ApiRequest<{
    uniqueId: IQChatRoom['uniqueId'];
    page?: number;
    limit?: number;
    sorting?: 'asc' | 'desc';
} & withCredentials>;
export declare const addRoomParticipants: ApiRequest<{
    id: IQChatRoom['id'];
    userIds: IQUser['id'][];
} & withCredentials>;
export declare const removeRoomParticipants: ApiRequest<{
    id: IQChatRoom['id'];
    userIds: IQUser['id'][];
} & withCredentials>;
export declare const postComment: ApiRequest<{
    roomId: IQChatRoom['id'];
    text: IQMessage['text'];
    uniqueId: IQMessage['uniqueId'];
    type: IQMessage['type'];
    payload?: IQMessage['payload'];
    extras?: IQMessage['extras'];
} & withCredentials>;
export declare const getComment: ApiRequest<{
    roomId: IQChatRoom['id'];
    lastMessageId: IQMessage['id'];
    after?: boolean;
    limit?: number;
} & withCredentials>;
export declare const updateCommentStatus: ApiRequest<{
    roomId: IQChatRoom['id'];
    lastReadId?: IQMessage['id'];
    lastReceivedId?: IQMessage['id'];
} & withCredentials>;
export declare const searchMessages: ApiRequest<{
    query: string;
    roomId?: IQChatRoom['id'];
    page?: number;
} & withCredentials>;
export declare const deleteMessages: ApiRequest<{
    uniqueIds: IQMessage['uniqueId'][];
} & withCredentials>;
export declare const clearRooms: ApiRequest<{
    uniqueIds: IQChatRoom['uniqueId'][];
} & withCredentials>;
export declare const setDeviceToken: ApiRequest<{
    deviceToken: string;
    isDevelopment?: boolean;
} & withCredentials>;
export declare const removeDeviceToken: ApiRequest<{
    deviceToken: string;
    isDevelopment?: boolean;
} & withCredentials>;
export declare const synchronize: ApiRequest<{
    lastMessageId?: IQMessage['id'];
    limit?: number;
} & withCredentials>;
export declare const synchronizeEvent: ApiRequest<{
    lastEventId?: string;
} & withCredentials>;
export declare const appConfig: ApiRequest<withHeaders>;
export declare const searchMessagesV2: ApiRequest<{
    query: string;
    roomIds: number[];
    userId?: string;
    type?: string;
    roomType?: string;
    page?: number;
    limit?: number;
} & withCredentials>;
export declare const getFileList: ApiRequest<{
    roomIds?: number[];
    fileType?: string;
    page?: number;
    limit?: number;
    sender: string;
    includeExtensions?: string[];
    excludeExtensions?: string[];
} & withCredentials>;
export declare const updateMessage: ApiRequest<{
    token: string;
    uniqueId: string;
    comment: string;
    extras?: Record<string, any>;
    payload?: Record<string, any>;
} & withCredentials>;
export {};
