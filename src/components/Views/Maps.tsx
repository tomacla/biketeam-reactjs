import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { Map } from '../../redux/interfaces';
import { selectDataMapSorts, selectDataMapTypes, selectDataWindDirections, selectNbPages, selectTeamMaps, selectTeamTags } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { MapFilterFormOptions, SelectOption } from '../Team/Map/interfaces';
import MapFilterForm from '../Team/Map/MapFilterForm';
import MapList from '../Team/Map/MapList';
import { SubmitFormHandler } from '../Teams/interfaces';
import { FormContainer, ViewContainer } from './common';
import { Tag } from 'react-tag-autocomplete';
import { useTeamId } from '../common/hooks';

interface MapsPropsResults {
  nbPages: number;
  page: number;
  maps: Map[];
  options: MapFilterFormOptions;
  localTags: Tag[];
  handleSubmitForm: SubmitFormHandler;
  handleFirstPageClick: () => void;
  handleLastPageClick: () => void;
  handlePrevPageClick: () => void;
  handleNextPageClick: () => void;
  handleAddLocalTag: (tag: Tag) => void;
  handleDeleteLocalTag: (index: number) => void;
}

function toSelectOption(values: string[]): SelectOption[] {
  return values.map((value) => ({
    label: value,
    value: value
  }));
}

export const useMapsProps = (): MapsPropsResults => {
  const dispatch = useActionsDispatch();
  const teamId = useTeamId();
  const [page, setPage] = useState(0);
  useEffect(() => {
    if (teamId) dispatch(actions.getTeamMapsAsync({ teamId, page: page }))
  }, [dispatch, page, teamId]);
  const maps = useMemoizedSelector(selectTeamMaps);
  const winds = useMemoizedSelector(selectDataWindDirections);
  const types = useMemoizedSelector(selectDataMapTypes);
  const sorts = useMemoizedSelector(selectDataMapSorts);
  const nbPages = useMemoizedSelector(selectNbPages);
  const tags = useMemoizedSelector(selectTeamTags);
  const tagOptions = tags.map((tag) => ({ id: tag, name: tag }))
  const [localTags, setLocalTags] = useState<Tag[]>([]);
  const handleSubmitForm = useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    event.preventDefault();
    event.stopPropagation();
    if (teamId) {
      dispatch(actions.getTeamMapsAsync(
        {
          page,
          teamId,
          lowerDistance: form.elements['lowerDistance'].value,
          upperDistance: form.elements['upperDistance'].value,
          lowerPositiveElevation: form.elements['lowerPositiveElevation'].value,
          upperPositiveElevation: form.elements['upperPositiveElevation'].value,
          sort: form.elements['sort'].value,
          windDirection: form.elements['windDirection'].value,
          type: form.elements['type'].value,
          tags: localTags.map(({name}) => (name)),
        }))
    }
  }, [dispatch, localTags, page, teamId]);
  const handleFirstPageClick = useCallback(() => {
    setPage(0);
  }, [])
  const handleLastPageClick = useCallback(() => {
    setPage(1);
  }, [])
  const handlePrevPageClick = useCallback(() => {
    if (page !== 0) {
      setPage(page - 1);
    }
  }, [page])
  const handleNextPageClick = useCallback(() => {
    if (page !== nbPages - 1) {
      setPage(page + 1)
    }
  }, [nbPages, page])

  const handleAddLocalTag = useCallback((tag: Tag) => {
    setLocalTags([...localTags, tag])
  }, [localTags])
  const handleDeleteLocalTag = useCallback((index: number) => {
    setLocalTags(localTags.filter((_, i) => i !== index))
  }, [localTags])

  return {
    nbPages,
    page,
    maps,
    options: {
      types: toSelectOption(types),
      winds: toSelectOption(winds),
      sorts: toSelectOption(sorts),
      tags: tagOptions
    },
    localTags,
    handleSubmitForm,
    handleFirstPageClick,
    handleLastPageClick,
    handlePrevPageClick,
    handleNextPageClick,
    handleAddLocalTag,
    handleDeleteLocalTag
  }
}

const Maps: FC = () => {
  const { maps, handleSubmitForm, options, handleFirstPageClick,
    handleLastPageClick,
    handlePrevPageClick,
    handleNextPageClick, page, localTags, handleAddLocalTag, handleDeleteLocalTag, nbPages } = useMapsProps();
  return (
    <ViewContainer>
      <FormContainer>
        <MapFilterForm
          onSubmit={handleSubmitForm}
          options={options}
          localTags={localTags}
          onAddLocalTag={handleAddLocalTag}
          onDeleteLocalTag={handleDeleteLocalTag} />
      </FormContainer>
      <MapList
        nbPages={nbPages}
        page={page}
        maps={maps}
        onFirstPageClick={handleFirstPageClick}
        onLastPageClick={handleLastPageClick}
        onNextPageClick={handleNextPageClick}
        onPrevPageClick={handlePrevPageClick} />
    </ViewContainer>)
}

export default memo(Maps);
