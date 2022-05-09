import { UIView } from '@uirouter/react';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { actions, useActionsDispatch } from '../redux/store';

const Container = styled.div`
display: flex;
`

const useLoadCountries = (): void => {
  const dispatch = useActionsDispatch()
  useEffect(() => {
    dispatch(actions.getCountriesAsync())
  }, [dispatch])
}

const MainContainer: FC = () => {
  useLoadCountries();
  return (
    <Container>
      <UIView />
    </Container>
  )
}

export default MainContainer;
