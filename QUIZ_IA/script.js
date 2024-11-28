// Glossário de IA com perguntas e respostas
const glossary = [
    {
        question: "O que é Inteligência Artificial (IA)?",
        options: [
            "É um tipo de aprendizado supervisionado.",
            "Refere-se a sistemas ou máquinas que podem realizar tarefas que normalmente requerem inteligência humana.",
            "São modelos matemáticos que não requerem dados para funcionar.",
            "É um algoritmo específico para clustering."
        ],
        correctAnswer: 1
    },
    {
        question: "O que é Aprendizado de Máquina (Machine Learning - ML)?",
        options: [
            "É um ramo da IA onde sistemas aprendem com dados e fazem previsões.",
            "É um modelo de IA que não requer treinamento.",
            "Refere-se a um tipo de aprendizado supervisionado.",
            "É uma técnica de processamento de linguagem natural."
        ],
        correctAnswer: 0
    },
    {
        question: "O que caracteriza o Aprendizado Supervisionado?",
        options: [
            "É usado para análise de sentimentos em textos.",
            "O modelo é treinado com dados rotulados para mapear entradas para saídas corretas.",
            "É uma técnica exclusiva de redes neurais convolucionais.",
            "O modelo tenta identificar padrões sem rótulos ou respostas predefinidas."
        ],
        correctAnswer: 1
    },
    {
        question: "O que é Aprendizado Não Supervisionado?",
        options: [
            "É um tipo de rede neural usada para classificação.",
            "O modelo identifica padrões sem rótulos ou respostas predefinidas.",
            "Requer feedback contínuo de um agente.",
            "O modelo é treinado com dados rotulados."
        ],
        correctAnswer: 1
    },
    {
        question: "O que caracteriza o Aprendizado por Reforço?",
        options: [
            "O modelo aprende a tomar decisões com base em recompensas ou punições.",
            "O modelo é treinado com grandes volumes de dados.",
            "É uma técnica de aprendizado supervisionado.",
            "É usado para previsão de preços de casas."
        ],
        correctAnswer: 0
    },
    {
        question: "O que são Redes Neurais Artificiais?",
        options: [
            "São algoritmos simples usados para previsão.",
            "São técnicas de redução de dimensionalidade.",
            "Modelos inspirados no cérebro humano, compostos por neurônios artificiais.",
            "São algoritmos usados apenas para clustering."
        ],
        correctAnswer: 2
    },
    {
        question: "O que é Deep Learning?",
        options: [
            "Subcampo do aprendizado de máquina que usa redes neurais profundas.",
            "É uma técnica de redução de dimensionalidade.",
            "Refere-se a um tipo de aprendizado supervisionado.",
            "É um modelo de IA usado para classificação."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é um Algoritmo?",
        options: [
            "Uma rede neural profunda usada para aprendizado de máquina.",
            "Uma técnica para reduzir o número de variáveis em um conjunto de dados.",
            "Conjunto de regras ou instruções definidas para resolver um problema.",
            "Um modelo usado em aprendizado supervisionado."
        ],
        correctAnswer: 2
    },
    {
        question: "O que é Overfitting (Sobreajuste)?",
        options: [
            "Quando um modelo é generalizado para dados novos.",
            "Quando um modelo aprende excessivamente os detalhes e o ruído dos dados de treinamento.",
            "Quando um modelo é muito simples para capturar os padrões dos dados.",
            "Quando o modelo não consegue aprender com os dados de treinamento."
        ],
        correctAnswer: 1
    },
    {
        question: "O que é Underfitting (Subajuste)?",
        options: [
            "Quando um modelo é muito simples para capturar os padrões dos dados.",
            "Quando o modelo é generalizado para novos dados.",
            "Quando o modelo aprende excessivamente os detalhes dos dados.",
            "Quando o modelo é treinado com dados de teste."
        ],
        correctAnswer: 0
    },
    {
        question: "O que são Features (Características) em IA?",
        options: [
            "São os parâmetros ajustados em um algoritmo.",
            "São os conjuntos de dados de teste usados para avaliar um modelo.",
            "São as variáveis ou atributos dos dados usadas para treinar um modelo.",
            "São os algoritmos utilizados para prever resultados."
        ],
        correctAnswer: 2
    },
    {
        question: "O que são Dados de Treinamento?",
        options: [
            "Dados gerados após o modelo ser treinado.",
            "Conjunto de dados usados para avaliar um modelo treinado.",
            "Conjunto de dados usados para validar um modelo.",
            "Conjunto de dados usados para treinar um modelo de IA."
        ],
        correctAnswer: 3
    },
    {
        question: "O que são Dados de Teste?",
        options: [
            "Conjunto de dados usados para avaliar a performance de um modelo treinado.",
            "São os parâmetros utilizados para ajustar os modelos.",
            "Conjunto de dados usados para treinar um modelo de IA.",
            "Dados que o modelo usa para aprender padrões."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é Classificação em aprendizado de máquina?",
        options: [
            "Atribuir uma etiqueta ou classe a uma entrada.",
            "Prever um valor contínuo com base em entradas.",
            "Agrupar dados sem rótulos em clusters.",
            "Reduzir a dimensionalidade dos dados."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é Regressão em aprendizado de máquina?",
        options: [
            "Prever valores contínuos com base em características.",
            "Atribuir uma etiqueta ou classe a uma entrada.",
            "Agrupar dados em diferentes categorias.",
            "Reduzir a dimensionalidade dos dados."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é Clustering (Agrupamento)?",
        options: [
            "Agrupar dados com base em características semelhantes.",
            "Prever valores contínuos com base em características.",
            "Atribuir uma etiqueta a uma entrada de dados.",
            "Reduzir o número de variáveis em um conjunto de dados."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é Redução de Dimensionalidade?",
        options: [
            "Técnica para reduzir o número de variáveis em um conjunto de dados.",
            "Método para agrupar dados com base em características.",
            "Estratégia para melhorar o desempenho de modelos de regressão.",
            "Técnica de aprendizado supervisionado."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é Tokenização em NLP?",
        options: [
            "É o processo de analisar sentimentos em textos.",
            "Processo de dividir o texto em unidades menores chamadas tokens.",
            "Refere-se a uma técnica de agrupamento de dados.",
            "É um algoritmo utilizado para fazer previsões."
        ],
        correctAnswer: 1
    },
    {
        question: "O que é Natural Language Processing (NLP)?",
        options: [
            "Método de classificação de dados em várias categorias.",
            "Área da IA que foca na interação entre computadores e linguagem humana.",
            "Modelo de IA usado para classificação.",
            "Algoritmo para análise de imagens."
        ],
        correctAnswer: 1
    },
    {
        question: "O que é Reconhecimento de Padrões em IA?",
        options: [
            "Prever valores contínuos com base em entradas.",
            "Atribuir etiquetas a dados sem rótulos.",
            "Identificar regularidades ou padrões em dados.",
            "Agrupar dados em diferentes categorias."
        ],
        correctAnswer: 2
    },
    {
        question: "O que é Visão Computacional?",
        options: [
            "Método de classificação de texto em categorias.",
            "Processo de dividir o texto em tokens.",
            "Ramo da IA que permite que os computadores interpretem o mundo visual.",
            "Técnica de aprendizado supervisionado."
        ],
        correctAnswer: 2
    },
    {
        question: "O que é uma Rede Neural Convolucional (CNN)?",
        options: [
            "Modelo usado para prever valores contínuos.",
            "Técnica de redução de dimensionalidade.",
            "Tipo de rede neural projetada para processamento de imagens.",
            "Modelo de IA usado para classificação."
        ],
        correctAnswer: 2
    },
    {
        question: "O que é uma Rede Neural Recorrente (RNN)?",
        options: [
            "Algoritmo de otimização.",
            "Rede neural usada para dados sequenciais, como séries temporais ou texto.",
            "Rede neural usada para imagens e reconhecimento visual.",
            "Modelo de IA usado para classificação."
        ],
        correctAnswer: 1
    },
    {
        question: "O que são Algoritmos Genéticos?",
        options: [
            "Métodos de agrupamento para organizar dados.",
            "Técnicas de otimização inspiradas na evolução natural.",
            "Algoritmos usados para prever valores contínuos.",
            "Modelos de aprendizado supervisionado."
        ],
        correctAnswer: 1
    },
    {
        question: "O que é Transfer Learning (Aprendizado por Transferência)?",
        options: [
            "Técnica onde um modelo treinado é adaptado para resolver um problema relacionado.",
            "Modelo de IA usado para gerar texto.",
            "Técnica de análise de sentimentos em texto.",
            "Método de agrupamento de dados em clusters."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é Explainable AI (XAI)?",
        options: [
            "Refere-se a modelos de IA que são interpretáveis e compreensíveis por seres humanos.",
            "Refere-se a algoritmos de aprendizado supervisionado.",
            "Modelo de IA usado para predição de valores contínuos.",
            "Técnica para agrupar dados em categorias."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é Automação em IA?",
        options: [
            "Uso de IA para executar tarefas repetitivas de forma autônoma.",
            "Método de análise de dados de treinamento.",
            "Modelo de IA usado para processamento de texto.",
            "Algoritmo usado para previsão de valores contínuos."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é Simulação em IA?",
        options: [
            "Uso de modelos de IA para simular cenários do mundo real.",
            "Método de otimização baseado em evolução natural.",
            "Processo de classificação de dados.",
            "Técnica de aprendizado supervisionado."
        ],
        correctAnswer: 0
    },
    {
        question: "O que é Ética em IA?",
        options: [
            "Conjunto de princípios e normas para o uso responsável da IA.",
            "Método de agrupamento de dados.",
            "Modelo usado para previsão de valores contínuos.",
            "Processo de análise de sentimentos em textos."
        ],
        correctAnswer: 0
    }
];


let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = glossary.length;

const startButton = document.getElementById("startButton");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const gameScreen = document.getElementById("game");
const endScreen = document.getElementById("endScreen");
const restartButton = document.getElementById("restartButton");
const finalScoreElement = document.getElementById("finalScore");

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    gameScreen.style.display = "block";
    document.getElementById("menu").style.display = "none";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = glossary[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option" + (index + 1));  // Adiciona a classe específica para cada opção
        button.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = glossary[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    }

    scoreElement.textContent = score;
    currentQuestionIndex++;

    if (currentQuestionIndex < glossary.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    gameScreen.style.display = "none";
    endScreen.style.display = "block";
    finalScoreElement.textContent = `Seu Score Final: ${score} de ${totalQuestions}`;
}

function restartGame() {
    endScreen.style.display = "none";
    document.getElementById("menu").style.display = "block";
}
