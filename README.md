<h2 align="center">JavaScript常用方法库</h2>

#### npm安装依赖

> npm install sky-js-library

项目引入

```js
import { MathTool } from 'sky-js-library';
```

#### 方法集

数学浮点运算（+、-、*、/）
- MathTool

```js
import { MathTool } from 'sky-js-library';

MathTool.add(2, 4);
// 6
MathTool.subtract(5, 4);
// 1
MathTool.multiply(2, 4);
// 8
MathTool.divide(6, 2);
// 3
```

金钱数值处理(小写转换大写、数字转金钱格式)
- Money

```js
import { Money } from 'sky-js-library';

Money.uppercase(123);
// 壹佰贰拾叁
Money.numeral(1998765);
// 1,998,765
```

对象属性值Trim
- TrimObject

```js
import { TrimObject } from 'sky-js-library';

const obj = {
  name:' lily',
  sex:'女 '
}

TrimObject.uppercase(obj);
// { name: 'lily', sex: '女' }
```

中文字符排序
- SortChinese

```js
import { SortChinese } from 'sky-js-library';

const arr = [
  { name: '张三' },
  { name: '李四' },
  { name: '王五' }
]

SortChinese(arr, 'name');

console.log(arr);
// [ { name: '李四' }, { name: '王五' }, { name: '张三' } ]
```

身份证信息解析
- IdCardInfo

```js
import { IdCardInfo } from 'sky-js-library';

const ID = '411222198409237032'

IdCardInfo(ID);
// { birthday: '19840923', age: 35, gender: '男', province: '河南' }
```
<<<<<<< HEAD

类型判断
- Type

```js
import { Type, isType, isObject } from 'sky-js-library';

const person = {
  name: 'Tom',
  age: 23
}

Type(person)
// object

isType(person, 'Object')
// true

isObject(person)
// true
```
=======
>>>>>>> ee4d2def0ece7b3c3e4027614d1bbe73f2a47ab9
