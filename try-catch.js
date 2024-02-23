let weight = 90

try{
  //코드
  //오류발생

console.log("하하")
  if(weight>30){
    throw new Error("돼지")
  }

}catch(error){

  //에러 잡음
console.log("에러",error.message)
}
console.log("호호")
//node try-catch.js