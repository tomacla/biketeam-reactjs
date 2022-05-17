import React, { FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import TeamList from '../Teams/TeamList';
import { Country, Team } from '../../redux/interfaces';
import { selectCountries, selectTeams } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { SubmitFormHandler } from '../Teams/interfaces';
import TeamFilterForm from '../Teams/TeamFilterForm';
import { useLoadTeams } from '../common/hooks';
import { ViewContainer } from './common';

const TeamFormContainer = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TeamsPropsResults {
  countries: Country[];
  teams: Team[];
  handleSubmitForm: SubmitFormHandler
}

function useTeamsProps(): TeamsPropsResults {
  useLoadTeams();
  const dispatch = useActionsDispatch();
  const countries = useMemoizedSelector(selectCountries);
  const teams = useMemoizedSelector(selectTeams);
  return {
    teams,
    countries,
    handleSubmitForm: useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
      const form = event.currentTarget
      event.preventDefault()
      event.stopPropagation()
      dispatch(actions.getTeamsAsync(
        {
          name: form.elements['name'].value,
          city: form.elements['city'].value,
          country: form.elements['country'].value
        }))
    }, [dispatch])
  };
}


const Teams: FC = () => {
  const { teams, countries, handleSubmitForm } = useTeamsProps();
  return (
    <ViewContainer>
      <TeamFormContainer>
        <TeamFilterForm onSubmit={handleSubmitForm} countries={countries} />
      </TeamFormContainer>
      <TeamList teams={teams} />
    </ViewContainer>
  )
}

export default memo(Teams);
