import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee = {
    id: '',
    employee_name: '',
    employee_salary: '',
    employee_age: '',
    profile_image: ''
  };

  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  updateEmployee() {

    const data = {
      id: this.employee.id,
      employee_name: this.employee.employee_name,
      employee_salary: this.employee.employee_salary,
      employee_age: this.employee.employee_age,
      profile_image: this.employee.profile_image,
    };

    console.log(data);

    this.userService.update(this.employee.id, data)
      .subscribe(
        response => {
          console.log(response);
          this._snackBar.open("Employee edited", "OK", {
            duration: 2000,
          });
          this.router.navigate(['/view']);
        },
        error => {
          console.log(error);
        });
  }

}
