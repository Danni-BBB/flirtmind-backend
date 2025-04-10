export default function Features() {
  return (
<div className="py-20 bg-gray-100" id="pricing">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-900">Các Gói Dịch Vụ</h2>
    <p className="mt-4 text-lg text-gray-700">Chọn gói phù hợp với bạn!</p>
  </div>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
    {/* Free Plan */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-pink-500">Gói Free</h3>
      <p className="mt-2 text-gray-700">Trải nghiệm cơ bản với AI hỗ trợ tán tỉnh.</p>
      <ul className="mt-4 text-gray-700">
        <li>Chat với AI cơ bản</li>
        <li>Cung cấp 5 câu thả thính mỗi ngày</li>
        <li>Gợi ý hồ sơ cơ bản</li>
      </ul>
      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-lg">Đăng ký Free</button>
    </div>

    {/* Pro Plan */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-pink-500">Gói Pro</h3>
      <p className="mt-2 text-gray-700">Tính năng mở rộng với nhiều câu thả thính hơn.</p>
      <ul className="mt-4 text-gray-700">
        <li>Chat với AI nâng cao</li>
        <li>Tối ưu hồ sơ hẹn hò</li>
        <li>Cung cấp câu thả thính nâng cao</li>
        <li>Phân tích cuộc trò chuyện thực tế</li>
      </ul>
      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-lg">Đăng ký Pro</button>
    </div>

    {/* Alpha Male Plan */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-pink-500">Gói Alpha Male</h3>
      <p className="mt-2 text-gray-700">Trải nghiệm nâng cao với AI cực kỳ thông minh.</p>
      <ul className="mt-4 text-gray-700">
        <li>Chat với AI nâng cao</li>
        <li>Phân tích tâm lý và vibe trong trò chuyện</li>
        <li>Tối ưu hồ sơ hẹn hò chuyên sâu</li>
        <li>Tạo hồ sơ hẹn hò hoàn hảo</li>
        <li>Tư vấn giao tiếp cho các tình huống phức tạp</li>
      </ul>
      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-lg">Đăng ký Alpha Male</button>
    </div>
  </div>
</div>
  );
}
