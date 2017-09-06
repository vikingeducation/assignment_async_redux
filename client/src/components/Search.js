import Button from "./elements/Button";
import Input from "./elements/Input";

const Search = ({ onClick }) => {
  return (
    <form>
      <Input name="search" />
      <p>Displaying things</p>
      <Button onClick={onClick} size="sm" color="info" />
    </form>
  );
};
