import { Injectable } from "@angular/core";
import { GroupService } from "./group.service";

@Injectable({
    providedIn: "root"
})

export class InstitutionService {

    private institutions = [
        {
            name: "Feevale"
        },
        {
            name: "Unisinos"
        },
        {
            name: "PUC"
        },
        {
            name: "Uniritter"
        }
    ]

    constructor(
        private groupService: GroupService
    ) { }

    getInstitutions () {
        return this.institutions;
    }

}