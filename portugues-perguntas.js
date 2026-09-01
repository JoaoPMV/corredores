const perguntasPT = [
  {
    pergunta:
      "1 ) Um corredor costuma fazer seus treinos leves em um ritmo confortável. Qual é uma característica esperada desse tipo de treino?",

    alternativas: [
      "Permitir conversar com relativa facilidade durante a maior parte do treino.",
      "Exigir esforço máximo desde o primeiro quilômetro.",
      "Ser realizado sempre acima do ritmo de prova de 5 km.",
      "Levar rapidamente à exaustão muscular.",
      "Manter a frequência cardíaca próxima do máximo.",
    ],

    resposta:
      "Permitir conversar com relativa facilidade durante a maior parte do treino.",

    explicacao:
      "Treinos leves são realizados em intensidade controlada, permitindo conversar com relativa facilidade e acumular volume sem gerar uma fadiga excessiva.",

    motivacao:
      "Nem todo treino precisa ser difícil. Saber controlar a intensidade é uma habilidade importante para qualquer corredor.",
  },

  {
    pergunta:
      "2 ) Um corredor percorre 10 km em 60 minutos. Qual foi seu pace médio?",

    alternativas: [
      "5:00 min/km.",
      "5:30 min/km.",
      "6:00 min/km.",
      "6:30 min/km.",
      "7:00 min/km.",
    ],

    resposta: "6:00 min/km.",

    explicacao:
      "O pace é calculado dividindo o tempo total pela distância. Nesse caso, 60 minutos divididos por 10 km resultam em 6 minutos por quilômetro.",

    motivacao:
      "Saber calcular o pace ajuda a acompanhar sua evolução e planejar melhor seus treinos e provas.",
  },

  {
    pergunta:
      "3 ) Durante uma corrida de longa distância, um corredor começa muito rápido e precisa diminuir bastante o ritmo na segunda metade. Essa estratégia é conhecida como:",

    alternativas: [
      "Negative split.",
      "Pacing progressivo.",
      "Positive split.",
      "Tapering.",
      "Treino intervalado.",
    ],

    resposta: "Positive split.",

    explicacao:
      "Positive split ocorre quando o corredor realiza a primeira parte da prova mais rápido do que a segunda, geralmente diminuindo o ritmo ao longo da prova.",

    motivacao:
      "Distribuir bem o esforço é essencial em provas longas. O ritmo inicial pode determinar como você chegará aos quilômetros finais.",
  },

  {
    pergunta:
      "4 ) Qual é uma das principais finalidades de um treino longo na preparação para provas de resistência?",

    alternativas: [
      "Treinar apenas a velocidade máxima.",
      "Desenvolver resistência para sustentar esforços prolongados.",
      "Substituir todos os outros tipos de treino.",
      "Fazer o corredor atingir a frequência cardíaca máxima.",
      "Treinar exclusivamente a técnica de corrida.",
    ],

    resposta: "Desenvolver resistência para sustentar esforços prolongados.",

    explicacao:
      "O treino longo aumenta a capacidade de permanecer correndo por períodos prolongados e é especialmente importante na preparação para provas como meia maratona e maratona.",

    motivacao:
      "A resistência é construída com consistência. Cada treino longo bem executado contribui para aumentar sua capacidade de correr distâncias maiores.",
  },

  {
    pergunta:
      "5 ) Um corredor quer melhorar seu desempenho nos 5 km. Qual treino tende a ser mais específico para desenvolver sua capacidade de correr em alta intensidade?",

    alternativas: [
      "Uma caminhada leve de 20 minutos.",
      "Uma corrida contínua muito lenta.",
      "Um treino intervalado com repetições rápidas e recuperação controlada.",
      "Um dia inteiro de descanso.",
      "Uma corrida muito longa em ritmo confortável.",
    ],

    resposta:
      "Um treino intervalado com repetições rápidas e recuperação controlada.",

    explicacao:
      "Treinos intervalados permitem realizar períodos de corrida em intensidade elevada, com recuperação entre as repetições, sendo úteis para desenvolver velocidade e capacidade de sustentar esforços intensos.",

    motivacao:
      "Variar os estímulos de treinamento ajuda o corredor a desenvolver diferentes capacidades físicas.",
  },

  {
    pergunta:
      "6 ) Um corredor aumenta sua distância semanal de 30 km para 50 km de uma vez. Qual é o principal problema dessa estratégia?",

    alternativas: [
      "O aumento pode ser grande demais para uma única semana e elevar o risco de excesso de carga.",
      "A distância de 50 km é necessariamente insuficiente para qualquer corredor.",
      "O corredor obrigatoriamente perderá velocidade.",
      "Treinos acima de 30 km impedem qualquer adaptação aeróbia.",
      "O aumento de volume sempre melhora o desempenho rapidamente.",
    ],

    resposta:
      "O aumento pode ser grande demais para uma única semana e elevar o risco de excesso de carga.",

    explicacao:
      "Aumentos bruscos no volume podem dificultar a adaptação do organismo e elevar a carga de treinamento de maneira inadequada. A progressão deve considerar o histórico e a capacidade do corredor.",

    motivacao:
      "Na corrida, aumentar o volume gradualmente costuma ser uma estratégia mais sustentável do que tentar evoluir rapidamente.",
  },

  {
    pergunta:
      "7 ) Um corredor percebe que consegue manter o mesmo pace com uma frequência cardíaca menor depois de alguns meses de treinamento. Isso pode indicar:",

    alternativas: [
      "Piora obrigatória do condicionamento.",
      "Maior esforço para realizar a mesma atividade.",
      "Uma possível melhora da eficiência e do condicionamento aeróbio.",
      "Redução da capacidade de sustentar esforços longos.",
      "Necessariamente uma perda de resistência.",
    ],

    resposta:
      "Uma possível melhora da eficiência e do condicionamento aeróbio.",

    explicacao:
      "Se as condições do treino forem semelhantes, conseguir manter o mesmo ritmo com menor frequência cardíaca pode ser um sinal de adaptação positiva ao treinamento aeróbio.",

    motivacao:
      "A evolução nem sempre aparece apenas em um pace mais rápido. Fazer o mesmo esforço com menor custo também pode representar progresso.",
  },

  {
    pergunta:
      "8 ) Em uma corrida de 10 km, qual estratégia tende a ser mais adequada para um corredor que busca um bom resultado?",

    alternativas: [
      "Começar muito acima do ritmo pretendido.",
      "Correr sem considerar distância ou esforço.",
      "Manter um ritmo controlado e ajustar o esforço conforme a prova avança.",
      "Acelerar ao máximo nos primeiros 2 km.",
      "Deixar todo o esforço para os últimos 100 metros.",
    ],

    resposta:
      "Manter um ritmo controlado e ajustar o esforço conforme a prova avança.",

    explicacao:
      "Controlar o ritmo no início ajuda a evitar um gasto excessivo de energia e permite administrar melhor o esforço durante os 10 km.",

    motivacao:
      "Uma boa estratégia de prova combina condicionamento físico e controle do ritmo. Correr bem também é saber dosar o esforço.",
  },

  {
    pergunta:
      "9 ) Qual é uma função importante do descanso entre os treinos de corrida?",

    alternativas: [
      "Impedir qualquer adaptação ao treinamento.",
      "Permitir recuperação e adaptação do organismo aos estímulos recebidos.",
      "Garantir que todos os treinos seguintes sejam mais difíceis.",
      "Substituir completamente uma alimentação adequada.",
      "Eliminar a necessidade de treinos leves.",
    ],

    resposta:
      "Permitir recuperação e adaptação do organismo aos estímulos recebidos.",

    explicacao:
      "O descanso permite que o organismo se recupere da carga do treinamento e realize processos de adaptação importantes para a evolução do corredor.",

    motivacao:
      "Treinar é dar o estímulo; recuperar-se é permitir que o corpo responda a ele. O equilíbrio entre os dois é fundamental.",
  },

  {
    pergunta:
      "10 ) Um corredor consegue correr 15 km em ritmo confortável, mas sente dificuldade para manter um ritmo muito mais rápido por vários quilômetros. Qual capacidade provavelmente precisa de maior desenvolvimento?",

    alternativas: [
      "Apenas flexibilidade.",
      "Capacidade de sustentar intensidades mais elevadas.",
      "Apenas equilíbrio corporal.",
      "Somente velocidade de reação.",
      "Apenas mobilidade dos braços.",
    ],

    resposta: "Capacidade de sustentar intensidades mais elevadas.",

    explicacao:
      "Conseguir correr uma distância longa confortavelmente demonstra boa capacidade de resistência, mas sustentar um ritmo significativamente mais rápido exige maior capacidade de manter intensidades elevadas.",

    motivacao:
      "Identificar suas limitações ajuda a escolher os estímulos certos para continuar evoluindo como corredor.",
  },
];
