import { useCurrentStateAndParams } from '@uirouter/react';
import React, { FC, memo, useEffect } from 'react';
import { Map } from '../../redux/interfaces';
import { selectTeamMaps } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import MapList from '../Team/Map/MapList';
import { ViewContainer } from './common';
interface MapsPropsResults {
  maps: Map[];
  // handleSubmitForm: SubmitFormHandler;
}

// const RideFormContainer = styled.div`
//   margin: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export const useMapsProps = (): MapsPropsResults => {
  const dispatch = useActionsDispatch();
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    dispatch(actions.getTeamMapsAsync({ teamId }))
  }, [dispatch, teamId]);
  const maps = useMemoizedSelector(selectTeamMaps);
  // const handleSubmitForm =  useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
  //   const form = event.currentTarget
  //   event.preventDefault()
  //   event.stopPropagation()
  //   dispatch(actions.getTeamMapsAsync(
  //     {
  //       teamId,
  //       from: form.elements['from'].value,
  //       to: form.elements['to'].value,
  //     }))
  // }, [dispatch, teamId])
  return {
    maps,
    // handleSubmitForm
  }
}

const Maps: FC = () => {
  const { maps } = useMapsProps();
  return (
    <ViewContainer>
      {/* <RideFormContainer>
        <PeriodFilterForm onSubmit={handleSubmitForm}/>
        </RideFormContainer> */}
      <MapList maps={maps} />
    </ViewContainer>)
}

export default memo(Maps);
