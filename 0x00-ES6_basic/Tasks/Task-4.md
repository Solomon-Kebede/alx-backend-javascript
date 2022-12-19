**4. Rest parameter syntax for functions**

Modify the following function to return the number of arguments passed to it using the rest parameter syntax
```js
export default function returnHowManyArguments() {

}
```

**Example:**

```js
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
```

**Execution:**

```sh
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
```

