import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { InputMaskDirective } from "primeng/inputmask";
import { ConsultaResponseModel } from '../../../models/consulta.model';
import { RegistroStatusConsulta } from "../../../core/components/registro-status-consulta/registro-status-consulta";
import { AcoesBotaoConsultas } from "../../../core/components/acoes-botao-consultas/acoes-botao-consultas";

@Component({
  selector: 'app-list',
  imports: [ButtonModule, FormsModule, SelectModule, DatePickerModule, TableModule, DialogModule, InputMaskDirective, RegistroStatusConsulta, AcoesBotaoConsultas],
  templateUrl: './list.html',
})
export class List {

  visible = false;

  profissionais = ["Todos os profissionais"];

  profissionalSelecionado: string = "Todos os profissionais";

  consultas: ConsultaResponseModel [] = [
    {
      paciente: 'Maria Silva',
      profissional: 'Dra. Ana Souza',
      status: 'Agendada',
      data: '2026-02-03',
      horarioPrevisto: '08:00'
    },
    {
      paciente: 'João Pereira',
      profissional: 'Dr. Carlos Lima',
      status: 'Confirmada',
      data: '2026-02-03',
      horarioPrevisto: '08:30'
    },
    {
      paciente: 'Fernanda Costa',
      profissional: 'Dra. Juliana Martins',
      status: 'Cancelada',
      data: '2026-02-03',
      horarioPrevisto: '09:00'
    },
    {
      paciente: 'Rafael Almeida',
      profissional: 'Dr. Bruno Rocha',
      status: 'Em Andamento',
      data: '2026-02-03',
      horarioPrevisto: '09:30'
    },
    {
      paciente: 'Camila Santos',
      profissional: 'Dra. Ana Souza',
      status: 'Finalizada',
      data: '2026-02-03',
      horarioPrevisto: '10:00'
    },
    {
      paciente: 'Diego Fernandes',
      profissional: 'Dr. Carlos Lima',
      status: 'Cancelada',
      data: '2026-02-04',
      horarioPrevisto: '08:00'
    },
    {
      paciente: 'Patrícia Oliveira',
      profissional: 'Dra. Juliana Martins',
      status: 'Agendada',
      data: '2026-02-04',
      horarioPrevisto: '08:30'
    },
    {
      paciente: 'Lucas Ribeiro',
      profissional: 'Dr. Bruno Rocha',
      status: 'Confirmada',
      data: '2026-02-04',
      horarioPrevisto: '09:00'
    },
    {
      paciente: 'Aline Barbosa',
      profissional: 'Dra. Ana Souza',
      status: 'Finalizada',
      data: '2026-02-04',
      horarioPrevisto: '09:30'
    },
    {
      paciente: 'Gustavo Nunes',
      profissional: 'Dr. Carlos Lima',
      status: 'Em Andamento',
      data: '2026-02-05',
      horarioPrevisto: '10:00'
    },
    {
      paciente: 'Bruna Carvalho',
      profissional: 'Dra. Juliana Martins',
      status: 'Cancelada',
      data: '2026-02-05',
      horarioPrevisto: '10:30'
    },
    {
      paciente: 'Eduardo Souza',
      profissional: 'Dr. Bruno Rocha',
      status: 'Agendada',
      data: '2026-02-06',
      horarioPrevisto: '08:00'
    }
  ];

  status = ["Todos os status", "Confirmada", "Agendada", "Cancelada", "Em Andamento", "Finalizada"];

  statusSelecionado: string = "Todos os status";

  showDialog() {
    this.visible = true;
  }
}
