import { Tenant } from "./tenant";

export class AccessList{
    id: number;
    list: string[];
    length: number;
    tenant: string; //locatario
    date: string;
    deleted: boolean;
}