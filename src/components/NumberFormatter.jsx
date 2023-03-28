/**
 * 計算數量
 * @param {number} number 
 */
const NumberFormatter = ({number}) => {
  return (
    <>
      {Math.abs(number) > 999 ? Math.sign(number)*((Math.abs(number)/1000).toFixed(1)) + 'k' : Math.sign(number)*Math.abs(number)}
    </>
  )
}

export default NumberFormatter