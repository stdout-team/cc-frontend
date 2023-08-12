import {Tag as TagAntd, TagProps} from "antd"
import styled from "styled-components";

interface Tag extends TagProps {

}

export const Tag = (props: Tag) => {
    return <TagStyled bordered={false} {...props}>{props.children}</TagStyled>
}

const TagStyled = styled(TagAntd)`
    
`;