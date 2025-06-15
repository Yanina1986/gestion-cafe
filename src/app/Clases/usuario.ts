export class Usuario {
    
    public _id !: number;
    public get id(): number{
        return this._id;
    }

    public _nombre !: string;
    public get nombre(): string {
        return this._nombre;
    }

    public _apellido !: string;
    public get apellido():string{
        return this._apellido;
    }

}
