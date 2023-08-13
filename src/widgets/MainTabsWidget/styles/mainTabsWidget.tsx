import {useState} from "react";
import Menu from "@/shared/ui/menu";
import {useRouter} from "next/router";

export function MainTabsWidget() {
    const router = useRouter()
    const [keys, setKeys] = useState<string[]>([router.pathname.replace('/', '') || 'home'])
    const menuClickHandler = (e: { key: string | number }) => {
        setKeys([e.key.toString()])
        switch (e.key) {
            case "home":
                router.push('/');
                break;
            case "map":
                router.push('/map');
                break
        }
    }
    return (
        <Menu selectedKeys={keys} onClick={menuClickHandler}/>
    )
}