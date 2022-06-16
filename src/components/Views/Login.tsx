import React, {FC, memo} from 'react';
import { ViewContainer } from './common';
import {Card, Col, Row, Alert} from 'react-bootstrap';
import stravaLogo from '../../assets/img/stravalogo.jpg';
import googleLogo from '../../assets/img/googlelogo.png';
import facebookLogo from '../../assets/img/facebooklogo.png';
import {API_URL} from '../common/constants';
import {useSelector} from 'react-redux';
import {selectAuth} from '../../redux/selectors';
import {actions, useActionsDispatch} from '../../redux/store';
import {useMount} from 'react-use';
import {useRouter} from '@uirouter/react';
import styled, {css} from 'styled-components';

const styledButton = css`
  padding: 10px; 
  text-decoration: none; 
  font-weight: bold; 
  background-color: #ffffff; 
  border-radius: 5px; 
  width: 275px;
`;
const StravaButton = styled.a`
  ${styledButton}
  color:#fb5304; 
  border:1px solid #fb5304; 
  &:hover {color: #fb5304};
`;
const GoogleButton = styled.a`
  ${styledButton}
  color: #565656;
  border: 1px solid #565656;
  &:hover {color: #565656};
`;
const FacebookButton = styled.a`
  ${styledButton}
  color: #1877F2;
  border: 1px solid #1877F2;
  &:hover {color: #1877F2};
`;

const Login: FC = () => {

  const dispatch = useActionsDispatch();
  const router = useRouter();
  const auth = useSelector(selectAuth);
  const currentUrl = window.location.href.split('?')[0];

  if (auth.data) {
    router.stateService.go('home');
  }

  useMount(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const credential: string|null = queryParams.get('sso');
    if (credential && credential.length > 0) {
      dispatch(actions.authenticateAsync({credential}));
    }
  })

  return (
    <ViewContainer>
      <Row className="mt-4 justify-content-center">
        <Col xs="12" md="6">
          <Card>
            <Card.Header>Connexion</Card.Header>
            <Card.Body>
              {auth.loading ? (
                <p className="lead">
                  Authentification...
                </p>
              ) : (
                <>
                  {auth.error && (
                    <Alert variant="danger">
                      Une erreur est survenue, veuillez réessayer
                    </Alert>
                  )}
                  <p className="lead">
                    Utiliser votre compte Strava, Facebook ou Google pour vous connecter à Biketeam et accéder à
                    toutes les fonctionnalités.
                  </p>
                  <div className="mb-3">
                    <StravaButton
                      className="d-flex flex-row justify-content-between"
                      href={`${API_URL}/oauth2/authorization/strava?requestUri=${currentUrl}`}
                      role="button"
                    >
                      <img src={stravaLogo} width="25" alt="Strava logo" />
                      <span>Connexion avec Strava</span>
                    </StravaButton>
                  </div>
                  <div className="mb-3">
                    <GoogleButton
                      className="d-flex flex-row justify-content-between"
                      href={`${API_URL}/oauth2/authorization/google?requestUri=${currentUrl}`}
                      role="button"
                    >
                      <img src={googleLogo} width="25" alt="Google logo" />
                      <span>Connexion avec Google</span>
                    </GoogleButton>
                  </div>
                  <div className="mb-3">
                    <FacebookButton
                      className="d-flex flex-row justify-content-between"
                      href={`${API_URL}/oauth2/authorization/facebook?requestUri=${currentUrl}`}
                      role="button"
                    >
                      <img src={facebookLogo} width="25" alt="Facebook logo" />
                      <span>Connexion avec Facebook</span>
                    </FacebookButton>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </ViewContainer>
  );
};

export default memo(Login);
