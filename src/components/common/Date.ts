import moment from 'moment'
import 'moment/locale/fr';

const DATE_FORMAT = 'LL';

export function toFormatedDate(date?: Date): string {
  return moment(date).format(DATE_FORMAT);
}
