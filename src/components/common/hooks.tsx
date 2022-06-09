import { useCurrentStateAndParams } from '@uirouter/react'
import { useEffect, useMemo } from 'react'
import { selectTeamDetails } from '../../redux/selectors'
import { actions, useActionsDispatch } from '../../redux/store'
import { useMemoizedSelector } from '../../redux/useMemoizedSelector'

export const useLoadTeams = (pageSize?: string): void => {
  const dispatch = useActionsDispatch()
  useEffect(() => {
    dispatch(actions.getTeamsAsync({ pageSize }))
  }, [dispatch, pageSize])
}

export function useTeamId(): string | undefined {
  const dispatch = useActionsDispatch();
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  const details = useMemoizedSelector(selectTeamDetails)
  useEffect(() => {
    if (teamId && details === undefined) {
      dispatch(actions.getTeamDetailsAsync({ teamId }));
    }
  }, [details, dispatch, teamId])
  return useMemo(() => teamId, [teamId]);
}
