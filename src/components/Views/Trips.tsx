import { useCurrentStateAndParams } from '@uirouter/react';
import React, { FC, memo, useCallback, useEffect } from 'react';
import { TeamTrip } from '../../redux/interfaces';
import { selectTeamTrips } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { ViewContainer } from './common';
import TripList from '../Team/Trip/TripList'
import PeriodFilterForm from '../common/PeriodFilterForm';
import { SubmitFormHandler } from '../Teams/interfaces';
import styled from 'styled-components';

const TripFormContainer = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface RidesPropsResults {
  trips: TeamTrip[];
  handleSubmitForm: SubmitFormHandler;
}

export const useRidesProps = (): RidesPropsResults => {
  const dispatch = useActionsDispatch();
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    dispatch(actions.getTeamTripsAsync({ teamId }))
  }, [dispatch, teamId]);
  const trips = useMemoizedSelector(selectTeamTrips);
  const handleSubmitForm =  useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    dispatch(actions.getTeamTripsAsync(
      {
        teamId,
        from: form.elements['from'].value,
        to: form.elements['to'].value,
      }))
  }, [dispatch, teamId])
  return {
    trips,
    handleSubmitForm
  }
}

const Trips: FC = () => {
  const {trips, handleSubmitForm} = useRidesProps();
  return (
    <ViewContainer>
      <TripFormContainer>
        <PeriodFilterForm onSubmit={handleSubmitForm}/>
      </TripFormContainer>
      <TripList trips={trips}/>
    </ViewContainer>)
}

export default memo(Trips);
