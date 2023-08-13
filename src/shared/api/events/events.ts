import {commonApi} from "@/shared/api";
import {EventsRequest, EventsResponse} from "@/shared/api/entities/entities";

export const Events = commonApi.injectEndpoints({
    endpoints: build => ({
        getEvents: build.query<EventsResponse, EventsRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const {orderBy, lat, lon, interests} = arg;
                if (orderBy == "orderByNearby" && (!lat || !lon)) {
                    return {error: {status: 500, statusText: "", data: ""}}
                }
                const result = await fetchWithBQ({
                    url: '/events',
                    method: 'GET',
                    params: {...arg, interests: interests?.join(',') || ''}
                });
                const data = result.data as EventsResponse;
                if (result.error) return {error: result.error};
                return {data};
            },
        })
    }),
    overrideExisting: false
})

export const {useGetEventsQuery} = Events;