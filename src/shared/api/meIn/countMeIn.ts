import {commonApi} from "@/shared/api";
import {InterestsRequest, InterestsResponse} from "@/shared/api/entities/entities";

export const MeIn = commonApi.injectEndpoints({
    endpoints: build => ({
        setMeIn: build.mutation<any, {id: string}>({
            query: (arg) => ({
                url: `/countMeIn/${(window.localStorage.getItem("meIn") || '')?.indexOf(arg.id) >= 0 ? '' : arg.id}`,
                method: 'POST'
            }),
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const meIn = (window.localStorage.getItem('meIn') || '').split(',').filter(Boolean);
                    console.log(meIn)
                    if (meIn.includes(data.id)) {
                        window.localStorage.setItem('meIn', meIn.filter(k => k !== data.id).join(','))
                    } else {
                        meIn.push(data.id);
                        console.log(meIn, 123, window.localStorage)
                        window.localStorage.setItem('meIn', meIn.join(','))
                    }
                } catch (e: any) {
                    const meIn = (window.localStorage.getItem('meIn') || '').split(',').filter(Boolean);

                    if (meIn.includes(data.id)) {
                        window.localStorage.setItem('meIn', meIn.filter(k => k !== data.id).join(','))
                        const error: string = e?.error?.error?.text || e?.error?.error;
                    }
                }
            },
            invalidatesTags: []
        })
    }),
    overrideExisting: false,
})

export const {useSetMeInMutation} = MeIn;