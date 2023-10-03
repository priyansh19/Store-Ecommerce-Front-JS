import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0px;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .9rem;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    img {
        max-width: 100%;
    }
`;

const Columns = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 25px;
`;

export default function Featured({product}) {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Columns>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc> {product.description} </Desc>
                            <ButtonWrapper>
                                <ButtonLink href={'/products/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                                <Button $primary>
                                    <CartIcon/>
                                    Add to cart
                                </Button>
                            </ButtonWrapper>
                        </div>
                    </Columns>
                    <Columns>
                        <img src="https://store-admin-bucket-01.s3.amazonaws.com/1696183438304.webp" alt=""/>
                    </Columns>
                </Wrapper>
                
            </Center>
        </Bg>
    );
}