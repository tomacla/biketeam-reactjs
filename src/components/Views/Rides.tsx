import { useCurrentStateAndParams } from '@uirouter/react';
import React, { FC, memo, useCallback, useEffect } from 'react';
import { TeamRide } from '../../redux/interfaces';
import { selectTeamRides } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import PeriodFilterForm from '../common/PeriodFilterForm';
import RideList from '../Team/Ride/RideList';
import { SubmitFormHandler } from '../Teams/interfaces';
import { FormContainer, ViewContainer } from './common';
interface RidesPropsResults {
  rides: TeamRide[];
  handleSubmitForm: SubmitFormHandler;
}

export const useRidesProps = (): RidesPropsResults => {
  const dispatch = useActionsDispatch();
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    // dispatch(actions.getTeamDetailsAsync({ teamId }));
    dispatch(actions.getTeamRidesAsync({ teamId }))
  }, [dispatch, teamId]);
  const rides = useMemoizedSelector(selectTeamRides);
  const handleSubmitForm = useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    dispatch(actions.getTeamRidesAsync(
      {
        teamId,
        from: form.elements['from'].value,
        to: form.elements['to'].value,
      }))
  }, [dispatch, teamId])
  return {
    rides,
    handleSubmitForm
  }
}

const Rides: FC = () => {
  const { rides, handleSubmitForm } = useRidesProps();
  return (
    <ViewContainer>
      <FormContainer>
        <PeriodFilterForm onSubmit={handleSubmitForm} />
      </FormContainer>
      <RideList rides={rides} />
    </ViewContainer>)
}

export default memo(Rides);
