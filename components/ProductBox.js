import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";

const ProductWrapper = styled.div`

`;

const WhiteBox = styled.div`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    align-items: center;
    justify-context: center;
    border-radius: 10px;

    img{
        max-width: 100%;
        max-height: 120px;
    }
`;

const Title = styled.h2`
    font-weight: normal;
    font-size: 0.9rem;
    margin: 0;
`;

const ProductInfoBox = styled.div`
    margin-top: 10px;
`;

const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;

const Price = styled.div`
    font-size: 1.5 rem;
`;

export default function ProductBox({_id,title,description,price,images}) {
    return (
        <ProductWrapper>
            <WhiteBox>
                <div key={_id}>
                    <img src={images[0]} alt=""/>
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title>
                    {title}
                </Title>
                <PriceRow>
                    <Price>
                        Rs. {price}
                    </Price>
                    <Button $primary>
                        <CartIcon/>
                    </Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    );
}