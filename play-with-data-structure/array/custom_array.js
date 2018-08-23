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

  // 获取数组对象
  getArray() {
    return this.data;
  }

  //判断数组是否没有存元素
  isArrayEmpty() {
    return this.size === 0;
  }

  //在第index位置插入一个新的元素e
  add(index, e) {
    if (index < 0 || index > this.size) {
      throw new Error(`You should enter a valid index between 0 and ${this.size}.`);
    }

    for (let i = this.size - 1; i >= index; i-- ) {
      this.data[i+1] = this.data[i];
    }
    this.data[index] = e;
    this.size++;
  }

  // 在头添加一个元素
  addFirst(e) {
    this.add(0, e);
  }

  // 在尾添加一个元素
  addLast(e) {
    this.add(this.size, e);
  }

};

const arr = new CustomArray(15);

console.log('size:', arr.getSize());
console.log('capacity:', arr.getCapacity());
console.log('empty:', arr.isArrayEmpty());
console.log('在位置0添加元素1：', arr.add(0, 1));
console.log('在位置1添加元素2：', arr.add(1, 2));
console.log('在位置2添加元素3：', arr.add(2, 3));
console.log('在位置3添加元素4：', arr.add(3, 4));
console.log('在位置4添加元素5：', arr.add(4, 5));
console.log('当前数组对象：', arr.getArray());
console.log('在头添加一个元素6', arr.addFirst(6));
console.log('在尾添加一个元素2', arr.addLast(2));
console.log('当前数组对象:', arr.getArray());
