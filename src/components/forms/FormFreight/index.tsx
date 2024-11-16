import { FreightCreateDTO, FreightResponseData } from "@/domain/Freight";
import { useForm } from "react-hook-form";
import { Container, InputGroup, RadioGroup } from "./styles";
import { useCompleteData } from "@/hooks/useCompleteData";
import { useState } from "react";
import FreightService from "@/services/Freight";

type FormFreightProps = {
  addFreight: (newFreight: FreightResponseData) => void;
};

export default function FormFreight({ addFreight }: FormFreightProps) {
  const { carData, packagesData, paymentData, driverData, carrierData } =
    useCompleteData();

  const { register, handleSubmit, reset } = useForm<FreightCreateDTO>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (data: FreightCreateDTO) => {
    setIsSubmitting(true);

    try {
      const { data: dataResponse } = await FreightService.create(data);
      addFreight(dataResponse as FreightResponseData);
      reset();
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submit, console.log)}>
        <RadioGroup>
          <label>Status do frete</label>
          <div>
            <input type="radio" value="Em rota" {...register("status")} />
            <p>Em rota</p>
            <input
              type="radio"
              value="Aguardando lance"
              {...register("status")}
            />
            <p>Aguardando lance</p>
            <input type="radio" value="Entregue" {...register("status")} />
            <p>Entregue</p>
          </div>
        </RadioGroup>
        <InputGroup>
          <label>Data do frete</label>
          <input
            {...register("dateFreight")}
            type="date"
            placeholder="Defina uma data de busca"
          ></input>
        </InputGroup>
        <InputGroup>
          <label>Transportadora</label>
          <select {...register("carrier")} defaultValue="">
            <option value="" disabled>
              Selecione uma transportadora
            </option>
            {carrierData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </InputGroup>
        <InputGroup>
          <label>Motorista</label>
          <select {...register("driver")} defaultValue="">
            <option value="" disabled>
              Selecione um motorista
            </option>
            {driverData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </InputGroup>
        <InputGroup>
          <label>Tipo de veículo</label>
          <select {...register("car")} defaultValue="">
            <option value="" disabled>
              Selecione um motorista
            </option>
            {carData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.model}
              </option>
            ))}
          </select>
        </InputGroup>
        <InputGroup>
          <label>Tipo de carga</label>
          <select {...register("packages")} defaultValue="">
            <option value="" disabled>
              Selecione um tipo de carga
            </option>
            {packagesData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.type}
              </option>
            ))}
          </select>
        </InputGroup>
        <InputGroup>
          <label>Tipo de pagamento</label>
          <select {...register("payment")} defaultValue="">
            <option value="" disabled>
              Selecione um tipo de pagamento
            </option>
            {paymentData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.type}
              </option>
            ))}
          </select>
        </InputGroup>
        <InputGroup>
          <button
            className="button-sucess"
            type="submit"
            disabled={isSubmitting}
          >
            Cadastrar
          </button>
        </InputGroup>
        <InputGroup>
          <button className="button-cancel">Cancelar</button>
        </InputGroup>
      </form>
    </Container>
  );
}
