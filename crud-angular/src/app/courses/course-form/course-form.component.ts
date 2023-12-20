import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CoursesService,
    private snackBar: MatSnackBar,
    private router: Router,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],

    })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 3000});
  }

  onSubmit() {
    this.courseService.save(this.form.value).subscribe((result )=> {
      console.log(result);
      this.snackBar.open('Curso salvo com sucesso', '', {duration: 3000});
      this.router.navigate(['/courses']);
    }, error => this.openSnackBar('Erro ao salvar curso'));
  }

  onCancel() {
    this.location.back();
  }

}
