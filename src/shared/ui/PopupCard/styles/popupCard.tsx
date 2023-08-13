import styled from "styled-components";
import Card, {CardProps} from "@/shared/ui/Card";

const PopupPreview = styled.div<{ bgImage: string }>`
  width: 30px;
  height: 30px;
  position: absolute;
  transform: translate(-50%, -100%);
  border-radius: 50%;
  aspect-ratio: 1 / 1;

  background-image: url("${props => props.bgImage}");
  background-size: contain;

  & > div {
    transition: all 0.5s;
    position: absolute;
    transform: translate(-45%, -100%) scale(0);
    transform-origin: bottom;

  }

  &:hover > div {
    transform: translate(-45%, -105%) scale(1);
  }
`;

export function PopupCard(props: CardProps) {
    return (
        <PopupPreview
            bgImage={props.imgLink}>
            <Card {...props} id={`${props.id}-card`}/>
        </PopupPreview>
    )
}