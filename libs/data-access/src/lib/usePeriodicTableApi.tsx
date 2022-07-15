import { useQuery } from "@tanstack/react-query"
import { Atom } from "./models/atom"

export const usePeriodicTableApi = () => {
  const getPeriodicTable = useQuery<Atom[]>({
    queryKey: ['getPeriodicTable'],
    queryFn: () => fetch('https://raw.githubusercontent.com/neelpatel05/periodic-table-api-go/master/data.json').then((response) => response.json())
  })

  return { getPeriodicTable }
}

