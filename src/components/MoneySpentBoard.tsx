const fetchMoneySpent = async (range: string) => {
  const mainSheetName = process.env.NEXT_PUBLIC_GOOGLE_MAIN_SHEET_NAME as string;

  const host = process.env.NEXT_PUBLIC_HOST as string;

  const response = await fetch(`${host}/api/sheets/${mainSheetName}?range=${range}`);

  const data = await response.json();
  return data.values[0][0];
};

export default async function MoneySpentBoard() {
  const [wannyMoneySpent, moominMoneySpent, totalMoneySpent] = await Promise.all([
    fetchMoneySpent('C24'),
    fetchMoneySpent('C25'),
    fetchMoneySpent('C26'),
  ]);

  return (
    <div className="flex flex-col w-full mb-4">
      <div className="flex flex-row justify-around">
        <div className="flex flex-col items-center">
          <div>🐶 빵떡</div>
        </div>
        <div className="flex flex-col items-center">
          <div>💵 합계</div>
        </div>
        <div className="flex flex-col items-center">
          <div>🐻‍❄️ 무민</div>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col items-center">
          <div>₩{wannyMoneySpent.toLocaleString()}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>₩{totalMoneySpent.toLocaleString()}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>₩{moominMoneySpent.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
