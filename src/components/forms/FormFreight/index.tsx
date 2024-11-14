import { FreightResponseData } from "@/domain/Freight";
import { useForm } from "react-hook-form";

export default function FormFreight() {
  const { register, handleSubmit } = useForm<FreightResponseData>();

  const submit = async (data: FreightResponseData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit, console.log)}>
      <div>
        <label>Status do frete</label>
        <input {...register("status")}></input>
      </div>
      <div>
        <label>Data do frete</label>
        <input {...register("date")} type="date" placeholder="Defina uma data de busca"></input>
      </div>
      <div>
        <label>Transpotadora</label>
        <input {...register("carrier")} placeholder="Digite o nome da transpotadora"></input>
      </div>
      <div>
        <label>Motorista</label>
        <input {...register("driver")} placeholder="Digite o nome do motorista"></input>
      </div>
      <div>
        <label>Tipo de veículo</label>
        <input {...register("vehicleType")} placeholder="Selecione o tipo de veículo"></input>
      </div>
      <div>
        <label>Tipo de carga</label>
        <input {...register("packageType")}></input>
      </div>
      <div>
        <label>Tipo de pagamento</label>
        <input {...register("paymentType")}></input>
      </div>
      <div>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
}
