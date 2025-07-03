import { Injectable } from "@angular/core";



@Injectable({
    providedIn: "root"
})

export class TypeService {

    private types = [
        // Categorias (Careers) - typeId null pois são o topo da hierarquia
        { id: 1, description: "Saúde", category: "Careers", typeId: null },
        { id: 2, description: "Tecnologia", category: "Careers", typeId: null },
        { id: 3, description: "Engenharia", category: "Careers", typeId: null },
        { id: 4, description: "Educação", category: "Careers", typeId: null },

        // Profissões (Work) - Referenciam categorias
        // Saúde
        { id: 5, description: "Médico", category: "Work", typeId: 1 },
        { id: 6, description: "Enfermeiro", category: "Work", typeId: 1 },
        { id: 7, description: "Dentista", category: "Work", typeId: 1 },
        { id: 8, description: "Fisioterapeuta", category: "Work", typeId: 1 },

        // Tecnologia
        { id: 9, description: "Desenvolvedor Web", category: "Work", typeId: 2 },
        { id: 10, description: "Cientista de Dados", category: "Work", typeId: 2 },
        { id: 11, description: "Administrador de Redes", category: "Work", typeId: 2 },

        // Engenharia
        { id: 12, description: "Engenheiro Civil", category: "Work", typeId: 3 },
        { id: 13, description: "Engenheiro Mecânico", category: "Work", typeId: 3 },
        { id: 14, description: "Engenheiro Elétrico", category: "Work", typeId: 3 },

        // Educação
        { id: 15, description: "Professor", category: "Work", typeId: 4 },
        { id: 16, description: "Pedagogo", category: "Work", typeId: 4 },
        { id: 17, description: "Orientador Educacional", category: "Work", typeId: 4 },

        // Outras categorias (Careers)
        { id: 18, description: "Artes", category: "Careers", typeId: null },

        // Profissões de Artes
        { id: 19, description: "Designer Gráfico", category: "Work", typeId: 18 },
        { id: 20, description: "Músico", category: "Work", typeId: 18 },

        { id: 21, description: "Ativo", category: "Status", typeId: null },
        { id: 22, description: "Inativo", category: "Status", typeId: null },
        { id: 23, description: "Encerrado", category: "Status", typeId: null }
    ];

    constructor(

    ) { }

    getProfessions() {
        return this.types.filter(x => x.category == "Work");
    }

    getTypeByCategory(category: string) {
        return this.types.filter(x => x.category == category )
    }
}