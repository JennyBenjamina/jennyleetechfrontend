import laceImg from "../assets/blacklace4.png";

function Test() {
  return (
    <>
      <div className="text-center py-4 border-b-8 border-gray-900 border-double">
        <div className="flex justify-between items-center p-4">
          {/* Special Edition Border needs to be 17 x 17 */}
          <div className="special-edition flex flex-col justify-center">
            <p className="font-bold uppercase">Special</p>
            <p className="font-bold uppercase">Edition</p>
          </div>
          <div className="flex justify-between w-full text-4xl font-black tracking-wider">
            {/* Insert image */}
            <img src={laceImg} alt="lace image" />
            <div className="flex flex-col items-center">
              {/* Insert image */}

              <img src={laceImg} alt="lace image" />

              <h1 id="news" className="header-title">
                News
              </h1>
            </div>
            {/* Insert image */}

            <img src={laceImg} alt="lace image" />
          </div>
          <div className="special-edition flex flex-col justify-center">
            <p className="font-bold uppercase">Special</p>
            <p className="font-bold uppercase">Edition</p>
          </div>
        </div>
        <div className="border-t-8 border-gray-900 border-double flex justify-between items-center p-4 pt-6 mt-2">
          <p className="uppercase">Vol. 10, No. 4</p>
          <p className="uppercase font-bold">80th Edition</p>
          <p className="uppercase">10 September 2025</p>
        </div>
      </div>

      <div className="py-8">
        <h1 className="header-title text-4xl font-extrabold text-center uppercase">
          Why Senior Care Needs to Change
        </h1>
        <div className="flex justify-center mt-4">
          <img
            src="https://picsum.photos/1000/400"
            alt="Senior Care Image"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="container mx-auto py-8 border-t border-gray-300">
        <h2 className="drop-cap text-2xl font-extrabold text-center uppercase">
          Senior Living | Family | What's Next
        </h2>
        <div className="flex flex-wrap justify-center mt-8 space-x-4">
          <div className="w-full md:w-1/2 flex items-center">
            <div className="text-lg font-serif">
              <p className="drop-cap text-6xl font-extrabold text-gray-900 float-left mr-4">
                L
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0 border-4 border-gray-900">
            <img
              src="https://picsum.photos/350/400"
              alt="Senior Image"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 border-t border-gray-300">
        <h2 className="drop-cap text-2xl font-extrabold text-center uppercase">
          Senior Living | Family | What's Next
        </h2>
        <div className="mt-8 space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Test;
