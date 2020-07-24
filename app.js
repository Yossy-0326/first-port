const quiz =[
    {
        question:`スプラトゥーンで一番人気の赤い武器は?` ,  
        answers: [
            `竹`,
            `寿司`,
            `ザリガニ`,
            `チャー`
        ],
        correct :`ザリガニ`
    },{
        question:`スプラで一番射程の長い武器は?`  , 
        answers:[
            `チャー`,
            `チャースコ`,
            `4K`,
            `4Kスコ`
        ],
        correct :`4Kスコ`

    },{
        question:`境家が一番大切にしているものは?`  , 
        answers:[
            `誉`,
            `暗殺`,
            `闇討ち`,
            `気合い`
        ],
        correct :`誉`
    }
];

const quizlength = quiz.length;
let quizindex = 0;


document.getElementById(`js-question`).textContent = quiz[quizindex].question;


const $button = document.getElementsByTagName(`button`);
const buttonlength = $button.length;
let score = 0;

// ボタンにanswersの変数を入れ込む作業
const setupQuiz = () =>{
// buttonの中身を表示させるためのループ文
for(let buttonindex=0; buttonindex<buttonlength; buttonindex++){
    // 実行したい命令（問題を浮かび上がらせたい）
    $button[buttonindex].textContent = quiz[quizindex].answers[buttonindex]
};
}
setupQuiz();


const clickHandler = (e) =>{
    if(quiz[quizindex].correct === e.target.textContent){
        alert(`正解！！`);
        score++;
    } else　{
        alert(`不正解！！`);
    }
    quizindex++;

    if(quizindex < quizlength){
        setupQuiz();
    } else{
        alert(`終了！！あなたの点数は`+ score + `/`+ quizlength +`です！`);
    };

    };

// ボタンを連続して推せるようになるための作業
for(let hadleindex = 0; hadleindex < buttonlength; hadleindex++){
    $button[hadleindex].addEventListener(`click`,(e)=>{
    clickHandler(e);
    });
}
