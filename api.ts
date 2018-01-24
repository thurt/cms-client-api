/**
 * CMS
 * CMS Service API provides access to CMS entities and supports CMS use-cases
 *
 * OpenAPI spec version: version not set
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as querystring from 'querystring';
import * as url from 'url';

import * as isomorphicFetch from 'isomorphic-fetch';
import * as assign from 'core-js/library/fn/object/assign';

interface Dictionary<T> {
  [index: string]: T;
}
export interface FetchAPI {
  (url: string, init?: any): Promise<any>;
}

const BASE_PATH = 'http://localhost'.replace(/\/+$/, '');

export interface FetchArgs {
  url: string;
  options: any;
}

export class BaseAPI {
  basePath: string;
  fetch: FetchAPI;

  constructor(fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) {
    this.basePath = basePath;
    this.fetch = fetch;
  }
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

export type CmsUserRole = 'UNKNOWN' | 'ADMIN' | 'USER';

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
export interface ProtobufEmpty {}

/**
 * CmsApi - fetch parameter creator
 */
export const CmsApiFetchParamCreator = {
  /**
   *
   * @summary Auth Use-Cases
   * @param body
   */
  authUser(params: {body: CmsAuthUserRequest}, options?: any): FetchArgs {
    // verify required parameter "body" is set
    if (params['body'] == null) {
      throw new Error('Missing required parameter body when calling authUser');
    }
    const baseUrl = `/auth/user`;
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'POST'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    contentTypeHeader = {'Content-Type': 'application/json'};
    if (params['body']) {
      fetchOptions.body = JSON.stringify(params['body'] || {});
    }
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @summary Comment CRUD
   * @param body
   */
  createComment(
    params: {body: CmsCreateCommentRequest},
    options?: any,
  ): FetchArgs {
    // verify required parameter "body" is set
    if (params['body'] == null) {
      throw new Error(
        'Missing required parameter body when calling createComment',
      );
    }
    const baseUrl = `/comments`;
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'POST'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    contentTypeHeader = {'Content-Type': 'application/json'};
    if (params['body']) {
      fetchOptions.body = JSON.stringify(params['body'] || {});
    }
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @summary Post CRUD
   * @param body
   */
  createPost(params: {body: CmsCreatePostRequest}, options?: any): FetchArgs {
    // verify required parameter "body" is set
    if (params['body'] == null) {
      throw new Error(
        'Missing required parameter body when calling createPost',
      );
    }
    const baseUrl = `/posts`;
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'POST'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    contentTypeHeader = {'Content-Type': 'application/json'};
    if (params['body']) {
      fetchOptions.body = JSON.stringify(params['body'] || {});
    }
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @summary User CRD
   * @param body
   */
  createUser(params: {body: CmsCreateUserRequest}, options?: any): FetchArgs {
    // verify required parameter "body" is set
    if (params['body'] == null) {
      throw new Error(
        'Missing required parameter body when calling createUser',
      );
    }
    const baseUrl = `/users`;
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'POST'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    contentTypeHeader = {'Content-Type': 'application/json'};
    if (params['body']) {
      fetchOptions.body = JSON.stringify(params['body'] || {});
    }
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @param id
   */
  deleteComment(params: {id: number}, options?: any): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error(
        'Missing required parameter id when calling deleteComment',
      );
    }
    const baseUrl = `/comments/{id}`.replace(`{${'id'}}`, `${params['id']}`);
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'DELETE'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @param id
   */
  deletePost(params: {id: number}, options?: any): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error('Missing required parameter id when calling deletePost');
    }
    const baseUrl = `/posts/{id}`.replace(`{${'id'}}`, `${params['id']}`);
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'DELETE'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @param id
   */
  deleteUser(params: {id: string}, options?: any): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error('Missing required parameter id when calling deleteUser');
    }
    const baseUrl = `/users/{id}`.replace(`{${'id'}}`, `${params['id']}`);
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'DELETE'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @param id
   */
  getComment(params: {id: number}, options?: any): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error('Missing required parameter id when calling getComment');
    }
    const baseUrl = `/comments/{id}`.replace(`{${'id'}}`, `${params['id']}`);
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'GET'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @summary Comment Use-Cases
   */
  getComments(options?: any): FetchArgs {
    const baseUrl = `/comments`;
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'GET'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @param id
   */
  getPost(params: {id: number}, options?: any): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error('Missing required parameter id when calling getPost');
    }
    const baseUrl = `/posts/{id}`.replace(`{${'id'}}`, `${params['id']}`);
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'GET'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @summary Post Use-Cases
   * @param id
   */
  getPostComments(params: {id: number}, options?: any): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error(
        'Missing required parameter id when calling getPostComments',
      );
    }
    const baseUrl = `/posts/{id}/comments`.replace(
      `{${'id'}}`,
      `${params['id']}`,
    );
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'GET'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   */
  getPosts(options?: any): FetchArgs {
    const baseUrl = `/posts`;
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'GET'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @param id
   */
  getUser(params: {id: string}, options?: any): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error('Missing required parameter id when calling getUser');
    }
    const baseUrl = `/users/{id}`.replace(`{${'id'}}`, `${params['id']}`);
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'GET'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @summary User Use-Cases
   * @param id
   */
  getUserComments(params: {id: string}, options?: any): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error(
        'Missing required parameter id when calling getUserComments',
      );
    }
    const baseUrl = `/users/{id}/comments`.replace(
      `{${'id'}}`,
      `${params['id']}`,
    );
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'GET'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   */
  isSetup(options?: any): FetchArgs {
    const baseUrl = `/is-setup`;
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'GET'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @summary Setup
   * @param body
   */
  setup(params: {body: CmsCreateUserRequest}, options?: any): FetchArgs {
    // verify required parameter "body" is set
    if (params['body'] == null) {
      throw new Error('Missing required parameter body when calling setup');
    }
    const baseUrl = `/setup`;
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'POST'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    contentTypeHeader = {'Content-Type': 'application/json'};
    if (params['body']) {
      fetchOptions.body = JSON.stringify(params['body'] || {});
    }
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @param id
   */
  unPublishPost(params: {id: number}, options?: any): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error(
        'Missing required parameter id when calling unPublishPost',
      );
    }
    const baseUrl = `/posts/{id}`.replace(`{${'id'}}`, `${params['id']}`);
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'PUT'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
  /**
   *
   * @param id
   * @param body
   */
  updateComment(
    params: {id: number; body: CmsUpdateCommentRequest},
    options?: any,
  ): FetchArgs {
    // verify required parameter "id" is set
    if (params['id'] == null) {
      throw new Error(
        'Missing required parameter id when calling updateComment',
      );
    }
    // verify required parameter "body" is set
    if (params['body'] == null) {
      throw new Error(
        'Missing required parameter body when calling updateComment',
      );
    }
    const baseUrl = `/comments/{id}`.replace(`{${'id'}}`, `${params['id']}`);
    let urlObj = url.parse(baseUrl, true);
    let fetchOptions: RequestInit = assign({}, {method: 'PUT'}, options);

    let contentTypeHeader: Dictionary<string> = {};
    contentTypeHeader = {'Content-Type': 'application/json'};
    if (params['body']) {
      fetchOptions.body = JSON.stringify(params['body'] || {});
    }
    if (contentTypeHeader) {
      fetchOptions.headers = assign(
        {},
        contentTypeHeader,
        fetchOptions.headers,
      );
    }
    return {
      url: url.format(urlObj),
      options: fetchOptions,
    };
  },
};

/**
 * CmsApi - functional programming interface
 */
export const CmsApiFp = {
  /**
   *
   * @summary Auth Use-Cases
   * @param body
   */
  authUser(
    params: {body: CmsAuthUserRequest},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsAccessToken> {
    const fetchArgs = CmsApiFetchParamCreator.authUser(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @summary Comment CRUD
   * @param body
   */
  createComment(
    params: {body: CmsCreateCommentRequest},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsCommentRequest> {
    const fetchArgs = CmsApiFetchParamCreator.createComment(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @summary Post CRUD
   * @param body
   */
  createPost(
    params: {body: CmsCreatePostRequest},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPostRequest> {
    const fetchArgs = CmsApiFetchParamCreator.createPost(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @summary User CRD
   * @param body
   */
  createUser(
    params: {body: CmsCreateUserRequest},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsUserRequest> {
    const fetchArgs = CmsApiFetchParamCreator.createUser(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @param id
   */
  deleteComment(
    params: {id: number},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty> {
    const fetchArgs = CmsApiFetchParamCreator.deleteComment(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @param id
   */
  deletePost(
    params: {id: number},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty> {
    const fetchArgs = CmsApiFetchParamCreator.deletePost(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @param id
   */
  deleteUser(
    params: {id: string},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty> {
    const fetchArgs = CmsApiFetchParamCreator.deleteUser(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @param id
   */
  getComment(
    params: {id: number},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment> {
    const fetchArgs = CmsApiFetchParamCreator.getComment(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @summary Comment Use-Cases
   */
  getComments(
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment> {
    const fetchArgs = CmsApiFetchParamCreator.getComments(options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @param id
   */
  getPost(
    params: {id: number},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPost> {
    const fetchArgs = CmsApiFetchParamCreator.getPost(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @summary Post Use-Cases
   * @param id
   */
  getPostComments(
    params: {id: number},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment> {
    const fetchArgs = CmsApiFetchParamCreator.getPostComments(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   */
  getPosts(
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsPost> {
    const fetchArgs = CmsApiFetchParamCreator.getPosts(options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @param id
   */
  getUser(
    params: {id: string},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsUser> {
    const fetchArgs = CmsApiFetchParamCreator.getUser(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @summary User Use-Cases
   * @param id
   */
  getUserComments(
    params: {id: string},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsComment> {
    const fetchArgs = CmsApiFetchParamCreator.getUserComments(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   */
  isSetup(
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufBoolValue> {
    const fetchArgs = CmsApiFetchParamCreator.isSetup(options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @summary Setup
   * @param body
   */
  setup(
    params: {body: CmsCreateUserRequest},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<CmsUserRequest> {
    const fetchArgs = CmsApiFetchParamCreator.setup(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @param id
   */
  unPublishPost(
    params: {id: number},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty> {
    const fetchArgs = CmsApiFetchParamCreator.unPublishPost(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
  /**
   *
   * @param id
   * @param body
   */
  updateComment(
    params: {id: number; body: CmsUpdateCommentRequest},
    options?: any,
  ): (fetch?: FetchAPI, basePath?: string) => Promise<ProtobufEmpty> {
    const fetchArgs = CmsApiFetchParamCreator.updateComment(params, options);
    return (
      fetch: FetchAPI = isomorphicFetch,
      basePath: string = BASE_PATH,
    ) => {
      return fetch(basePath + fetchArgs.url, fetchArgs.options).then(
        response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        },
      );
    };
  },
};

/**
 * CmsApi - object-oriented interface
 */
export class CmsApi extends BaseAPI {
  /**
   *
   * @summary Auth Use-Cases
   * @param body
   */
  authUser(params: {body: CmsAuthUserRequest}, options?: any) {
    return CmsApiFp.authUser(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @summary Comment CRUD
   * @param body
   */
  createComment(params: {body: CmsCreateCommentRequest}, options?: any) {
    return CmsApiFp.createComment(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @summary Post CRUD
   * @param body
   */
  createPost(params: {body: CmsCreatePostRequest}, options?: any) {
    return CmsApiFp.createPost(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @summary User CRD
   * @param body
   */
  createUser(params: {body: CmsCreateUserRequest}, options?: any) {
    return CmsApiFp.createUser(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @param id
   */
  deleteComment(params: {id: number}, options?: any) {
    return CmsApiFp.deleteComment(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @param id
   */
  deletePost(params: {id: number}, options?: any) {
    return CmsApiFp.deletePost(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @param id
   */
  deleteUser(params: {id: string}, options?: any) {
    return CmsApiFp.deleteUser(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @param id
   */
  getComment(params: {id: number}, options?: any) {
    return CmsApiFp.getComment(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @summary Comment Use-Cases
   */
  getComments(options?: any) {
    return CmsApiFp.getComments(options)(this.fetch, this.basePath);
  }
  /**
   *
   * @param id
   */
  getPost(params: {id: number}, options?: any) {
    return CmsApiFp.getPost(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @summary Post Use-Cases
   * @param id
   */
  getPostComments(params: {id: number}, options?: any) {
    return CmsApiFp.getPostComments(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   */
  getPosts(options?: any) {
    return CmsApiFp.getPosts(options)(this.fetch, this.basePath);
  }
  /**
   *
   * @param id
   */
  getUser(params: {id: string}, options?: any) {
    return CmsApiFp.getUser(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @summary User Use-Cases
   * @param id
   */
  getUserComments(params: {id: string}, options?: any) {
    return CmsApiFp.getUserComments(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   */
  isSetup(options?: any) {
    return CmsApiFp.isSetup(options)(this.fetch, this.basePath);
  }
  /**
   *
   * @summary Setup
   * @param body
   */
  setup(params: {body: CmsCreateUserRequest}, options?: any) {
    return CmsApiFp.setup(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @param id
   */
  unPublishPost(params: {id: number}, options?: any) {
    return CmsApiFp.unPublishPost(params, options)(this.fetch, this.basePath);
  }
  /**
   *
   * @param id
   * @param body
   */
  updateComment(
    params: {id: number; body: CmsUpdateCommentRequest},
    options?: any,
  ) {
    return CmsApiFp.updateComment(params, options)(this.fetch, this.basePath);
  }
}

/**
 * CmsApi - factory interface
 */
export const CmsApiFactory = function(fetch?: FetchAPI, basePath?: string) {
  return {
    /**
     *
     * @summary Auth Use-Cases
     * @param body
     */
    authUser(params: {body: CmsAuthUserRequest}, options?: any) {
      return CmsApiFp.authUser(params, options)(fetch, basePath);
    },
    /**
     *
     * @summary Comment CRUD
     * @param body
     */
    createComment(params: {body: CmsCreateCommentRequest}, options?: any) {
      return CmsApiFp.createComment(params, options)(fetch, basePath);
    },
    /**
     *
     * @summary Post CRUD
     * @param body
     */
    createPost(params: {body: CmsCreatePostRequest}, options?: any) {
      return CmsApiFp.createPost(params, options)(fetch, basePath);
    },
    /**
     *
     * @summary User CRD
     * @param body
     */
    createUser(params: {body: CmsCreateUserRequest}, options?: any) {
      return CmsApiFp.createUser(params, options)(fetch, basePath);
    },
    /**
     *
     * @param id
     */
    deleteComment(params: {id: number}, options?: any) {
      return CmsApiFp.deleteComment(params, options)(fetch, basePath);
    },
    /**
     *
     * @param id
     */
    deletePost(params: {id: number}, options?: any) {
      return CmsApiFp.deletePost(params, options)(fetch, basePath);
    },
    /**
     *
     * @param id
     */
    deleteUser(params: {id: string}, options?: any) {
      return CmsApiFp.deleteUser(params, options)(fetch, basePath);
    },
    /**
     *
     * @param id
     */
    getComment(params: {id: number}, options?: any) {
      return CmsApiFp.getComment(params, options)(fetch, basePath);
    },
    /**
     *
     * @summary Comment Use-Cases
     */
    getComments(options?: any) {
      return CmsApiFp.getComments(options)(fetch, basePath);
    },
    /**
     *
     * @param id
     */
    getPost(params: {id: number}, options?: any) {
      return CmsApiFp.getPost(params, options)(fetch, basePath);
    },
    /**
     *
     * @summary Post Use-Cases
     * @param id
     */
    getPostComments(params: {id: number}, options?: any) {
      return CmsApiFp.getPostComments(params, options)(fetch, basePath);
    },
    /**
     *
     */
    getPosts(options?: any) {
      return CmsApiFp.getPosts(options)(fetch, basePath);
    },
    /**
     *
     * @param id
     */
    getUser(params: {id: string}, options?: any) {
      return CmsApiFp.getUser(params, options)(fetch, basePath);
    },
    /**
     *
     * @summary User Use-Cases
     * @param id
     */
    getUserComments(params: {id: string}, options?: any) {
      return CmsApiFp.getUserComments(params, options)(fetch, basePath);
    },
    /**
     *
     */
    isSetup(options?: any) {
      return CmsApiFp.isSetup(options)(fetch, basePath);
    },
    /**
     *
     * @summary Setup
     * @param body
     */
    setup(params: {body: CmsCreateUserRequest}, options?: any) {
      return CmsApiFp.setup(params, options)(fetch, basePath);
    },
    /**
     *
     * @param id
     */
    unPublishPost(params: {id: number}, options?: any) {
      return CmsApiFp.unPublishPost(params, options)(fetch, basePath);
    },
    /**
     *
     * @param id
     * @param body
     */
    updateComment(
      params: {id: number; body: CmsUpdateCommentRequest},
      options?: any,
    ) {
      return CmsApiFp.updateComment(params, options)(fetch, basePath);
    },
  };
};
