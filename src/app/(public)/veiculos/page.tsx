"use client";

import Cars from "@/components/Cars";
import { CarResponseData } from "@/domain/Car";
import { useInitialData } from "@/hooks/useInitialData";
import CarService from "@/services/Car";

export default function Page() {
  const { data } = useInitialData<CarResponseData[], CarResponseData[]>({
    api: {
      get: CarService.get,
    },
  });

  const dataArray = Object.values(data);
  
  return <Cars data={dataArray} />;
}
