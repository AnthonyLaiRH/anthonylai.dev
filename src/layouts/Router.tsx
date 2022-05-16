import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from '../pages/Home';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;


const Router = (): JSX.Element => {
  return (
    <Wrapper>
      <PageContainer>
        <Switch>
          <Route path="*">
            <HomePage />
          </Route>
        </Switch>
      </PageContainer>
    </Wrapper>
  )
}

export default Router;
