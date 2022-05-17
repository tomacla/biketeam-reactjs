import { useEffect } from 'react'
import { actions, useActionsDispatch } from '../../redux/store'

export const useLoadTeams = (): void => {
  const dispatch = useActionsDispatch()
  useEffect(() => {
    dispatch(actions.getTeamsAsync({}))
  }, [dispatch])
}
