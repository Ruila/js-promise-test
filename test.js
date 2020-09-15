const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const subPie = () => new Promise((resolve) => {
  delay(1000).then(() => {
    console.log("c")
    resolve("subPie success")
    })
    // resolve("subPie success")
});
const subPie2 = () => new Promise((resolve) => {
  
  delay(500).then(() => {
    console.log("d")
    resolve("subPie2 success2"); 
    })
});
async function test() {
  let a = await subPie();
  let b = await subPie2(); 
  console.log(a);
}
test();