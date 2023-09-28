import styled from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./PrimaryBtn";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0px;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .9rem;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 30px;

    img {
        max-width: 100%;
    }
`;

const Columns = styled.div`
    display: flex;
    align-items: center;
`;

export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Columns>
                        <div>
                            <Title> Pro Anywhere</Title>
                            <Desc> The MacBook Pro is a premium line of laptop computers designed and manufactured by Apple Inc. It is renowned for its exceptional performance, sleek design, and cutting-edge technology. </Desc>
                            <PrimaryBtn>Read more</PrimaryBtn>
                            <PrimaryBtn size="l">Add to cart</PrimaryBtn>
                        </div>
                    </Columns>
                    <Columns>
                        <img src="https://store-admin-bucket-01.s3.amazonaws.com/1695889833007.webp" alt=""/>
                    </Columns>
                </Wrapper>
                
            </Center>
        </Bg>
    );
}