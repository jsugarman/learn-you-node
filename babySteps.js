var sum = 0;
for(var val of process.argv.splice(2)){
  sum += Number(val);
}
console.log(sum);