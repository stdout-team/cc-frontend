import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {setupStore} from "@/shared/store";

export default function App({Component, pageProps}: AppProps) {
    const store = setupStore();
    return <Provider store={store}><Component {...pageProps} /></Provider>
}
