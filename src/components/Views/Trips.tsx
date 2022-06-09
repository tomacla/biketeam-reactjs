import React, { FC, memo, useCallback, useEffect } from 'react';
import { TeamTrip } from '../../redux/interfaces';
import { selectTeamTrips } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { useTeamId } from '../common/hooks';
import PeriodFilterForm from '../common/PeriodFilterForm';
import TripList from '../Team/Trip/TripList';
import { SubmitFormHandler } from '../Teams/interfaces';
import { FormContainer, ViewContainer } from './common';

interface RidesPropsResults {
  trips: TeamTrip[];
  handleSubmitForm: SubmitFormHandler;
}

export const useRidesProps = (): RidesPropsResults => {
  const dispatch = useActionsDispatch();
  const teamId = useTeamId();
  useEffect(() => {
    if (teamId) dispatch(actions.getTeamTripsAsync({ teamId }));
  }, [dispatch, teamId]);
  const trips = useMemoizedSelector(selectTeamTrips);
  const handleSubmitForm =  useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    if (teamId) {
      dispatch(actions.getTeamTripsAsync(
        {
          teamId,
          from: form.elements['from'].value,
          to: form.elements['to'].value,
        }))
    }
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
      <FormContainer>
        <PeriodFilterForm onSubmit={handleSubmitForm}/>
      </FormContainer>
      <TripList trips={trips}/>
    </ViewContainer>)
}

export default memo(Trips);
