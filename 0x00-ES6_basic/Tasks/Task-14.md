**14. Iterate through object**

Finally, write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.

```js
 export default function iterateThroughObject(reportWithIterator) {

 }
```

It should return every employee name in a string, separated by `|`

```js
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};
```

Should return `John Doe | Guillaume Salva`

Reminder - the functions will be *imported* by the test suite.

**Full example:**

```js
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
> 
```

**Execution:**

```sh
bob@dylan:~$ cat 101-main.js
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js 
Bob | Jane | Sylvie
bob@dylan:~$
```

