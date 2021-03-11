// 数字转金钱计数
export default Numeral = num => num
  ? toDecimal2(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  : '0.00';