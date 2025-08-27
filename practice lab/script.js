const answers = [
    "green",
   ["html","css","javascript"],
   ["web 1", "fundamental of web development", "ID512"]
];

 //trigger the marking process
 const submitBtn = document.getElementById("quiz-form");
 submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    getUserAnswers(e.target);
   
 } )



// get the form ans from the user
function getUserAnswers(theForm){
    console.log(theForm)
    const answers = new FormData(theForm);
    const answersArray = Array.from(answers);
    console.log(answersArray);
}

//take away capital lettes

//give user feedback or score or someting