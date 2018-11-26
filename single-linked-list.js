const link3 = {
 data: "how data structures work!",
 next: null
}
const link2 = {
  data: "is it to know ",
  next: link3
}
const link1 = {
  data: "How sweet ",
  next: link2
}


let current = link1;
let output = "";

while (current)  {
  output += current.data;
  current = current.next;
} 

console.log(output);
