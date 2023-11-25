import useFormStore, { Category, categoryMap } from '@/hooks/useFormStore';
import { Button } from '@/components/ui/Button';

const CategoryButtonGroup: React.FC = () => {
  const categoryList: Category[] = Object.values(categoryMap);

  const { category, setCategory } = useFormStore(state => ({
    category: state.category,
    setCategory: state.actions.setCategory,
  }));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.value as Category);
    if (navigator.vibrate) {
      navigator.vibrate(15);
    }
  };

  return (
    <>
      <label className="block text-sm font-medium text-gray-700">카테고리</label>
      <div className="grid grid-cols-4 gap-4">
        {categoryList.map(categoryElement => (
          <div key={categoryElement}>
            <Button
              type="button"
              value={categoryElement}
              className={`w-full py-2 rounded-lg shadow  ${
                category !== categoryElement
                  ? 'bg-blue-200 hover:bg-blue-300 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-gray-700'
                  : 'bg-[#024280] focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-white'
              }`}
              onClick={handleClick}
            >
              {category !== categoryElement ? categoryElement.substring(0, 2) : categoryElement.substring(2)}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryButtonGroup;
