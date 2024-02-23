export function Index() {
  const handleClick = () => {
    alert('Hi!');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-fit flex flex-col items-center">
        <h1 className="text-surface-700 text-9xl font-bold">H1</h1>
        <button
          onClick={handleClick}
          className="w-fit m-10 px-4 py-3 bg-primary-500 rounded-xl text-white font-semibold hover:bg-primary-500/85 hover:shadow-lg transition ease-in-out duration-300"
        >
          Button
        </button>
        <p className="max-w-[500px] px-5 text-justify font-thin italic text-surface-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Index;
