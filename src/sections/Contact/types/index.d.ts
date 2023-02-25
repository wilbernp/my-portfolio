export type ChangeEventType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

export interface IStateInputs {
    name:string;
    email:string;
    message:string;
}