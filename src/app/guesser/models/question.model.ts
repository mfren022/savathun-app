export interface Question {
    category: string;
    question: string;
    correctAnswer: string;
    wrongAnswer1: string;
    wrongAnswer2: string;
    wrongAnswer3: string;
}

export const testQuestions: Question[] = [
    {
        category: 'Test Category',
        question: 'What race is Cayde-6?',
        correctAnswer: 'Exo',
        wrongAnswer1: 'Human',
        wrongAnswer2: 'Eliksni',
        wrongAnswer3: 'Awoken'
    },
    {
        category: 'Test Category 2',
        question: 'What weapon type is Fatebrigner?',
        correctAnswer: 'Hand Cannon',
        wrongAnswer1: 'Scout Rifle',
        wrongAnswer2: 'Auto Rifle',
        wrongAnswer3: 'Pulse Rifle'
    },
]