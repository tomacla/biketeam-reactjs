import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import TeamList from '../Teams/TeamList';
import { Country, Team } from '../../redux/interfaces';
import { selectCountries, selectNbTeamPages, selectTeams } from '../../redux/selectors';
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
  nbPages: number;
  page: number;
  handleSubmitForm: SubmitFormHandler;
  setPage: (page: number) => void;
}

function useTeamsProps(): TeamsPropsResults {
  useLoadTeams();
  const dispatch = useActionsDispatch();
  const countries = useMemoizedSelector(selectCountries);
  const teams = useMemoizedSelector(selectTeams);
  const [page, setPage] = useState(0);
  const nbPages = useMemoizedSelector(selectNbTeamPages);
  useEffect(() => {
    dispatch(actions.getTeamsAsync({ page: page }))
  }, [dispatch, page]);
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
          country: form.elements['country'].value,
          page
        }))
    }, [dispatch, page]),
    page,
    nbPages,
    setPage
  };
}


const Teams: FC = () => {
  const {
    teams,
    countries,
    handleSubmitForm,
    nbPages,
    page,
    setPage } = useTeamsProps();
  return (
    <ViewContainer>
      <TeamFormContainer>
        <TeamFilterForm onSubmit={handleSubmitForm} countries={countries} />
      </TeamFormContainer>
      <TeamList teams={teams} withPagination={true} nbPages={nbPages} page={page} setPage={setPage} />
    </ViewContainer>
  )
}

export default memo(Teams);
