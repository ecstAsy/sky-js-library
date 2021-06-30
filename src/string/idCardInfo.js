// 根据身份证解析用户信息
const IdCardInfo = ID => {
  // 18位身份证 生日、性别、年龄验证
  const Provinces = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  };
  return {
    birthday: `${ID.substring(6, 10)}${ID.substring(10, 12)}${ID.substring(12, 14)}`,
    gender: +ID.substring(16, 17) % 2 ? 1 : 2, // 2 => 女  1 => 男
    age: new Date().getFullYear() - ID.substring(6, 10),
    province: Provinces[ID.substring(0, 2)]
  };
}

export default IdCardInfo
