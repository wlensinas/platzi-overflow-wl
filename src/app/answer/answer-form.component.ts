import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Question } from '../question/question.model';
import { User } from '../auth/user.model';

@Component({
    selector: 'app-answer-form',
    templateUrl: './answer-form.component.html',
    styles: [`
        form {
            display: flex;
            flex-direction: column;
            width: 90%;
            margin: 40px auto;
            margin-top: 20px;
            
        }
    `]
})

export class AnswerFormComponent {
    @Input() question: Question;

    onSubmit(form: NgForm) { //metodo con el nombre que comunemtante se utiliza para mandar datos.
        //console.log(form.value.description);
        const answer = new Answer(
            form.value.description,
            this.question,
            new Date(),
            new User('Pablo', 'Perello')
        );
        this.question.answers.unshift(answer);
        form.reset();
    }
}