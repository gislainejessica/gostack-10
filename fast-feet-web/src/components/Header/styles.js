import styled from 'styled-components'
import cores from '../../styles/colors'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  
  padding-left: 30px;
  padding-right: 30px;

  width: 100%;
  height: 64px;

  background-color: ${cores.branco};
  border-block-end: 1px solid ${cores.cinza};

  nav {
      display: flex;
      flex-direction: row;
      color: #999;
      font-weight: normal;
  }
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`

export const Out = styled.div`
  p {
    font-size: 14px;
    font-weight: bold;
    color: #666;
    margin-bottom: 4px;
  }
  button {
    font-size: 14px;
    font-weight: normal;
    color: #DE3B3B;
    border: none;
    background: none;
  }
 
`

export const Navegation = styled(NavLink)`
    margin: 10px;
    color: ${props => props.active ? '#333': '#999' };
    text-decoration: none;
    
    transition: opacity 0.2s;
    &:hover {
      opacity: ${props => props.active ? 1: 0.7 };
    }
    p {
      font-weight: bold;
    }
    
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
`
