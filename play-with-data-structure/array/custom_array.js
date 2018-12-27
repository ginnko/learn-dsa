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

  // 获取index位置处的元素
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error(`You should enter a valid index no less than 0 and less than ${this.size}.`);
    }
    return this.data[index];
  }

  // 修改index位置处的元素
  set(index, value) {
    if (index < 0 || index >= this.size) {
      throw new Error(`You should enter a valid index no less than 0 and less than ${this.size}.`);
    }
    this.data[index] = value;
  }

  // 查找数组中是否有元素e
  contains(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === e) {
        return true;
      }
    }
    return false;
  }

  // 查找数组中元素e所在索引，如果不存在元素e，则返回-1
  find(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === e) {
        return i;
      }
    }
    return -1;
  }
  
  // 从数组中删除index位置的元素，返回删除的元素
  remove(index) {
    if (index < 0 || index >= this.size) {
      return `You should enter a valid index no less than 0 and less than ${this.size}.`;
    }
    const result = this.data[index];
    for (let i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.size--;
    return result;
  }
  // 从数组中移除第一个元素
  removeFirst() {
    this.remove(0);
  }
  // 从数组中移除最后一个元素
  removeLast() {
    this.remove(this.size - 1);
  }
  // 从数组中移除指定元素
  removeElement(e) {
    const index = this.find(e);
    if (index !== -1) {
      return this.remove(index);
    }
  }
  // 自定义输出
  toString() {
    return `数组是：${this.getArray()}，包含${this.size}个元素。`
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
console.log('第6个元素是：', arr.get(6));
arr.set(6, 2.2);
console.log('设置第6个元素为2.2', arr.getArray());
console.log('这个数组的信息：', arr.toString());
