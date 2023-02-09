const mysteryA = document.querySelector('.js-answer')
const mysteryB = document.querySelector('.js-answerA')
const mysteryC = document.querySelector('.js-answerB')
const mysteryD = document.querySelector('.js-answerC')
const mysteryE = document.querySelector('.js-answerD')
const mysteryF = document.querySelector('.js-answerE')

const answer = document.querySelector('.answer')
const answerA =document.querySelector('.answerA')
const answerB = document.querySelector('.answerB')
const answerC = document.querySelector('.answerC')
const answerD =document.querySelector('.answerD')
const answerE = document.querySelector('.answerE')

// this.classList.toggle('tasks1')
mysteryA.addEventListener('click', function(){
answer.classList.toggle('answer');
if(mysteryA.innerHTML === "Скрыть ответ"){
    mysteryA.innerHTML = "Показать ответ";
}else{
    mysteryA.innerHTML = "Скрыть ответ"
}
})

mysteryB.addEventListener('click', function(){
    answerA.classList.toggle('answerA');
    if(mysteryB.innerHTML === "Скрыть ответ"){
        mysteryB.innerHTML = "Показать ответ";
    }else{
        mysteryB.innerHTML = "Скрыть ответ"
    }
    })

    mysteryC.addEventListener('click', function(){
           answerB.classList.toggle('answerB');
           if(mysteryC.innerHTML === "Скрыть ответ"){
            mysteryC.innerHTML = "Показать ответ";
           }else{
            mysteryC.innerHTML = "Скрыть ответ"
           }
           })
    
     mysteryD.addEventListener('click', function(){
            answerC.classList.toggle('answerC');
            if(mysteryD.innerHTML === "Скрыть ответ"){
                mysteryD.innerHTML = "Показать ответ";
            }else{
                mysteryD.innerHTML = "Скрыть ответ"
            }
            })

    mysteryE.addEventListener('click', function(){
                answerD.classList.toggle('answerD');
                if(mysteryE.innerHTML === "Скрыть ответ"){
                    mysteryE.innerHTML = "Показать ответ";
                }else{
                    mysteryE.innerHTML = "Скрыть ответ"
                }
                })


     mysteryF.addEventListener('click', function(){
                    answerE.classList.toggle('answerE');
                    if(mysteryF.innerHTML === "Скрыть ответ"){
                        mysteryF.innerHTML = "Показать ответ";
                    }else{
                        mysteryF.innerHTML = "Скрыть ответ"
                    }
                    })