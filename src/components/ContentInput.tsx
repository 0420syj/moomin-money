import useFormStore from '@/hooks/useFormStore';

const ContentInput: React.FC = () => {
  const { content, setContent } = useFormStore(state => ({
    content: state.content,
    setContent: state.actions.setContent,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <label htmlFor="content" className="block text-sm font-medium text-gray-700">
        내용
      </label>
      <input
        required
        id="content"
        type="text"
        value={content}
        onChange={handleChange}
        className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      />
    </>
  );
};

export default ContentInput;
