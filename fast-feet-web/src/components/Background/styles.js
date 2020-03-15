import styled from 'styled-components'
import cores from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100%;
  min-width: 100%;
  background-color: ${cores.background};
`