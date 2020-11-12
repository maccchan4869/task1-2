const QUESTION = "日本の首都は？";
const ANSWER = "東京";
const CONGRATS = "正解です！"
const INCORRECT = "不正解です！";

while (true) {
  let input = prompt(QUESTION);
  if(input === ANSWER){
    alert(CONGRATS);
  } else {
    alert(INCORRECT);
  }
}