class Base {
  constructor () {
    console.log('this is core.js')
  }

  delEmptyObjProp(obj) {
    for (var key in obj) {
      if (!obj[key] || obj[key]=='全部') {
        delete obj[key]
      }
    }
    return obj;
  }

  //简易版clone
  clone(obj){
    var o;
    if(typeof obj == 'object'){
      if(obj instanceof Array){
        o = obj.slice(0);
      }else{
        o = JSON.parse(JSON.stringify(obj));
      }
    }else{
      o = obj;
    }
    return o;
  }

  getNumArr (num) {
    let arr = [];
    for(var i=0;i<20;i++){
      if(((num >> i) & 1) == 1){
        arr.push(Math.pow(2,i))
      }
    }
    return arr;
  }

  //数组去重
  uniq (array) {
      var temp = []; //一个新的临时数组
      for(var i = 0; i < array.length; i++){
          if(temp.indexOf(array[i]) == -1){
              temp.push(array[i]);
          }
      }
      return temp;
  }
}

const base = new Base()

export default base
