import {commonApi} from "@/shared/api";
import {InterestsRequest, InterestsResponse} from "@/shared/api/entities/entities";

export const Interests = commonApi.injectEndpoints({
    endpoints: build => ({
        getInterests: build.query<InterestsResponse, InterestsRequest>({
            query: (arg) => ({
                url: "/interests",
                params: arg
            })
        })
    }),
    overrideExisting: false,
})

export const {useGetInterestsQuery} = Interests;