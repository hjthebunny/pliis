import SearchBar from "../ui/searchBar";
import Card from "../ui/card";
import Logo from "../ui/logo";

const Search = () => {
  const arr = [0, 0, 0, 0, 0, 0];
  const list = arr.map((el, index) => {
    return <Card key={index} />;
  });
  return (
    <>
      <header>
        <Logo scale={100} />
      </header>
      <nav className=" flex justify-center">
        <SearchBar includeBtn={true} />
      </nav>
      <section className=" flex justify-center p-4">
        <main className="flex flex-wrap justify-around transform duration-200 ease-out ">
          {list}
        </main>
      </section>
    </>
  );
};

export default Search;
