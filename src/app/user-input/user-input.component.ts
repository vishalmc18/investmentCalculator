import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../app.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = signal('0');
  enteredAnualInvestment = signal('0');
  enteredExpectedReturn = signal('7');
  enteredDuration = signal('10');

  onSubmit() {
    const data: InvestmentInput = {
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    };

    this.investmentService.calculateInvestmentResults(data);
  }
}
