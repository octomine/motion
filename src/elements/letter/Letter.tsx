import { FC, PropsWithChildren } from "react";
import { Container } from "./Letter.styled";

const Letter: FC<PropsWithChildren> = ({ children }) => {
    return <Container
        whileHover='touched'
        transition={{ duration: .2, ease: 'easeInOut' }}>
        {children}
    </Container>
}

export default Letter;
