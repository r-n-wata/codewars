function tops(msg) {
   let i = 1
   let x = 5
   let res= ''
   
   while(i < msg.length){
     res += msg[i]
     i += x
     x += 4
   }
  
  return [...res].reverse().join('')
}