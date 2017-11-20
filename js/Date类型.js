//DATE类型
var someDate = new Date("May 25, 2004");
var someDate2 = new Date(Date.parse("May 25. 2004"));
var y2k = new Date(Date.UTC(2000,0));//2000年1月1日午夜零时
var AllFives = new Date(Date.UTC(2005,4,5,17,55,55));//2005年5月5日下午5点55分55秒
var y2k2 = new Date(2000,0);

//取得开始时间
var start = Date.now();

//调用函数
doSometing();

//取得静止时间
var stop = Date.now(),
  result = stop - start;

//用+操作符吧Date对象转换成字符串
var start = +new Date();
doSometing();
var stop = +new Date();
var stop = +newDate(),
  result = stop - start;

//不同浏览器的时间表示纺纱
//Internet Explorer 8
//toLocaleString() — Thursday, February 01, 2007 12:00:00 AM
//toString() — Thu Feb 1 00:00:00 PST 2007

//Firefox 3.5
//toLocaleString() — Thursday, February 01, 2007 12:00:00 AM
//toString() — Thu Feb 01 2007 00:00:00 GMT-0800 (Pacific Standard Time)
//Safari 4
//toLocaleString() — Thursday, February 01, 2007 00:00:00
//toString() — Thu Feb 01 2007 00:00:00 GMT-0800 (Pacific Standard Time)
//Chrome 4
//toLocaleString() — Thu Feb 01 2007 00:00:00 GMT-0800 (Pacific Standard Time)
//toString() — Thu Feb 01 2007 00:00:00 GMT-0800 (Pacific Standard Time)
//Opera 10
//toLocaleString() — 2/1/2007 12:00:00 AM
//toString() — Thu, 01 Feb 2007 00:00:00 GMT-0800

// getTime() 返回表示日期的毫秒数；与valueOf()方法返回的值相同
// setTime(毫秒) 以毫秒数设置日期，会改变整个日期
// getFullYear() 取得4位数的年份（如2007而非仅07）
// getUTCFullYear() 返回UTC日期的4位数年份
// setFullYear(年) 设置日期的年份。传入的年份值必须是4位数字（如2007而非仅07）
// setUTCFullYear(年) 设置UTC日期的年份。传入的年份值必须是4位数字（如2007而非仅07）
// getMonth() 返回日期中的月份，其中0表示一月，11表示十二月
// getUTCMonth() 返回UTC日期中的月份，其中0表示一月，11表示十二月
// setMonth(月) 设置日期的月份。传入的月份值必须大于0，超过11则增加年份
// setUTCMonth(月) 设置UTC日期的月份。传入的月份值必须大于0，超过11则增加年份
// getDate() 返回日期月份中的天数（1到31）
// getUTCDate() 返回UTC日期月份中的天数（1到31）
// setDate(日) 设置日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份
// setUTCDate(日) 设置UTC日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份
// getDay() 返回日期中星期的星期几（其中0表示星期日，6表示星期六）
// getUTCDay() 返回UTC日期中星期的星期几（其中0表示星期日，6表示星期六）
// getHours() 返回日期中的小时数（0到23）
// getUTCHours() 返回UTC日期中的小时数（0到23）
// setHours(时) 设置日期中的小时数。传入的值超过了23则增加月份中的天数
// setUTCHours(时) 设置UTC日期中的小时数。传入的值超过了23则增加月份中的天数
// getMinutes() 返回日期中的分钟数（0到59）
// getUTCMinutes() 返回UTC日期中的分钟数（0到59）
// setMinutes(分) 设置日期中的分钟数。传入的值超过59则增加小时数
// setUTCMinutes(分) 设置UTC日期中的分钟数。传入的值超过59则增加小时数
// getSeconds() 返回日期中的秒数（0到59）
// getUTCSeconds() 返回UTC日期中的秒数（0到59）
// setSeconds(秒) 设置日期中的秒数。传入的值超过了59会增加分钟数
// setUTCSeconds(秒) 设置UTC日期中的秒数。传入的值超过了59会增加分钟数
// getMilliseconds() 返回日期中的毫秒数
// getUTCMilliseconds() 返回UTC日期中的毫秒数
// setMilliseconds(毫秒) 设置日期中的毫秒数
