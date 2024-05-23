import { FaPlus } from "react-icons/fa";
import { Input } from "./input";

type SearchInputProps = {
  onSearchChange: (value: string) => void;
  clearSearch: () => void;
  searchValue: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  onSearchChange,
  clearSearch,
  searchValue,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };
  return (
    <div className="relative">
      <h2 className="text-xl text-center mb-2">Сообщения</h2>
      <Input
        placeholder="Поиск..."
        className="h-10 rounded-md  focus-visible:ring-[#5AB2FF] focus-visible:ring-1"
        onChange={handleChange}
        value={searchValue}
      />

      {searchValue.length > 0 && (
        <FaPlus
          className="absolute top-[50px] right-3 size-3 rotate-45 cursor-pointer"
          onClick={clearSearch}
        />
      )}
    </div>
  );
};

export default SearchInput;
