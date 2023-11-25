export default function MoneySpentBoardFallback() {
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
      <div className="flex flex-row justify-around h-6 text-xs text-gray-500">
        <div className="flex flex-col items-center justify-center">
          <div>😗 소비금액 조작중...</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>🫣 예산을 넘었는지 검사중...</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>😎 토스 기록 훔치는중...</div>
        </div>
      </div>
    </div>
  );
}
