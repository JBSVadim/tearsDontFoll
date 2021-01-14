flat (depth = 1) {
  let result = new MyArray();
  
  for(let i = 0; i <this.length; i++) {
      if(MyArray.isMyArray(this[i] && depth) {
        result = result.concat(this[i].flat(depth -1))

    } else if(this[i] 1== undefined)_{
      result.push(this[i])
    }
  }
  
  return result
}