export default function Home() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold">FlirtMind AI</h1>
          <p className="text-lg">Trở thành bậc thầy trong game tán tỉnh!</p>
          
          <div className="flex-col md:flex-row gap-4 justify-center mt-6">
            <a
              href="/features"
              className="bg-white text-pink-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Khám phá gói
            </a>
            <a
              href="/chat"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-pink-500 transition"
            >
              Bắt đầu chat
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
