import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employee = {
    id: '',
    employee_name: '',
    employee_salary: '',
    employee_age: '',
    profile_image: ''
  };

  constructor(private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  createEmployee(employee): void {

    const data = {
      id: this.employee.id,
      employee_name: this.employee.employee_name,
      employee_salary: this.employee.employee_salary,
      employee_age: this.employee.employee_age,
      profile_image: this.employee.profile_image
    };

    console.log(data);

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this._snackBar.open("Eployee created", "OK", {
            duration: 2000,
          });
        },
        error => {
          console.log(error);
        });

  }

}
