import styled from "styled-components"
import Center from "./Center";

const Headline = styled.div`
    color: #aaa;
    display: flex;
`;

export default function NewProducts() {
    return (
        <Center>
            <Headline> New Products </Headline>
        </Center>
    )
}