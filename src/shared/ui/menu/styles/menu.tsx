import styled from "styled-components";
import {Menu as AntdMenu, MenuProps as AntMenuProps} from "antd";

interface MenuProps {
    onClick?(e: { key: string | number, keyPath: (string | number)[] }): void
    selectedKeys?: AntMenuProps['selectedKeys']
}


const baseItems = [
    {label: "События", key: "home"},
    {label: "Посмотреть на карте", key: "map"},
];

const Menu = ({onClick, selectedKeys}: MenuProps) => {
    return (
        <StyledMenu
            onClick={onClick}
            mode="horizontal"
            items={baseItems}
            selectedKeys={selectedKeys}
        />
    );
};

const StyledMenu = styled(AntdMenu)`
  
`;


export {Menu};