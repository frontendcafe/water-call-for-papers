import { ChangeEvent } from "react";
import { Filter } from "../Filter/Filter";
import { InputText } from "../Input/InputText";
import { RadioOption, SelectedOption } from "../Radio/Radio";

interface FilterBarProps {
  isLoading: boolean;
  orderOnChange: (value: SelectedOption) => void;
  orderOptions: RadioOption[];
  orderValue: SelectedOption;
  searchHandler: (value: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

export const FilterBar = ({
  isLoading,
  orderOnChange,
  orderValue,
  searchHandler,
  searchQuery,
  orderOptions,
}: FilterBarProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white md:rounded-xl md:rounded-tl-none">
      <Filter btnLabel="Filtros" title="Filtros">
        <Filter.Radial
          label="Ordenar:"
          onSelectedChange={orderOnChange}
          options={orderOptions}
          value={orderValue}
          defaultValue={orderOptions[0].value}
        />
      </Filter>

      <InputText
        disabled={isLoading}
        idValue="search-bar"
        label="Barra de búsqueda"
        onChange={searchHandler}
        placeholder="Buscar"
        value={searchQuery}
      />
    </div>
  );
};
