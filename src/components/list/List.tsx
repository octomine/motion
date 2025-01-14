import { FC, PropsWithChildren } from "react"
import { Container } from "./List.styled";
import { variants } from "./List.variants";

const List: FC<PropsWithChildren> = ({ children }) => {
    return <Container initial='init' variants={variants}>{children}</Container>
}

export default List;
