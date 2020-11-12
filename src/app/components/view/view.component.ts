import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

export interface Employees {
  id: number;
  employeeName: string;
  employeeAge: number;
  employeeSalary: number;
  profileImage: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  title = 'Employees';
  employees: any = [];
  dataSource;

  displayedColumns: string[] = ['id', 'employeeName', 'employeeAge', 'employeeSalary', 'profileImage', 'actions'];

  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe(
        (data) => {
          this.employees = data.data;
          this.dataSource = new MatTableDataSource<any>(this.employees);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  getEmployee(id): void {
    this.userService.get(id)
      .subscribe(
        data => {
          this.employees = data.data;
          console.log(data);
          this.router.navigate(['/edit/' + id]);
        },
        error => {
          console.log(error);
        });
  }


  deleteEmployee(id): void {
    this.userService.delete(id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
