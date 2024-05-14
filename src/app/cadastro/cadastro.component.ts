import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  ocultarSenha: boolean = true;


  constructor(private formBuilder: FormBuilder){}


  cadastroForm = this.formBuilder.group({
    nome: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
    email: this.formBuilder.control('', [Validators.required, Validators.email, Validators.maxLength(40)]),
    usuario: [null],
    senha: [null],
    confirmarSenha: [null]
  });

  onEnviar(){
    console.table(this.cadastroForm.value);
  }
}
