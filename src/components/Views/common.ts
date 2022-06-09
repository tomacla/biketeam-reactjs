import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const ViewContainer = styled(Container)`
  min-height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 0.5rem;
  border: 1px solid #dee2e6 !important;
  width: 100%;
`;
