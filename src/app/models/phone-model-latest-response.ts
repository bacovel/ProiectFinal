import { PhoneModel } from "./phone-model";

export type PhoneResponseModel = {
    status: boolean;
    data: Data;
}

type Data ={
    title: string;
    phones: PhoneModel[];
}