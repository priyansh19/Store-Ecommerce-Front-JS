import styled, {css} from "styled-components";

const StyledBtn = styled.button`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    svg {
        height: 14px;
        margin-right: 5px;
    }
    ${props => props.white === 'true' && !props.outline === 'true' && css`
        background-color: #fff;
        color: #000;
    `}
    
    ${props => props.white === 'true' && props.outline === 'true' && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}

    ${props => props.primary === 'true' && css`
        background-color: #5542F6;
        border: 1px solid #5542F6;
        color: #fff;
    `}
    ${props => props.size === 'l' && css`
        font-size: 1.1rem;
        padding: 10px;

        svg {
            height: 20px;
            margin-right: 5px;
        }
    `}
`;  

export default function Button({children, ...rest}) {
    return (
        <StyledBtn {...rest}>{children}</StyledBtn>
    );
}