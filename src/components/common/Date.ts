import moment from 'moment'
import 'moment/locale/fr';

const DATE_FORMAT = 'LL';

export function toFormatedDate(date?: Date): string {
  return moment(date).format(DATE_FORMAT);
}

export function toFormatedDateFromNow(date?: Date): string {
  return moment(date).locale('fr').fromNow()
}
