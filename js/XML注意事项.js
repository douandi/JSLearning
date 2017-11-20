<!--XHTML 中的一些注意事项,替换小于号 -->
  function compare(a,b){
    if(a < b){
      alert("A is less than B");
    }else if(a > b){
      alert("A is greater than B");
    }else{
      alert("A is equal to B");
    }
  }

  // <!-- 使用CDATA使得浏览器兼容XHTML -->
  // //<![CDATA[
  // function compare2(a,b){
  //   if(a<b) {
  //     alert("A is less than B");
  //   }else if(a>b){
  //     alert("A is greater than B");
  //   }else{
  //     alert("A is equal to B");
  //   }
  // }
  // // ]]>