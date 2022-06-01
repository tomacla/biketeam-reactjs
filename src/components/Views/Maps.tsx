import { useCurrentStateAndParams } from '@uirouter/react';
import React, { FC, memo, useCallback, useEffect } from 'react';
import { Map } from '../../redux/interfaces';
import { selectDataMapSorts, selectDataMapTypes, selectDataWindDirections, selectTeamMaps } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { MapFilterFormOptions, SelectOption } from '../Team/Map/interfaces';
import MapFilterForm from '../Team/Map/MapFilterForm';
import MapList from '../Team/Map/MapList';
import { SubmitFormHandler } from '../Teams/interfaces';
import { FormContainer, ViewContainer } from './common';
import {uniq} from 'lodash';
interface MapsPropsResults {
  maps: Map[];
  options: MapFilterFormOptions;
  handleSubmitForm: SubmitFormHandler;
}

function toMapTags(maps: Map[]): string[] {
  return maps.reduce<string[]>((acc, map) => {
    return [...acc, ...map.tags]
  }, [])
}

function toSelectOption(values: string[]): SelectOption[] {
  return values.map((value) => ({
    label: value, // TODO: Ajouter le label
    value: value
  }));
}

export const useMapsProps = (): MapsPropsResults => {
  const dispatch = useActionsDispatch();
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    dispatch(actions.getTeamMapsAsync({ teamId }))
  }, [dispatch, teamId]);
  const maps = useMemoizedSelector(selectTeamMaps);
  const winds = useMemoizedSelector(selectDataWindDirections);
  const types = useMemoizedSelector(selectDataMapTypes);
  const sorts = useMemoizedSelector(selectDataMapSorts);
  const tags = uniq(toMapTags(maps));
  const handleSubmitForm = useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    event.preventDefault();
    event.stopPropagation();
    // eslint-disable-next-line no-console
    console.log({
      teamId,
      lowerDistance: form.elements['lowerDistance'].value,
      upperDistance: form.elements['upperDistance'].value,
      lowerPositiveElevation: form.elements['lowerPositiveElevation'].value,
      upperPositiveElevation: form.elements['upperPositiveElevation'].value,
      sort: form.elements['sort'].value,
      windDirection: form.elements['windDirection'].value,
      type: form.elements['type'].value,
      tags: form.elements['tags'].value,
    })
    dispatch(actions.getTeamMapsAsync(
      {
        teamId,
        lowerDistance: form.elements['lowerDistance'].value,
        upperDistance: form.elements['upperDistance'].value,
        lowerPositiveElevation: form.elements['lowerPositiveElevation'].value,
        upperPositiveElevation: form.elements['upperPositiveElevation'].value,
        sort: form.elements['sort'].value,
        windDirection: form.elements['windDirection'].value,
        type: form.elements['type'].value,
        tags: form.elements['tags'].value,
      }))
  }, [dispatch, teamId])
  return {
    maps,
    options: {
      types: toSelectOption(types),
      winds: toSelectOption(winds),
      sorts: toSelectOption(sorts),
      tags: toSelectOption(tags)
    },
    handleSubmitForm
  }
}

const Maps: FC = () => {
  const { maps, handleSubmitForm, options } = useMapsProps();
  return (
    <ViewContainer>
      <FormContainer>
        <MapFilterForm onSubmit={handleSubmitForm} options={options} />
      </FormContainer>
      <MapList maps={maps} />
    </ViewContainer>)
}

export default memo(Maps);
