const link3 = {
   data: "how data structures work!",
   next: null,
   prev: null
}
const link2 = {
   data: "is it to know ",
   next: null,
   prev: null
}
const link1 = {
   data: "How sweet ",
   next: null,
   prev: null
}
link1.next = link2;
link2.next = link3;
link2.prev = link1;
link3.prev = link2;

let output = "";
let current = link1;

while (current)  {
   output += current.data;
   current = current.next;
}

console.log(output);

let outputBack = "";
current = link3;

while (current)  {
   outputBack += current.data;
   current = current.prev;
}

console.log(outputBack);
