export default class HolbertonCourse {
  constructor(name, length, students) {
    // console.log(name);
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    // this._name = name;
    if (typeof (name) === 'string') {
      this._name = name;
    } else if (typeof (name) !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
  }

  set length(length) {
    // this._length = length;
    if (typeof (length) === 'number') {
      this._length = length;
    } else if (typeof (length) !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
  }

  set students(students) {
    // this._students = students;
    if (typeof (students) === 'object') {
      this._students = students;
    } else if (typeof (students) !== 'object') {
      throw new Error('TypeError: Students must be an object');
    }
  }
}
