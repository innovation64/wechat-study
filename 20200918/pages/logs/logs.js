//index.js
//微信小程序不能使用eval函数了，所以引用一个代替eval函数的
 var rpn = require('../../utils/rpn');
Page({
 data: {
 //底部功能按钮数组
 array: ['AC', '+/-', '%',"÷",
 '7','8','9','×',
 '4','5','6','-',
 '1','2','3','+',
 '0','.','='],
 currentEnd: '0',//当前的结果
 operator: '',//记录运算符式
 },
 bindtap: function(res){
 //获取点击的
// console.log(res.currentTarget.dataset.index);
 var index = res.currentTarget.dataset.index;
 //取出当前的值
 var currentEnd = this.data.currentEnd;
 //查看当前的运算符
 var operator = this.data.operator;
 //下面处理点击事件
 if (index == 0){
 //AC按钮点击 清空
 currentEnd = '0';
 operator = '';
 }else if (index == 1){
 //正负取反
 //如果最后一位是运算符就不做处理
 var endW = operator.substr(-1, 1);
 if (endW == '%' || endW == '/' || endW == '*' || endW == '+' || endW == '-') {
 console.log("最后是运算符，不做处理");
 }else{
 //正负取反处理
 var str = operator.substr(0, operator.length - (currentEnd + '').length);
 currentEnd = currentEnd * 1;
 currentEnd = -currentEnd;
 operator = str + (currentEnd + '');
 }
 } else if (index == 17) {
 //小数点点击
 //如果最后一位是运算符就不做处理
 var endW = operator.substr(-1, 1);
 if (endW == '%' || endW == '/' || endW == '*' || endW == '+' || endW == '-') {
 console.log("最后是运算符，不做处理");
 } else {
 //小数点点击处理
 if ((currentEnd + '').indexOf('.') == -1) {
 currentEnd = currentEnd + '.';
 operator += '.';
 } else {
 console.log('已经是小数了，不做处理');
 }
 }
 } else if (index == 18) {
 //等号点击
 //判断最后一位
 //最后一位是运算符就去掉
 //最后一位是小数点也去掉
 var endW = operator.substr(-1, 1);
 if (endW == '%' || endW == '/' || endW == '*' || endW == '+' || endW == '-' || endW == '.') {
 operator = operator.substr(0, operator.length - 1);
 }
 //等号点击运算结果
 currentEnd = rpn.calCommonExp(operator);
 //再次点击从新开始
 operator = '';
 }
 /* 下面是运算符类 */
 else if (index == 2) {
 //运算符'%';
 operator = this.fuhaoFun(operator,'%');
 } else if (index == 3) {
 //运算符'/';
 operator = this.fuhaoFun(operator, '/');
 } else if (index == 7) {
 //运算符'*';
 operator = this.fuhaoFun(operator, '*');
 } else if (index == 11) {
 //运算符'-';
 operator = this.fuhaoFun(operator, '-');
 } else if (index == 15) {
 //运算符'+';
 operator = this.fuhaoFun(operator, '+');
 } 
 /* 剩下的都是数字 */
 else if (index == 16){
 //数字0
 currentEnd = this.yunsuanFun(operator, currentEnd, 0);
 operator += '0';
 }else if (index == 4) {
 //数字7
 currentEnd = this.yunsuanFun(operator, currentEnd, 7);
 operator += '7';
 }else if (index == 5) {
 //数字8
 currentEnd = this.yunsuanFun(operator, currentEnd, 8);
 operator += '8';
 }else if (index == 6) {
 //数字9
 currentEnd = this.yunsuanFun(operator, currentEnd, 9);
 operator += '9';
 }else if (index == 8) {
 //数字4
 currentEnd = this.yunsuanFun(operator, currentEnd, 4);
 operator += '4';
 }else if (index == 9) {
 //数字5
 currentEnd = this.yunsuanFun(operator, currentEnd, 5);
 operator += '5';
 }else if (index == 10) {
 //数字6
 currentEnd = this.yunsuanFun(operator, currentEnd, 6);
 operator += '6';
 }else if (index == 12) {
 //数字1
 currentEnd = this.yunsuanFun(operator, currentEnd, 1);
 operator += '1';
 }else if (index == 13) {
 //数字2
 currentEnd = this.yunsuanFun(operator, currentEnd, 2);
 operator += '2';
 }else if (index == 14) {
 //数字3
 currentEnd = this.yunsuanFun(operator,currentEnd,3);
 operator += '3';
 
 }
 console.log(operator+'====='+currentEnd);
 //所有情况处理完赋值
 this.setData({
 currentEnd: currentEnd,
 operator: operator,
 })
 },
 //输入的是数字的时候进行运算
 yunsuanFun: function (operator,currentEnd,num){
 //判断是否是重新开始的
 if (operator.length == 0){
 currentEnd = num;
 return currentEnd;
 }
 //不是重新开始的运算
 var endW = operator.substr(-1,1);
 if (endW == '%' || endW == '/' || endW == '*' || endW == '+' || endW == '-'){
 currentEnd = num;
 }else{
 if (currentEnd == 0) {
 //初始时点击数字
 currentEnd = num;
 }else{
 currentEnd = currentEnd + '' + num;
 }
 }
 return currentEnd;
 },
 //输入的是运算符的时候进行运算
 fuhaoFun: function(operator,fuhao){
 //点击了等号后点击了运算符
 if(operator.length == 0){
 operator = 0+fuhao;
 return operator;
 }
 //判断是不是运算符
 var endW = operator.substr(-1, 1);
 if (endW == '%' || endW == '/' || endW == '*' || endW == '+' || endW == '-') {
 //把最后一个运算符进行替换掉
 operator = operator.substr(0,operator.length-1);
 operator += fuhao;
 }else if(endW == '.'){
 //最后一位为小数点的情况
 operator = operator + '0' + fuhao;
 }else{
 //直接添加运算符
 operator += fuhao;
 }
 return operator;
 }
}) 