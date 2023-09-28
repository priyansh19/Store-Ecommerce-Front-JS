import styled, {css} from "styled-components";

const StyledBtn = styled.button`
    background-color: #5542F6;
    border: 0;
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    margin: 5px;

    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
    `}
`;  

export default function PrimaryBtn({children, ...rest}) {
    return (
        <StyledBtn {...rest}>{children}</StyledBtn>
    );
}