const yeQuestions = [
    {
        question: "Qual a idade de Ye?",
        answers: {
            a: "30",
            b: "40",
            c: "44",
            d: "45"
        },
        correctAnswer: 'd'
    },
    {
        question: 'qual o primeiro album lançado por Kanye West?',
        answers: {
            a: 'My Beautiful Dark Twisted Fantasy',
            b: 'Graduation',
            c: 'Donda',
            d: 'College Dropout'
        },
        correctAnswer: 'd'
    },
    {
        question: 'Ye',
        answers: {
            a: 'Ye',
            b: 'ye',
            c: 'yE',
            d: 'YE'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Qual o nome da mãe de Ye',
        answers: {
            a: 'Hillary Clinton',
            b: 'Jorge',
            c: 'Kim Kardashian',
            d: 'Donda'
        },
        correctAnswer: 'd'
    },
    {
        question: 'Kanye West ficou muito famoso ao popularizar uma certa ferramenta para auxilio vocal muito utilizado hoje em dia, qual o nome dessa ferramenta',
        answers: {
            a: 'gaita de boca',
            b: 'Autotune',
            c: 'FL Studio',
            d: 'Alguma coisa ai.'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Matheus Resende?',
        answers: {
            a: 'M.R',
            b: 'P.V',
            c: 'R.F',
            d: 'A.B.M',
            e: 'RoDrigo Pires'
        },
        correctAnswer: 'a'
    }
];

const quizContainer = document.getElementById('quiz')
const resultadoContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')

generateQuiz(yeQuestions, quizContainer, resultadoContainer, submitButton)

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // precisaremos de um lugar para armazenar a saída e as opções de resposta
        var output = [];
        var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

        // para cada questão
        for (var i = 0; i < questions.length; i++) {

            // mas, primeiro resetamos a lista de questões
            answers = [];

            // e aqui faremos para cada resposta na questão.
            for (letter in questions[i].answers) {

                // Aqui será escrito para html para usar o Radio.
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    //	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {


        var answerContainers = quizContainer.querySelectorAll('.answers');


        var userAnswer = '';
        var numCorrect = 0;


        for (var i = 0; i < questions.length; i++) {

            // agora ele vai virar a letra que esta marcada.
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;



            if (userAnswer === questions[i].correctAnswer) {

                numCorrect++;


                answerContainers[i].style.color = 'lightgreen';
            }

            else {

                answerContainers[i].style.color = 'red';
            }
        }


        resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}