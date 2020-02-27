import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import { eurgency } from '../models/eurgency';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tasks-management',
  templateUrl: './tasks-management.component.html',
  styleUrls: ['./tasks-management.component.css']
})
export class TasksManagementComponent implements OnInit {

  description: string

  tasksList: Task[] = []

  resulttasksList: Task[]

  urgency = Object.keys(eurgency);

  selectedValue: string;

  isFirstChecked: boolean;

  constructor() { }

  ngOnInit() {
    this.selectedValue = eurgency.Normal;
  }

  addTask() {


    if (this.tasksList.filter(t => t.description == this.description).length > 0
      || this.tasksList.length == 5) {

      this.description = "";

      return;

    }

    this.tasksList.push(new Task(this.description, eurgency[this.selectedValue]));
    if (this.isFirstChecked == false)
      this.changeToPriority();

    this.description = "";
  }

  deleteTask(i) {

    this.tasksList.splice(i, 1);
  }

  changeToPriority() {

    this.resulttasksList = this.tasksList;
    this.tasksList = []
    this.urgency.forEach(element => {
      this.resulttasksList.filter(t => t.urgency == element).forEach(element => {
        this.tasksList.push(element)
      });
    });
    this.isFirstChecked = false;

  }

  changeToEntry() {
    this.isFirstChecked = true;
    this.tasksList = this.resulttasksList;
  }
}
