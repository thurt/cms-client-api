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
    published?: boolean;
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
    published?: boolean;
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
 * AuthApi - fetch parameter creator
 */
export declare const AuthApiFetchParamCreator: {
    authUser(params: {
        body: CmsAuthUserRequest;
    }, options?: any): FetchArgs;
};
/**
 * AuthApi - functional programming interface
 */
export declare const AuthApiFp: {
    authUser(params: {
        body: CmsAuthUserRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsAccessToken>;
};
/**
 * AuthApi - object-oriented interface
 */
export declare class AuthApi extends BaseAPI {
    /**
     *
     * @summary Authorize as a user to get an access token
     * @param body
     */
    authUser(params: {
        body: CmsAuthUserRequest;
    }, options?: any): Promise<CmsAccessToken>;
}
/**
 * AuthApi - factory interface
 */
export declare const AuthApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    authUser(params: {
        body: CmsAuthUserRequest;
    }, options?: any): Promise<CmsAccessToken>;
};
/**
 * CommentsApi - fetch parameter creator
 */
export declare const CommentsApiFetchParamCreator: {
    createComment(params: {
        body: CmsCreateCommentRequest;
    }, options?: any): FetchArgs;
    deleteComment(params: {
        id: number;
    }, options?: any): FetchArgs;
    getComment(params: {
        id: number;
    }, options?: any): FetchArgs;
    getComments(options?: any): FetchArgs;
    updateComment(params: {
        id: number;
        body: CmsUpdateCommentRequest;
    }, options?: any): FetchArgs;
};
/**
 * CommentsApi - functional programming interface
 */
export declare const CommentsApiFp: {
    createComment(params: {
        body: CmsCreateCommentRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsCommentRequest>;
    deleteComment(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
    getComment(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment>;
    getComments(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment>;
    updateComment(params: {
        id: number;
        body: CmsUpdateCommentRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
};
/**
 * CommentsApi - object-oriented interface
 */
export declare class CommentsApi extends BaseAPI {
    /**
     *
     * @summary Create a comment
     * @param body
     */
    createComment(params: {
        body: CmsCreateCommentRequest;
    }, options?: any): Promise<CmsCommentRequest>;
    /**
     *
     * @summary Delete a comment
     * @param id
     */
    deleteComment(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    /**
     *
     * @summary Get a comment
     * @param id
     */
    getComment(params: {
        id: number;
    }, options?: any): Promise<CmsComment>;
    /**
     *
     * @summary Get all comments
     */
    getComments(options?: any): Promise<CmsComment>;
    /**
     *
     * @summary Update a comment
     * @param id
     * @param body
     */
    updateComment(params: {
        id: number;
        body: CmsUpdateCommentRequest;
    }, options?: any): Promise<ProtobufEmpty>;
}
/**
 * CommentsApi - factory interface
 */
export declare const CommentsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    createComment(params: {
        body: CmsCreateCommentRequest;
    }, options?: any): Promise<CmsCommentRequest>;
    deleteComment(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    getComment(params: {
        id: number;
    }, options?: any): Promise<CmsComment>;
    getComments(options?: any): Promise<CmsComment>;
    updateComment(params: {
        id: number;
        body: CmsUpdateCommentRequest;
    }, options?: any): Promise<ProtobufEmpty>;
};
/**
 * PostsApi - fetch parameter creator
 */
export declare const PostsApiFetchParamCreator: {
    createPost(params: {
        body: CmsCreatePostRequest;
    }, options?: any): FetchArgs;
    deletePost(params: {
        id: number;
    }, options?: any): FetchArgs;
    getPost(params: {
        id: number;
    }, options?: any): FetchArgs;
    getPostBySlug(params: {
        slug: string;
    }, options?: any): FetchArgs;
    getPostComments(params: {
        id: number;
    }, options?: any): FetchArgs;
    getPosts(params: {
        includeUnPublished?: boolean;
    }, options?: any): FetchArgs;
    updatePost(params: {
        id: number;
        body: CmsUpdatePostRequest;
    }, options?: any): FetchArgs;
};
/**
 * PostsApi - functional programming interface
 */
export declare const PostsApiFp: {
    createPost(params: {
        body: CmsCreatePostRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPostRequest>;
    deletePost(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
    getPost(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPost>;
    getPostBySlug(params: {
        slug: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPost>;
    getPostComments(params: {
        id: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment>;
    getPosts(params: {
        includeUnPublished?: boolean;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPost>;
    updatePost(params: {
        id: number;
        body: CmsUpdatePostRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
};
/**
 * PostsApi - object-oriented interface
 */
export declare class PostsApi extends BaseAPI {
    /**
     *
     * @summary Create a post
     * @param body
     */
    createPost(params: {
        body: CmsCreatePostRequest;
    }, options?: any): Promise<CmsPostRequest>;
    /**
     *
     * @summary Delete a post
     * @param id
     */
    deletePost(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    /**
     *
     * @summary Get a post
     * @param id
     */
    getPost(params: {
        id: number;
    }, options?: any): Promise<CmsPost>;
    /**
     *
     * @summary Get a post (by slug)
     * @param slug
     */
    getPostBySlug(params: {
        slug: string;
    }, options?: any): Promise<CmsPost>;
    /**
     *
     * @summary Get all comments by post
     * @param id
     */
    getPostComments(params: {
        id: number;
    }, options?: any): Promise<CmsComment>;
    /**
     *
     * @summary Get all posts
     * @param includeUnPublished when true, includes unpublished Posts in response (note: Authorization token with ADMIN role is required).
     */
    getPosts(params: {
        includeUnPublished?: boolean;
    }, options?: any): Promise<CmsPost>;
    /**
     *
     * @summary Update a post
     * @param id
     * @param body
     */
    updatePost(params: {
        id: number;
        body: CmsUpdatePostRequest;
    }, options?: any): Promise<ProtobufEmpty>;
}
/**
 * PostsApi - factory interface
 */
export declare const PostsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    createPost(params: {
        body: CmsCreatePostRequest;
    }, options?: any): Promise<CmsPostRequest>;
    deletePost(params: {
        id: number;
    }, options?: any): Promise<ProtobufEmpty>;
    getPost(params: {
        id: number;
    }, options?: any): Promise<CmsPost>;
    getPostBySlug(params: {
        slug: string;
    }, options?: any): Promise<CmsPost>;
    getPostComments(params: {
        id: number;
    }, options?: any): Promise<CmsComment>;
    getPosts(params: {
        includeUnPublished?: boolean;
    }, options?: any): Promise<CmsPost>;
    updatePost(params: {
        id: number;
        body: CmsUpdatePostRequest;
    }, options?: any): Promise<ProtobufEmpty>;
};
/**
 * SetupApi - fetch parameter creator
 */
export declare const SetupApiFetchParamCreator: {
    isSetup(options?: any): FetchArgs;
    setup(params: {
        body: CmsCreateUserRequest;
    }, options?: any): FetchArgs;
};
/**
 * SetupApi - functional programming interface
 */
export declare const SetupApiFp: {
    isSetup(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufBoolValue>;
    setup(params: {
        body: CmsCreateUserRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsUserRequest>;
};
/**
 * SetupApi - object-oriented interface
 */
export declare class SetupApi extends BaseAPI {
    /**
     *
     * @summary Check if application is setup
     */
    isSetup(options?: any): Promise<ProtobufBoolValue>;
    /**
     *
     * @summary Setup the application
     * @param body
     */
    setup(params: {
        body: CmsCreateUserRequest;
    }, options?: any): Promise<CmsUserRequest>;
}
/**
 * SetupApi - factory interface
 */
export declare const SetupApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    isSetup(options?: any): Promise<ProtobufBoolValue>;
    setup(params: {
        body: CmsCreateUserRequest;
    }, options?: any): Promise<CmsUserRequest>;
};
/**
 * UsersApi - fetch parameter creator
 */
export declare const UsersApiFetchParamCreator: {
    createUser(params: {
        body: CmsCreateUserRequest;
    }, options?: any): FetchArgs;
    deleteUser(params: {
        id: string;
    }, options?: any): FetchArgs;
    getUser(params: {
        id: string;
    }, options?: any): FetchArgs;
    getUserComments(params: {
        id: string;
    }, options?: any): FetchArgs;
};
/**
 * UsersApi - functional programming interface
 */
export declare const UsersApiFp: {
    createUser(params: {
        body: CmsCreateUserRequest;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsUserRequest>;
    deleteUser(params: {
        id: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty>;
    getUser(params: {
        id: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsUser>;
    getUserComments(params: {
        id: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment>;
};
/**
 * UsersApi - object-oriented interface
 */
export declare class UsersApi extends BaseAPI {
    /**
     *
     * @summary Create a user
     * @param body
     */
    createUser(params: {
        body: CmsCreateUserRequest;
    }, options?: any): Promise<CmsUserRequest>;
    /**
     *
     * @summary Delete a user
     * @param id
     */
    deleteUser(params: {
        id: string;
    }, options?: any): Promise<ProtobufEmpty>;
    /**
     *
     * @summary Get a user
     * @param id
     */
    getUser(params: {
        id: string;
    }, options?: any): Promise<CmsUser>;
    /**
     *
     * @summary Get all comments by user
     * @param id
     */
    getUserComments(params: {
        id: string;
    }, options?: any): Promise<CmsComment>;
}
/**
 * UsersApi - factory interface
 */
export declare const UsersApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    createUser(params: {
        body: CmsCreateUserRequest;
    }, options?: any): Promise<CmsUserRequest>;
    deleteUser(params: {
        id: string;
    }, options?: any): Promise<ProtobufEmpty>;
    getUser(params: {
        id: string;
    }, options?: any): Promise<CmsUser>;
    getUserComments(params: {
        id: string;
    }, options?: any): Promise<CmsComment>;
};
