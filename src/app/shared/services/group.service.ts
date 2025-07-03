import { Injectable } from "@angular/core";




@Injectable({
    providedIn: "root"
})

export class GroupService {

    private myGroups: any[] = [

    ];

    private groupsToEnter: any[] = [
        {
            id: 3,
            name: "Buscapé",
            nMembers: 3,
            status: "Ativo",
            description: `O Buscapé é uma iniciativa para criar um sistema interno de busca unificada...`,
            target: ["Desenvolvedor Web", "Cientista de Dados", "Administrador de Redes"]
        },
        {
            id: 1,
            name: "Grupo de trabalho",
            nMembers: 5,
            status: "Encerrado",
            description: `O Grupo de Trabalho foi formado em janeiro de 2023 com o objetivo principal...`,
            target: ["Desenvolvedor Web", "Engenheiro Civil", "Engenheiro Mecânico", "Engenheiro Elétrico"]
        },
        {
            id: 2,
            name: "Grupo de app",
            nMembers: 6,
            status: "Ativo",
            description: `O Grupo de App está atualmente desenvolvendo a nova versão do aplicativo móvel...`,
            target: ["Desenvolvedor Web", "Cientista de Dados"]
        },
        {
            id: 4,
            name: "Wall Jobs",
            nMembers: 3,
            status: "Ativo",
            description: `Wall Jobs é uma plataforma interna para compartilhamento de oportunidades...`,
            target: ["Médico", "Enfermeiro", "Dentista", "Fisioterapeuta"]
        },
        {
            id: 5,
            name: "Quinto Andar",
            nMembers: 4,
            status: "Ativo",
            description: `O Quinto Andar é um projeto ousado de reformulação do espaço físico...`,
            target: ["Engenheiro Civil", "Engenheiro Elétrico"]
        },
        {
            id: 6,
            name: "Tradr",
            nMembers: 2,
            status: "Ativo",
            description: `Tradr é uma iniciativa para desenvolver um sistema interno de tradução automática...`,
            target: ["Cientista de Dados", "Desenvolvedor Web"]
        },
        {
            id: 7,
            name: "Crop",
            nMembers: 7,
            status: "Ativo",
            description: `O projeto Crop representa a estratégia da empresa para verticalização...`,
            target: ["Desenvolvedor Web", "Cientista de Dados", "Administrador de Redes"]
        },
        {
            id: 8,
            name: "Quero Bolsa",
            nMembers: 6,
            status: "Inativo",
            description: `Quero Bolsa é um programa de incentivo à educação continuada...`,
            target: ["Médico", "Enfermeiro", "Dentista", "Fisioterapeuta", "Engenheiro Civil", "Engenheiro Mecânico", "Engenheiro Elétrico"]
        }
    ]

    constructor(

    ) { }


    getGroupSimple(myGroups: boolean, target?: string, search?: string, status?: string,) {

        if (myGroups)
            return this.myGroups;
        else
            return this.groupsToEnter.filter(x => (!target || x.target.includes(target)) && (!status || x.status == status));
    }

    getGroupById(id: number) {
        let aux = [
            ...this.myGroups,
            ...this.groupsToEnter
        ];

        return aux.find(x => x.id == id);
    }

    save(obj: any) {
        this.myGroups.push(obj)
    }

    alterGroup(groupId: any) {

        let index = this.groupsToEnter.findIndex(x => x.id == groupId);

        this.groupsToEnter[index].nMembers += 1;

        this.myGroups.push(this.groupsToEnter[index])

        this.groupsToEnter.splice(index, 1);

    }
}