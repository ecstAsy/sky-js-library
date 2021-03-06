// 小写金额转换成大写金额
const uppercase = Money => {
  let money = Money;
  // eslint-disable-next-line no-array-constructor
  const cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); // 汉字的数字
  // eslint-disable-next-line no-array-constructor
  const cnIntRadice = new Array("", "拾", "佰", "仟"); // 基本单位
  // eslint-disable-next-line no-array-constructor
  const cnIntUnits = new Array("", "万", "亿", "兆"); // 对应整数部分扩展单位
  // eslint-disable-next-line no-array-constructor
  const cnDecUnits = new Array("角", "分", "毫", "厘"); // 对应小数部分单位
  const cnInteger = "整"; // 整数金额时后面跟的字符
  const cnIntLast = "元"; // 整型完以后的单位
  const maxNum = 999999999999999.9999; // 最大处理的数字
  let IntegerNum; // 金额整数部分
  let DecimalNum; // 金额小数部分
  let ChineseStr = ""; // 输出的中文金额字符串
  let parts; // 分离金额后用的数组，预定义
  if (money === "") {
    return "";
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    // alert('超出最大处理数字');
    return "";
  }
  if (money === 0) {
    ChineseStr = cnNums[0] + cnIntLast + cnInteger;
    return ChineseStr;
  }
  money = money.toString(); // 转换为字符串
  if (money.indexOf(".") === -1) {
    IntegerNum = money;
    DecimalNum = '';
  } else {
    parts = money.split(".");
    // eslint-disable-next-line prefer-destructuring
    IntegerNum = parts[0];
    DecimalNum = parts[1].substr(0, 4);
  }
  if (parseInt(IntegerNum, 10) > 0) { // 获取整型部分转换
    let zeroCount = 0;
    const IntLen = IntegerNum.length;
    for (let i = 0; i < IntLen; i += 1) {
      const n = IntegerNum.substr(i, 1);
      const p = IntLen - i - 1;
      const q = p / 4;
      const m = p % 4;
      if (n === "0") {
        zeroCount += 1;
      } else {
        if (zeroCount > 0) {
          ChineseStr += cnNums[0];
        }
        zeroCount = 0; // 归零
        // eslint-disable-next-line radix
        ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        ChineseStr += cnIntUnits[q];
      }
    }
    ChineseStr += cnIntLast;
    // 整型部分处理完毕
  }
  if (DecimalNum !== '') { // 小数部分
    const decLen = DecimalNum.length;
    for (let i = 0; i < decLen; i += 1) {
      const n = DecimalNum.substr(i, 1);
      if (n !== '0') {
        ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (ChineseStr === '') {
    ChineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (DecimalNum === '') {
    ChineseStr += cnInteger;
  }
  return ChineseStr;
}

// 数字转金钱计数

const numeral = num => num
  ? toDecimal2(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  : '0.00';

const Money = {
  uppercase,
  numeral
}

export default Money
