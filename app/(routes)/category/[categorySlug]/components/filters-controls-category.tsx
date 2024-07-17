import FilterOrigin from "./filter-origin";

type FilterControlsCategoryProps = {
  setFilterOrigin: (origin: string) => void;
};

const FiltersControlsCategory = (props: FilterControlsCategoryProps) => {
  const { setFilterOrigin } = props;

  return (
    <div className="sm:w-[350] sm:mt-5 pl-6">
      <FilterOrigin setFilterOrigin={setFilterOrigin} />
    </div>
  );
};

export default FiltersControlsCategory;
