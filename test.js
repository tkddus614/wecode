const getNumber = () => {
  let num = Math.floor(Math.random()*50);
  if (num % 2 == 0) {
    return num
  } else {
    return num+1
  }
}

getNumber()
