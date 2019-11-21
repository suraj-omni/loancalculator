import { Component, OnInit } from '@angular/core';
import {ChartType} from 'chart.js';
import {MultiDataSet, Label} from 'ng2-charts';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.sass']
})
export class LoancalculatorComponent implements OnInit {

  heading = 'Loan Calculator';
  subheading = 'Build whatever layout you need with our ArchitectUI framework.';
  icon = 'fa-calculator text-success';
  loanamount = 10000;
  percentage = 5;
  interestamount = (this.loanamount * (this.percentage )) /100; 

  public doughnutChartLabels: Label[] = ['Your Monthly Payment','Interest'];
  public doughnutChartData: MultiDataSet = [
    [this.loanamount , this.interestamount],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  loanamountincrease(): void {
    this.loanamount = this.loanamount < 10000 ? 10000 : Math.round(this.loanamount/10000)*10000;
    this.loanamount = Math.ceil(this.loanamount) + 10000
    this.calculate();
  }

  loanamountdicrease(): void {
    this.loanamount = this.loanamount < 10000 ? 10000 : Math.round(this.loanamount/10000)*10000;
    this.loanamount =  Math.floor(this.loanamount)  - 10000
    this.calculate();
  }

  percentageincrease(): void {
    this.percentage = Math.ceil(this.percentage) + 1
    this.calculate();
  }

  percentagedicrease(): void {
    this.percentage =  Math.floor(this.percentage)  - 1
    this.calculate();
  }

  percentageSliderslide(percentageValue: number): void {
    this.percentage = percentageValue;
    this.calculate();
  }

  loanamountSliderslide(loanamountvalue: number): void {
    this.loanamount = loanamountvalue;
    this.calculate();
  }

  onPercentageChange(percentageValue: number): void {  
  
    this.percentage = percentageValue;
    this.calculate();
  }

  onLoanAmountChange(loanAmount: number): void {  
    this.loanamount = loanAmount;
    this.calculate();
  }

  calculate()
  {
    this.interestamount = (this.loanamount * (this.percentage )) /100; 
    this.doughnutChartData = [
      [this.loanamount , this.interestamount],
    ];
  }

  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
