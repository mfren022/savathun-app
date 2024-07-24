import { Component, OnInit } from "@angular/core";
import { Question } from "../models/question.model";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { testQuestions } from '../models/question.model';


@Component({
    selector: 'app-guesser',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './guesser.component.html',
    styleUrl: './guesser.component.scss'
})

export class GuesserComponent {
    title = 'Test Component';
    testQuestions: Question[] = [...testQuestions];

    //randomly choose a question
    question: Question = this.testQuestions[Math.floor(Math.random() * this.testQuestions.length)];

    //shuffle the answers
    answers = [this.question.correctAnswer, this.question.wrongAnswer1, this.question.wrongAnswer2, this.question.wrongAnswer3].sort(() => Math.random() - 0.5);

    //check if the answer is correct
    checkAnswer(answer: string): void {
        if (answer === this.question.correctAnswer) {
            alert('Correct!');
            this.getNewQuestion();
        } else {
            alert('Incorrect!');
            this.getNewQuestion();
        }
    }

    //get a new question
    getNewQuestion(): void {
        this.question = this.testQuestions[Math.floor(Math.random() * this.testQuestions.length)];
        this.answers = [this.question.correctAnswer, this.question.wrongAnswer1, this.question.wrongAnswer2, this.question.wrongAnswer3].sort(() => Math.random() - 0.5);
    }
}