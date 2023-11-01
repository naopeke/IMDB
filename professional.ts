export class Professional {
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

        //método mostrar el valor
        public showValue ():void {
            console.log(`name : ${this.name}`);
            console.log(`age : ${this.age}`)
            console.log(`weight : ${this.weight}`)
            console.log(`height : ${this.height}`)
            console.log(`isRetired : ${this.isRetired}`)
            console.log(`nationality : ${this.nationality}`)
            console.log(`oscarsNumber : ${this.oscarsNumber}`)
            console.log(`profession : ${this.profession}`)
        }

    }