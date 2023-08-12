import {
    BaseQueryFn,
    createApi, FetchArgs,
    fetchBaseQuery, FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

//
export const BASE_URL = process.env['NEXT_PUBLIC_BASE_URL'];
//
const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    mode: "no-cors",
    prepareHeaders: headers => {
        headers.set('Access-Control-Allow-Credentials', 'true');
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods','GET,HEAD,PUT,PATCH,POST,DELETE')
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        return headers;
    },
});
// const customBaseQuery: BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//     await mutex.waitForUnlock();
//     let result = await baseQuery(args, api, extraOptions);
//     if (result.error?.status === 401) {
//         if (!mutex.isLocked()) {
//             const release = await mutex.acquire();
//             try {
//                 const refreshToken = getToken({type: "refreshToken"});
//                 if (!refreshToken) {
//                     window.location.href = '/login';
//                 }
//                 const refreshResult = await baseQuery(
//                     {url: '/refresh', method: "post", body: {refreshToken: refreshToken}},
//                     api,
//                     extraOptions
//                 );
//                 const data = refreshResult.data as RefreshTokenResponse;
//                 if (data) {
//                     const {setAuth} = loginSlice.actions;
//                     setToken({type: "token", value: data.token});
//                     api.dispatch(setAuth(true));
//                     result = await baseQuery(args, api, extraOptions);
//                 } else {
//                     setToken({type: "token", value: ""});
//                     setToken({type: "refreshToken", value: ""});
//                     window.location.href = '/login';
//                 }
//             } finally {
//                 release();
//             }
//         } else {
//             await mutex.waitForUnlock();
//             result = await baseQuery(args, api, extraOptions);
//         }
//     }
//
//     return result;
// };

export const commonApi = createApi({
    reducerPath: 'api',
    tagTypes: [],
    baseQuery: baseQuery,
    endpoints: _ => ({}),
});