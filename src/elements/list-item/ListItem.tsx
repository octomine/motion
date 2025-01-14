import { FC, PropsWithChildren } from "react";
import { Container } from "./ListItem.styled";
import { variants } from "./ListItem.variants";

const ListItem: FC<PropsWithChildren> = ({ children }) => {
    return <Container initial='init' variants={variants}>{children}</Container>
}

export default ListItem;
