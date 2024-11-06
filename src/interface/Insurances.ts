import Plan from "./Plans";

export default interface Insurance  {
    insurance: string,
    description: string,
    order: number,
    iconimage:string,
    plans?: Plan[];
}