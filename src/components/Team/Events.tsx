import { FC, memo } from 'react';
import { TeamEvent } from '../../redux/interfaces';
import Event from './Event'


interface EventsProps {
  events: TeamEvent[];
}

const Events: FC<EventsProps> = ({ events }) => {
  return (
    <div>
      {events.map((event) => <Event key={event.id} event={event} />)}
    </div>
  )
}

export default memo(Events);
