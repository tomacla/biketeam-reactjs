import { useEffect } from 'react'
import { actions, useActionsDispatch } from '../../redux/store'

export const useLoadTeams = (pageSize?: string): void => {
  const dispatch = useActionsDispatch()
  useEffect(() => {
    dispatch(actions.getTeamsAsync({ pageSize }))
  }, [dispatch, pageSize])
}
