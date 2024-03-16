import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from "../../shared/services/user.service";
import { User } from "../../core/models/user.model";

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: []
})
export class UserComponent implements OnInit {
    title = 'Demo Angular';
    userForm!: FormGroup;
  
    constructor(private formBuilder: FormBuilder, private readonly userService: UserService) {
      
    }
    ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        correo: ['', [Validators.required, Validators.email]],
        contraseña: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    onSubmit(): void {
      if (this.userForm.valid) {
        const user: User = {
          nombre: this.userForm.value['nombre'],
          correo: this.userForm.value['correo'],
          password: this.userForm.value['contraseña']
        }
  
        this.userService.createUser(user).subscribe({
          next: () => {
            alert('Usuario creado exitosamente');
          },
          error: (error) => {
            console.log(error);
            alert('Error al crear el usuario');
          }
        });
      } else {
        alert('Formulario no válido');
      }
    } 
 }
