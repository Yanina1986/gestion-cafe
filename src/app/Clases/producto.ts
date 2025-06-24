export class Producto {
    public _id !: number;
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }
    public _nombre !: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(v: string) {
        this._nombre = v;
    }

    public _descripcion !: string;
    public get descripcion(): string{
        return this._descripcion;
    }
    public set descripcion(v: string) {
        this._descripcion = v;
    }

    public _precio_arg !: number;
    public get precio_arg(): number{
        return this._precio_arg;
    }
    public set precio_arg(v: number) {
        this._precio_arg = v;
    }

    public _categoria !: string;
    public get categoria(): string{
        return this.categoria;
    }
    public set categoria(v: string) {
        this._categoria = v;
    }

    public _imagen !: string;
    public get image(): string{
        return this._imagen;
    }
    public set imagen(v: string) {
        this._imagen = v;
    }

    public _tipoProducto !: string;
    public get tipoProducto(): string {
        return this._tipoProducto;
    }
    public set tipoProducto(v: string) {
        this._tipoProducto = v;
    }

}

