import moment from 'moment'

const DateDiffFormatter = ({date}) => {
  const currentDate = moment()
  const startDate = moment(date)
  const years = currentDate.diff(startDate, 'years')
  const months = currentDate.diff(startDate, 'months')
  const days = currentDate.diff(startDate, 'days')
  const hours = currentDate.diff(startDate, 'hours')
  const minutes = currentDate.diff(startDate, 'minutes')
  let context = '剛剛'

  if (years) {
    context = `${years}年`

  } else if (months) {
    context = `${months}月`

  } else if (days) {
    context = `${days}天`

  } else if (hours) {
    context = `${hours}小時`

  } else if (minutes) {
    context = `${minutes}分`
  }

  return (
    <>
      { context }
    </>
  )
}

export default DateDiffFormatter