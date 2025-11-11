import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiCorreoService } from '../../../services/apiCorreo.service';
import { environmenthost } from '../../../../environments/environment.host';
import { Parameter } from '../../model/commun/parameter';
import { ToastrService } from 'ngx-toastr';
import  AOS from 'aos';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  
  studentForm: FormGroup;
  
  constructor(private fb: FormBuilder, private correoDataservice: ApiCorreoService,private toastr: ToastrService,@Inject(PLATFORM_ID) private platformId: Object) {
    this.studentForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }
  
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();

    }
  }
  submit(indicator: number) {
    if (indicator === 1) {
      if (this.studentForm.invalid) {
        return Object.values(this.studentForm.controls).forEach(control => {
          control.markAsTouched();
        });
      }
      let parametro: Parameter = new Parameter();
      parametro.data = {
        "host":environmenthost.host,
        "firstName": this.studentForm.value.firstname,
        "lastName": this.studentForm.value.lastname,
        "email": this.studentForm.value.email,
        "phone": this.studentForm.value.phone,
        "message": this.studentForm.value.message,
      };
     
      parametro.method = 'POST';
      parametro.url = 'sendemail/contact';
      this.correoDataservice.Correo(parametro).subscribe(
        value => {
        
          this.studentForm.reset();
          this.toastr.success('Datos recibidos satisfactoriamente. Nos comunicaremos contigo para brindarte información', 'Enviado');
        },
        error => {
          console.error('Error:', error);
         
        }
      );
    }
  }

  get firstnameInvalidAndTouched() {
    return this.studentForm.get('firstname')?.invalid && this.studentForm.get('firstname')?.touched;
  }

  get lastnameInvalidAndTouched() {
    return this.studentForm.get('lastname')?.invalid && this.studentForm.get('lastname')?.touched;
  }

  get emailInvalidAndTouched() {
    return this.studentForm.get('email')?.invalid && this.studentForm.get('email')?.touched;
  }

  get phoneInvalidAndTouched() {
    return this.studentForm.get('phone')?.invalid && this.studentForm.get('phone')?.touched;
  }
}
