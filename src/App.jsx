function App() {
  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
        <div className="col-span-1 bg-zinc-800">hello</div>
        <div className="col-span-4 p-10">
          <div className="container h-120"></div>
          <div className="bg-zinc-800 p-1 pr-5 flex w-1/2 h-16 text-white m-auto rounded-4xl border-zinc-700">
            <input
              type="text"
              className="w-full outline-none h-full p-3"
              placeholder="Ask me anything"
            />
            <button>Ask</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
