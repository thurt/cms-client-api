export interface FetchAPI {
    (url: string, init?: any): Promise<any>;
}
export interface FetchArgs {
    url: string;
    options: any;
}
export declare class BaseAPI {
    basePath: string;
    fetch: FetchAPI;
    constructor(fetch?: FetchAPI, basePath?: string);
}
export interface CmsAccessToken {
    access_token?: string;
    token_type?: string;
    expires_in?: number;
}
export interface CmsAuthUserRequest {
    id?: string;
    password?: string;
}
export interface CmsComment {
    id?: number;
    content?: string;
    created?: string;
    last_edited?: string;
    user_id?: string;
    post_id?: string;
}
export interface CmsCommentRequest {
    id?: number;
}
export interface CmsCreateCommentRequest {
    content?: string;
    user_id?: string;
    post_id?: number;
}
export interface CmsCreatePostRequest {
    title?: string;
    content?: string;
    slug?: string;
}
export interface CmsCreateUserRequest {
    id?: string;
    email?: string;
    password?: string;
}
export interface CmsPost {
    id?: number;
    title?: string;
    content?: string;
    created?: string;
    last_edited?: string;
    published?: string;
    slug?: string;
}
export interface CmsPostRequest {
    id?: number;
}
export interface CmsUpdateCommentRequest {
    id?: number;
    content?: string;
}
export interface CmsUpdatePostRequest {
    id?: number;
    title?: string;
    content?: string;
    slug?: string;
}
export interface CmsUser {
    id?: string;
    email?: string;
    created?: string;
    last_active?: string;
    role?: CmsUserRole;
}
export interface CmsUserPassword {
    password?: string;
}
export interface CmsUserRequest {
    id?: string;
}
export declare type CmsUserRole = 'UNKNOWN' | 'ADMIN' | 'USER';
/**
 * Wrapper message for `bool`.  The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface ProtobufBoolValue {
    /**
     * The bool value.
     */
    value?: boolean;
}
/**
 * service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface ProtobufEmpty {
}
/**
 * CmsApi - fetch parameter creator
 */
export declare const CmsApiFetchParamCreator: {
    authUser(params: {
        body: CmsAuthUserRequest;
    }, options?: any): FetchArgs;
    createComment(params: {
        body: CmsCreateCommentRequest;
    }, options?: any): FetchArgs;
    createPost(params: {
        body: CmsCreatePostRequest;
    }, options?: any): FetchArgs;
    createUser(params: {
        body: CmsCreateUserRequest;
    }, options?: any): FetchArgs;
    deleteComment(params: {
        id: number;
    }, options?: any): FetchArgs;
    deletePost(params: {
        id: number;
    }, options?: any): FetchArgs;
    deleteUser(params: {
        id: string;
    }, options?: any): FetchArgs;
    getComment(params: {
        id: number;
    }, options?: any): FetchArgs;
    getComments(options?: any): FetchArgs;
    getPost(params: {
        id: number;
    }, options?: any): FetchArgs;
    getPostComments(params: {
        id: number;
    }, options?: any): FetchArgs;
    getPosts(options?: any): FetchArgs;
    getUser(params: {
        id: string;
    }, options?: any): FetchArgs;
    getUserComments(params: {
        id: string;
    }, options?: any): FetchArgs;
    isSetup(options?: any): FetchArgs;
    setup(params: {
        body: CmsCreateUserRequest;
    }, options?: any): FetchArgs;
    unPublishPost(params: {
        id: number;
    }, options?: any): FetchArgs;
    updateComment(params: {
        id: number;
        body: CmsUpdateCommentRequest;
    }, options?: any): FetchArgs;
};
/**
 * CmsApi - functional programming interface
 */
export declare const CmsApiFp: {
    authUser(params: {
        body: CmsAuthUserRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsAccessToken>;
    createComment(params: {
        body: CmsCreateCommentRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsCommentRequest>;
    createPost(params: {
        body: CmsCreatePostRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPostRequest>;
    createUser(params: {
        body: CmsCreateUserRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsUserRequest>;
    deleteComment(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
    deletePost(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
    deleteUser(params: {
        id: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
    getComment(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment>;
    getComments(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment>;
    getPost(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPost>;
    getPostComments(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment>;
    getPosts(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPost>;
    getUser(params: {
        id: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsUser>;
    getUserComments(params: {
        id: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment>;
    isSetup(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufBoolValue>;
    setup(params: {
        body: CmsCreateUserRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsUserRequest>;
    unPublishPost(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
    updateComment(params: {
        id: number;
        body: CmsUpdateCommentRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
};
/**
 * CmsApi - object-oriented interface
 */
export declare class CmsApi extends BaseAPI {
    /**
     *
     * @summary Auth Use-Cases
     * @param body
     */
    authUser(params: {
        body: CmsAuthUserRequest;
    }, options?: any): Promise<CmsAccessToken>;
    /**
     *
     * @summary Comment CRUD
     * @param body
     */
    createComment(params: {
        body: CmsCreateCommentRequest;
    }, options?: any): Promise<CmsCommentRequest>;
    /**
     *
     * @summary Post CRUD
     * @param body
     */
    createPost(params: {
        body: CmsCreatePostRequest;
    }, options?: any): Promise<CmsPostRequest>;
    /**
     *
     * @summary User CRD
     * @param body
     */
    createUser(params: {
        body: CmsCreateUserRequest;
    }, options?: any): Promise<CmsUserRequest>;
    /**
     *
     * @param id
     */
    deleteComment(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    /**
     *
     * @param id
     */
    deletePost(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    /**
     *
     * @param id
     */
    deleteUser(params: {
        id: string;
    }, options?: any): Promise<ProtobufEmpty>;
    /**
     *
     * @param id
     */
    getComment(params: {
        id: number;
    }, options?: any): Promise<CmsComment>;
    /**
     *
     * @summary Comment Use-Cases
     */
    getComments(options?: any): Promise<CmsComment>;
    /**
     *
     * @param id
     */
    getPost(params: {
        id: number;
    }, options?: any): Promise<CmsPost>;
    /**
     *
     * @summary Post Use-Cases
     * @param id
     */
    getPostComments(params: {
        id: number;
    }, options?: any): Promise<CmsComment>;
    /**
     *
     */
    getPosts(options?: any): Promise<CmsPost>;
    /**
     *
     * @param id
     */
    getUser(params: {
        id: string;
    }, options?: any): Promise<CmsUser>;
    /**
     *
     * @summary User Use-Cases
     * @param id
     */
    getUserComments(params: {
        id: string;
    }, options?: any): Promise<CmsComment>;
    /**
     *
     */
    isSetup(options?: any): Promise<ProtobufBoolValue>;
    /**
     *
     * @summary Setup
     * @param body
     */
    setup(params: {
        body: CmsCreateUserRequest;
    }, options?: any): Promise<CmsUserRequest>;
    /**
     *
     * @param id
     */
    unPublishPost(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    /**
     *
     * @param id
     * @param body
     */
    updateComment(params: {
        id: number;
        body: CmsUpdateCommentRequest;
    }, options?: any): Promise<ProtobufEmpty>;
}
/**
 * CmsApi - factory interface
 */
export declare const CmsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    authUser(params: {
        body: CmsAuthUserRequest;
    }, options?: any): Promise<CmsAccessToken>;
    createComment(params: {
        body: CmsCreateCommentRequest;
    }, options?: any): Promise<CmsCommentRequest>;
    createPost(params: {
        body: CmsCreatePostRequest;
    }, options?: any): Promise<CmsPostRequest>;
    createUser(params: {
        body: CmsCreateUserRequest;
    }, options?: any): Promise<CmsUserRequest>;
    deleteComment(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    deletePost(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    deleteUser(params: {
        id: string;
    }, options?: any): Promise<ProtobufEmpty>;
    getComment(params: {
        id: number;
    }, options?: any): Promise<CmsComment>;
    getComments(options?: any): Promise<CmsComment>;
    getPost(params: {
        id: number;
    }, options?: any): Promise<CmsPost>;
    getPostComments(params: {
        id: number;
    }, options?: any): Promise<CmsComment>;
    getPosts(options?: any): Promise<CmsPost>;
    getUser(params: {
        id: string;
    }, options?: any): Promise<CmsUser>;
    getUserComments(params: {
        id: string;
    }, options?: any): Promise<CmsComment>;
    isSetup(options?: any): Promise<ProtobufBoolValue>;
    setup(params: {
        body: CmsCreateUserRequest;
    }, options?: any): Promise<CmsUserRequest>;
    unPublishPost(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    updateComment(params: {
        id: number;
        body: CmsUpdateCommentRequest;
    }, options?: any): Promise<ProtobufEmpty>;
};
