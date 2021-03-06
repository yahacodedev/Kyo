import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Department } from './department';
import { People } from './people';
import { Role } from '../role/role';

@Injectable()
export class DeptService {

    private PEOPLE_URL = '/people';

    private DEPT_URL = '/department';

    constructor(private http: HttpClient) { }

    getPeopleList(deptId: string): Observable<People[]> {
        return this.http.get(this.DEPT_URL + '/' + deptId + this.PEOPLE_URL).map(data => data['data'] as People[]);
    }

    getPeopleRole(peopleId: string): Observable<Role[]> {
        return this.http.get(this.PEOPLE_URL + '/' + peopleId + '/role').map(data => data['data'] as Role[]);
    }

    addPeople(people: People): Observable<void> {
        return this.http.post(this.PEOPLE_URL, people).map(() => null);
    }

    updatePeople(people: People): Observable<void> {
        return this.http.patch(this.PEOPLE_URL, people).map(() => null);
    }

    deletePeople(peopleId: string): Observable<void> {
        return this.http.delete(this.PEOPLE_URL + '/' + peopleId).map(() => null);
    }

    getAllDepartment(): Observable<Department[]> {
        return this.http.get(this.DEPT_URL).map(data => [data['data']] as Department[]);
    }

    addDepartment(department: Department): Observable<void> {
        return this.http.post(this.DEPT_URL, department).map(() => null);
    }

    modifyDepartment(department: Department): Observable<void> {
        return this.http.patch(this.DEPT_URL, department).map(() => null);
    }

    deleteDepartment(departmentId: string): Observable<void> {
        return this.http.delete(this.DEPT_URL + '/' + departmentId).map(() => null);
    }
}
