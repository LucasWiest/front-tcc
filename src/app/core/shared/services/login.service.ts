import { Injectable } from "@angular/core";
import { IProfile } from "../../nav/profile/@shared/profile.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class LoginService {

    private basicBehavior = new BehaviorSubject<IProfile>(null);

    private user: IProfile = null;

    constructor(

    ) { }

    get basicBehavior$(): Observable<IProfile> {
        return this.basicBehavior.asObservable();
    }

    getUser() {
        return this.user;
    }

    createUser (us: IProfile) {

        us.id = 240

        this.user = us;

        this.basicBehavior.next(us);
    }

}