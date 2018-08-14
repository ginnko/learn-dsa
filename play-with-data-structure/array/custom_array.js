/**
 * 自定义数组
 */

class CustomArray {
  constructor(capacity = 10) {
    this.data = new Array(capacity);
    this.size = 0;
  }

  //获取当前已存元素个数
  getSize() {
    return this.size;
  }

  //获取数组容量
  getCapacity() {
    return this.data.length;
  }

  //判断数组是否没有存元素
  isArrayEmpty() {
    return this.size === 0;
  }

};

const arr = new CustomArray(15);

console.log('size:', arr.getSize());
console.log('capacity:', arr.getCapacity());
console.log('empty:', arr.isArrayEmpty());