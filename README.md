# units

## Using 
The unit module can be `required` by node scripts as follows:
```javascript
var units = require('./units')
```

## Functions
### prefix

The `prefix` function converts a `number` into a string that is formated with a unit prefix (e.g. k, M, G, etc.). 

```javascript
console.log(units.prefix(500000)+"W");
console.log(units.prefix(500000,0)+"W");
console.log(units.prefix(500000,2)+"W");
```

This will produce the following output:
```
500.0 kW
500 kW
500.00 kW
```