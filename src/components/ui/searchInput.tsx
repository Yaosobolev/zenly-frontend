import { FaPlus } from "react-icons/fa";
import { Input } from "./input";
import { useFriendStore } from "@/store/friendshipStore";

const SearchInput: React.FC = () => {
  const { searchValue, setSearchValue, clearSearch } = useFriendStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="relative px-2 w-full">
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
