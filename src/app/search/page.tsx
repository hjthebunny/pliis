import SearchBar from "../ui/searchBar";
import Logo from "../ui/logo";
import CardList from "../ui/cardList";

const Search = () => {
  return (
    <>
      <header>
        <Logo scale={100} />
      </header>
      <nav className=" flex justify-center">
        <SearchBar includeBtn={true} />
      </nav>
      <section className=" flex justify-center p-4">
        <CardList />
      </section>
    </>
  );
};

export default Search;
