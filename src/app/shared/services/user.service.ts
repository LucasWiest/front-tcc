import { Injectable } from "@angular/core";
import { GroupService } from "./group.service";
import { LoginService } from "../../core/shared/services/login.service";



@Injectable({
  providedIn: "root"
})

export class UserService {

  private usersGroup = [
    // Grupo 1 - Grupo de trabalho (nMembers: 5, Encerrado)
    {
      idUser: 1,
      groupId: 1,
      name: "Membro 1-Grupo1",
      role: "Engenheiro de Software",
      entryDate: new Date("2023-01-10"),
      isAdmin: true
    },
    {
      idUser: 2,
      groupId: 1,
      name: "Membro 2-Grupo1",
      role: "Arquiteto de Sistemas",
      entryDate: new Date("2023-01-11"),
      isAdmin: false
    },
    {
      idUser: 3,
      groupId: 1,
      name: "Membro 3-Grupo1",
      role: "DevOps",
      entryDate: new Date("2023-01-12"),
      isAdmin: false
    },
    {
      idUser: 4,
      groupId: 1,
      name: "Membro 4-Grupo1",
      role: "QA Engineer",
      entryDate: new Date("2023-01-13"),
      isAdmin: false
    },
    {
      idUser: 5,
      groupId: 1,
      name: "Membro 5-Grupo1",
      role: "Product Owner",
      entryDate: new Date("2023-01-14"),
      isAdmin: false
    },

    // Grupo 2 - Grupo de app (nMembers: 6, Ativo)
    {
      idUser: 6,
      groupId: 2,
      name: "Membro 1-Grupo2",
      role: "Mobile Developer",
      entryDate: new Date("2023-02-01"),
      isAdmin: true
    },
    {
      idUser: 7,
      groupId: 2,
      name: "Membro 2-Grupo2",
      role: "UI/UX Designer",
      entryDate: new Date("2023-02-02"),
      isAdmin: false
    },
    {
      idUser: 8,
      groupId: 2,
      name: "Membro 3-Grupo2",
      role: "Backend Developer",
      entryDate: new Date("2023-02-03"),
      isAdmin: false
    },
    {
      idUser: 9,
      groupId: 2,
      name: "Membro 4-Grupo2",
      role: "Scrum Master",
      entryDate: new Date("2023-02-04"),
      isAdmin: false
    },
    {
      idUser: 10,
      groupId: 2,
      name: "Membro 5-Grupo2",
      role: "QA Engineer",
      entryDate: new Date("2023-02-05"),
      isAdmin: false
    },
    {
      idUser: 11,
      groupId: 2,
      name: "Membro 6-Grupo2",
      role: "Product Manager",
      entryDate: new Date("2023-02-06"),
      isAdmin: false
    },

    // Grupo 3 - Buscapé (nMembers: 3, Ativo)
    {
      idUser: 12,
      groupId: 3,
      name: "Membro 1-Grupo3",
      role: "Data Engineer",
      entryDate: new Date("2023-03-01"),
      isAdmin: true
    },
    {
      idUser: 13,
      groupId: 3,
      name: "Membro 2-Grupo3",
      role: "Search Specialist",
      entryDate: new Date("2023-03-02"),
      isAdmin: false
    },
    {
      idUser: 14,
      groupId: 3,
      name: "Membro 3-Grupo3",
      role: "Fullstack Developer",
      entryDate: new Date("2023-03-03"),
      isAdmin: false
    },

    // Grupo 4 - Wall Jobs (nMembers: 3, Ativo)
    {
      idUser: 15,
      groupId: 4,
      name: "Membro 1-Grupo4",
      role: "HR Manager",
      entryDate: new Date("2023-04-01"),
      isAdmin: true
    },
    {
      idUser: 16,
      groupId: 4,
      name: "Membro 2-Grupo4",
      role: "Recruiter",
      entryDate: new Date("2023-04-02"),
      isAdmin: false
    },
    {
      idUser: 17,
      groupId: 4,
      name: "Membro 3-Grupo4",
      role: "Frontend Developer",
      entryDate: new Date("2023-04-03"),
      isAdmin: false
    },

    // Grupo 5 - Quinto Andar (nMembers: 4, Ativo)
    {
      idUser: 18,
      groupId: 5,
      name: "Membro 1-Grupo5",
      role: "Facilities Manager",
      entryDate: new Date("2023-05-01"),
      isAdmin: true
    },
    {
      idUser: 19,
      groupId: 5,
      name: "Membro 2-Grupo5",
      role: "Interior Designer",
      entryDate: new Date("2023-05-02"),
      isAdmin: false
    },
    {
      idUser: 20,
      groupId: 5,
      name: "Membro 3-Grupo5",
      role: "IT Specialist",
      entryDate: new Date("2023-05-03"),
      isAdmin: false
    },
    {
      idUser: 21,
      groupId: 5,
      name: "Membro 4-Grupo5",
      role: "Operations",
      entryDate: new Date("2023-05-04"),
      isAdmin: false
    },

    // Grupo 6 - Tradr (nMembers: 2, Ativo)
    {
      idUser: 22,
      groupId: 6,
      name: "Membro 1-Grupo6",
      role: "NLP Engineer",
      entryDate: new Date("2023-06-01"),
      isAdmin: true
    },
    {
      idUser: 23,
      groupId: 6,
      name: "Membro 2-Grupo6",
      role: "Linguist",
      entryDate: new Date("2023-06-02"),
      isAdmin: false
    },

    // Grupo 7 - Crop (nMembers: 7, Ativo)
    {
      idUser: 24,
      groupId: 7,
      name: "Membro 1-Grupo7",
      role: "Project Manager",
      entryDate: new Date("2023-07-01"),
      isAdmin: true
    },
    {
      idUser: 25,
      groupId: 7,
      name: "Membro 2-Grupo7",
      role: "Blockchain Dev",
      entryDate: new Date("2023-07-02"),
      isAdmin: false
    },
    {
      idUser: 26,
      groupId: 7,
      name: "Membro 3-Grupo7",
      role: "Legal Advisor",
      entryDate: new Date("2023-07-03"),
      isAdmin: false
    },
    {
      idUser: 27,
      groupId: 7,
      name: "Membro 4-Grupo7",
      role: "Data Scientist",
      entryDate: new Date("2023-07-04"),
      isAdmin: false
    },
    {
      idUser: 28,
      groupId: 7,
      name: "Membro 5-Grupo7",
      role: "Frontend Dev",
      entryDate: new Date("2023-07-05"),
      isAdmin: false
    },
    {
      idUser: 29,
      groupId: 7,
      name: "Membro 6-Grupo7",
      role: "Business Analyst",
      entryDate: new Date("2023-07-06"),
      isAdmin: false
    },
    {
      idUser: 30,
      groupId: 7,
      name: "Membro 7-Grupo7",
      role: "Finance Specialist",
      entryDate: new Date("2023-07-07"),
      isAdmin: false
    },

    // Grupo 8 - Quero Bolsa (nMembers: 6, Inativo)
    {
      idUser: 31,
      groupId: 8,
      name: "Membro 1-Grupo8",
      role: "Education Manager",
      entryDate: new Date("2023-08-01"),
      isAdmin: true
    },
    {
      idUser: 32,
      groupId: 8,
      name: "Membro 2-Grupo8",
      role: "HR Specialist",
      entryDate: new Date("2023-08-02"),
      isAdmin: false
    },
    {
      idUser: 33,
      groupId: 8,
      name: "Membro 3-Grupo8",
      role: "Finance",
      entryDate: new Date("2023-08-03"),
      isAdmin: false
    },
    {
      idUser: 34,
      groupId: 8,
      name: "Membro 4-Grupo8",
      role: "University Relations",
      entryDate: new Date("2023-08-04"),
      isAdmin: false
    },
    {
      idUser: 35,
      groupId: 8,
      name: "Membro 5-Grupo8",
      role: "Content Manager",
      entryDate: new Date("2023-08-05"),
      isAdmin: false
    },
    {
      idUser: 36,
      groupId: 8,
      name: "Membro 6-Grupo8",
      role: "IT Trainer",
      entryDate: new Date("2023-08-06"),
      isAdmin: false
    },

    // Adicionando membros extras para grupos que possam ter sido incompletos
    // Grupo 3 - Buscapé (se necessário)
    {
      idUser: 37,
      groupId: 3,
      name: "Membro 4-Grupo3",
      role: "UX Researcher",
      entryDate: new Date("2023-03-04"),
      isAdmin: false
    },
    {
      idUser: 38,
      groupId: 3,
      name: "Membro 5-Grupo3",
      role: "DevOps Engineer",
      entryDate: new Date("2023-03-05"),
      isAdmin: false
    }
  ]

  constructor(
    private groupService: GroupService,
    private loginService: LoginService

  ) { }


  getUsers(groupId: number) {
    return this.usersGroup.filter(x => x.groupId == groupId)
  }

  getMySub(groupId: number) {
    return this.usersGroup.find(x => x.groupId == groupId && x.idUser == 240);
  }

  postUserGroup(groupId: number) {

    let us = this.loginService.getUser();

    this.usersGroup.push({
      idUser: us.id,
      groupId: groupId,
      entryDate: new Date(),
      role: us.search,
      isAdmin: false,
      name: us.name
    });

    this.groupService.alterGroup(groupId)
  }

  saveProfile(groupId: number) {

    let us = this.loginService.getUser();

    this.usersGroup.push({
      idUser: us.id,
      groupId: groupId,
      entryDate: new Date(),
      role: us.search,
      isAdmin: false,
      name: us.name
    });
  }
}