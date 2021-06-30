// 对象属性值trim
const TrimObject = obj => {
  const Obj = obj;
  Object.keys(Obj).forEach(i => {
    if (typeof Obj[i] === 'string') {
      Obj[i] = Obj[i] ? Obj[i].trim() : undefined;
    }
  });
  return Obj;
}

export default TrimObject
