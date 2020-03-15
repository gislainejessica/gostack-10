import styled from 'styled-components';

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => (props.type === 'primary' ? '#7D40E7' : '#CCCCCC')};
    color: #fff;
    font-family: Roboto-Bold sans-serif;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 6px 12px;
  
    transition: opacity 0.1s;
    height: 36px;
    width: 94px;
    margin-right: 16px;

    svg {
      margin: 0 10px 0 0;
    }
    &:hover {
      opacity: 0.8;
    }
`;
