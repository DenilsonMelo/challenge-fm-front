export enum FreightStatus {
    EM_ROTA = "Em rota",
    AGUARDANDO_LANCE = "Aguardando lance",
    ENTREGUE = "Entregue"
}

export interface FreightResponseData {
    status: FreightStatus;
    date: string;
    driver: string;
    carrier: string;
    vehicleType: string;
    packageType: string;
    paymentType: string;
}