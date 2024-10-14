import Plan from "./Plans";

export default interface Insurance  {
    insurance: string,
    description: string,
    order: number,
    plans?: Plan[];
}