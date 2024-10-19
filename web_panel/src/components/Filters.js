import React, {useState} from "react"

// const Selectors = props => {
//   return(
//     <div>
//             {/* Search */}
//           <form className="input-form mb-4">
//             <input
//               type="text"
//               className="search-input p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Search..."
//               onChange={changeSearch}
//             />
//           </form>

//           {/* Price */}
//           <div className="flex justify-between items-center mb-2">
//             <h5 className="text-lg font-semibold">Price</h5>
//           </div>
//           <form className="price-form mb-4">
//             <input
//               type="range"
//               className="price-filter w-full"
//               min={0}
//               defaultValue={priceFilter}
//               max={10000}
//               onChange={changePrice}
//             />
//             <span className="price-value text-gray-600 block mt-2">
//               Value: ₹{priceFilter}
//             </span>
//           </form>

//           {/* RAM | Storage */}
//           <div
//             className="flex justify-between items-center mb-2 cursor-pointer"
//             onClick={() => toggleSection("storage")}
//           >
//             <h5 className="text-lg font-semibold">Ram | Storage</h5>
//             <span>{isExpanded.storage ? "▲" : "▼"}</span>
//           </div>
//           {isExpanded.storage && (
//             <div className="mb-4">
//               <label>
//                 <input type="checkbox" /> 1GB | 16GB
//               </label>
//               <br />
//               <label>
//                 <input type="checkbox" /> 2GB | 128GB
//               </label>
//               {/* Add other options as needed */}
//             </div>
//           )}

//           {/* Brand */}
//           <div
//             className="flex justify-between items-center mb-2 cursor-pointer"
//             onClick={() => toggleSection("brand")}
//           >
//             <h5 className="text-lg font-semibold">Brand</h5>
//             <span>{isExpanded.brand ? "▲" : "▼"}</span>
//           </div>
//           {isExpanded.brand && (
//             <div className="mb-4">
//               <label>
//                 <input type="checkbox" /> Apple
//               </label>
//               <br />
//               <label>
//                 <input type="checkbox" /> Samsung
//               </label>
//               {/* Add other options as needed */}
//             </div>
//           )}

//           {/* Color */}
//           <div
//             className="flex justify-between items-center mb-2 cursor-pointer"
//             onClick={() => toggleSection("color")}
//           >
//             <h5 className="text-lg font-semibold">Color</h5>
//             <span>{isExpanded.color ? "▲" : "▼"}</span>
//           </div>
//           {isExpanded.color && (
//             <div className="mb-4">
//               <label>
//                 <input type="checkbox" /> Black
//               </label>
//               <br />
//               <label>
//                 <input type="checkbox" /> White
//               </label>
//               {/* Add other options as needed */}
//             </div>
//           )}

//           {/* Display */}
//           <div
//             className="flex justify-between items-center mb-2 cursor-pointer"
//             onClick={() => toggleSection("display")}
//           >
//             <h5 className="text-lg font-semibold">Display</h5>
//             <span>{isExpanded.display ? "▲" : "▼"}</span>
//           </div>
//           {isExpanded.display && (
//             <div className="mb-4">
//               <label>
//                 <input type="checkbox" /> 5.5 inches
//               </label>
//               <br />
//               <label>
//                 <input type="checkbox" /> 6.1 inches
//               </label>
//               {/* Add other options as needed */}
//             </div>
//           )}

//           {/* Battery */}
//           <div
//             className="flex justify-between items-center mb-2 cursor-pointer"
//             onClick={() => toggleSection("battery")}
//           >
//             <h5 className="text-lg font-semibold">Battery</h5>
//             <span>{isExpanded.battery ? "▲" : "▼"}</span>
//           </div>
//           {isExpanded.battery && (
//             <div className="mb-4">
//               <label>
//                 <input type="checkbox" /> 3000mAh
//               </label>
//               <br />
//               <label>
//                 <input type="checkbox" /> 4000mAh
//               </label>
//               {/* Add other options as needed */}
//             </div>
//           )}

//           {/* Front Camera */}
//           <div
//             className="flex justify-between items-center mb-2 cursor-pointer"
//             onClick={() => toggleSection("frontCamera")}
//           >
//             <h5 className="text-lg font-semibold">Front Camera</h5>
//             <span>{isExpanded.frontCamera ? "▲" : "▼"}</span>
//           </div>
//           {isExpanded.frontCamera && (
//             <div className="mb-4">
//               <label>
//                 <input type="checkbox" /> 8MP
//               </label>
//               <br />
//               <label>
//                 <input type="checkbox" /> 12MP
//               </label>
//               {/* Add other options as needed */}
//             </div>
//           )}
//           </div>
//   )
// }

const Filters = props => {
  const {priceFilter, changePrice, changeSearch} = props

  // State to manage collapsed sections
  const [isExpanded, setIsExpanded] = useState({
    storage: true,
    brand: true,
    color: true,
    display: true,
    battery: true,
    frontCamera: true,
  })

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const toggleSection = section => {
    setIsExpanded(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }))
  }

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen)
  }

  return (
    <>
      <div className="">
        <div className="hidden lg:block p-4 bg-white shadow-lg rounded-lg ">
          <div>
            {/* Search */}
            <form className="input-form mb-4">
              <input
                type="text"
                className="search-input p-2 border border-gray-300 rounded-lg w-full"
                placeholder="Search..."
                onChange={changeSearch}
              />
            </form>

            {/* Price */}
            <div className="flex justify-between items-center mb-2">
              <h5 className="text-lg font-semibold">Price</h5>
            </div>
            <form className="price-form mb-4">
              <input
                type="range"
                className="price-filter w-full"
                min={0}
                defaultValue={priceFilter}
                max={10000}
                onChange={changePrice}
              />
              <span className="price-value text-gray-600 block mt-2">
                Value: ₹{priceFilter}
              </span>
            </form>

            {/* RAM | Storage */}
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection("storage")}
            >
              <h5 className="text-lg font-semibold">Ram | Storage</h5>
              <span>{isExpanded.storage ? "▲" : "▼"}</span>
            </div>
            {isExpanded.storage && (
              <div className="mb-4">
                <label>
                  <input type="checkbox" /> 1GB | 16GB
                </label>
                <br />
                <label>
                  <input type="checkbox" /> 2GB | 128GB
                </label>
                {/* Add other options as needed */}
              </div>
            )}

            {/* Brand */}
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection("brand")}
            >
              <h5 className="text-lg font-semibold">Brand</h5>
              <span>{isExpanded.brand ? "▲" : "▼"}</span>
            </div>
            {isExpanded.brand && (
              <div className="mb-4">
                <label>
                  <input type="checkbox" /> Apple
                </label>
                <br />
                <label>
                  <input type="checkbox" /> Samsung
                </label>
                {/* Add other options as needed */}
              </div>
            )}

            {/* Color */}
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection("color")}
            >
              <h5 className="text-lg font-semibold">Color</h5>
              <span>{isExpanded.color ? "▲" : "▼"}</span>
            </div>
            {isExpanded.color && (
              <div className="mb-4">
                <label>
                  <input type="checkbox" /> Black
                </label>
                <br />
                <label>
                  <input type="checkbox" /> White
                </label>
                {/* Add other options as needed */}
              </div>
            )}

            {/* Display */}
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection("display")}
            >
              <h5 className="text-lg font-semibold">Display</h5>
              <span>{isExpanded.display ? "▲" : "▼"}</span>
            </div>
            {isExpanded.display && (
              <div className="mb-4">
                <label>
                  <input type="checkbox" /> 5.5 inches
                </label>
                <br />
                <label>
                  <input type="checkbox" /> 6.1 inches
                </label>
                {/* Add other options as needed */}
              </div>
            )}

            {/* Battery */}
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection("battery")}
            >
              <h5 className="text-lg font-semibold">Battery</h5>
              <span>{isExpanded.battery ? "▲" : "▼"}</span>
            </div>
            {isExpanded.battery && (
              <div className="mb-4">
                <label>
                  <input type="checkbox" /> 3000mAh
                </label>
                <br />
                <label>
                  <input type="checkbox" /> 4000mAh
                </label>
                {/* Add other options as needed */}
              </div>
            )}

            {/* Front Camera */}
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection("frontCamera")}
            >
              <h5 className="text-lg font-semibold">Front Camera</h5>
              <span>{isExpanded.frontCamera ? "▲" : "▼"}</span>
            </div>
            {isExpanded.frontCamera && (
              <div className="mb-4">
                <label>
                  <input type="checkbox" /> 8MP
                </label>
                <br />
                <label>
                  <input type="checkbox" /> 12MP
                </label>
                {/* Add other options as needed */}
              </div>
            )}
          </div>
        </div>
        {/* Filter Button for mobile screens */}
        <button
          onClick={toggleMobileFilter}
          className="block lg:hidden p-2 bg-gray-200 text-gray-800 rounded-lg w-full"
        >
          Filter and sort
        </button>

        {/* Modal for Mobile Filters */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end lg:hidden z-50">
            <div className="bg-white w-full h-3/4 rounded-t-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Filter and sort</h3>
                <button
                  onClick={toggleMobileFilter}
                  className="text-gray-500 text-xl font-semibold"
                >
                  &times;
                </button>
              </div>

              {/* Filter Sections in Modal */}
              <div className="overflow-y-auto h-4/6">
                <div>
                  {/* Search */}
                  <form className="input-form mb-4">
                    <input
                      type="text"
                      className="search-input p-2 border border-gray-300 rounded-lg w-full"
                      placeholder="Search..."
                      onChange={changeSearch}
                    />
                  </form>

                  {/* Price */}
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="text-lg font-semibold">Price</h5>
                  </div>
                  <form className="price-form mb-4">
                    <input
                      type="range"
                      className="price-filter w-full"
                      min={0}
                      defaultValue={priceFilter}
                      max={10000}
                      onChange={changePrice}
                    />
                    <span className="price-value text-gray-600 block mt-2">
                      Value: ₹{priceFilter}
                    </span>
                  </form>

                  {/* RAM | Storage */}
                  <div
                    className="flex justify-between items-center mb-2 cursor-pointer"
                    onClick={() => toggleSection("storage")}
                  >
                    <h5 className="text-lg font-semibold">Ram | Storage</h5>
                    <span>{isExpanded.storage ? "▲" : "▼"}</span>
                  </div>
                  {isExpanded.storage && (
                    <div className="mb-4">
                      <label>
                        <input type="checkbox" /> 1GB | 16GB
                      </label>
                      <br />
                      <label>
                        <input type="checkbox" /> 2GB | 128GB
                      </label>
                      {/* Add other options as needed */}
                    </div>
                  )}

                  {/* Brand */}
                  <div
                    className="flex justify-between items-center mb-2 cursor-pointer"
                    onClick={() => toggleSection("brand")}
                  >
                    <h5 className="text-lg font-semibold">Brand</h5>
                    <span>{isExpanded.brand ? "▲" : "▼"}</span>
                  </div>
                  {isExpanded.brand && (
                    <div className="mb-4">
                      <label>
                        <input type="checkbox" /> Apple
                      </label>
                      <br />
                      <label>
                        <input type="checkbox" /> Samsung
                      </label>
                      {/* Add other options as needed */}
                    </div>
                  )}

                  {/* Color */}
                  <div
                    className="flex justify-between items-center mb-2 cursor-pointer"
                    onClick={() => toggleSection("color")}
                  >
                    <h5 className="text-lg font-semibold">Color</h5>
                    <span>{isExpanded.color ? "▲" : "▼"}</span>
                  </div>
                  {isExpanded.color && (
                    <div className="mb-4">
                      <label>
                        <input type="checkbox" /> Black
                      </label>
                      <br />
                      <label>
                        <input type="checkbox" /> White
                      </label>
                      {/* Add other options as needed */}
                    </div>
                  )}

                  {/* Display */}
                  <div
                    className="flex justify-between items-center mb-2 cursor-pointer"
                    onClick={() => toggleSection("display")}
                  >
                    <h5 className="text-lg font-semibold">Display</h5>
                    <span>{isExpanded.display ? "▲" : "▼"}</span>
                  </div>
                  {isExpanded.display && (
                    <div className="mb-4">
                      <label>
                        <input type="checkbox" /> 5.5 inches
                      </label>
                      <br />
                      <label>
                        <input type="checkbox" /> 6.1 inches
                      </label>
                      {/* Add other options as needed */}
                    </div>
                  )}

                  {/* Battery */}
                  <div
                    className="flex justify-between items-center mb-2 cursor-pointer"
                    onClick={() => toggleSection("battery")}
                  >
                    <h5 className="text-lg font-semibold">Battery</h5>
                    <span>{isExpanded.battery ? "▲" : "▼"}</span>
                  </div>
                  {isExpanded.battery && (
                    <div className="mb-4">
                      <label>
                        <input type="checkbox" /> 3000mAh
                      </label>
                      <br />
                      <label>
                        <input type="checkbox" /> 4000mAh
                      </label>
                      {/* Add other options as needed */}
                    </div>
                  )}

                  {/* Front Camera */}
                  <div
                    className="flex justify-between items-center mb-2 cursor-pointer"
                    onClick={() => toggleSection("frontCamera")}
                  >
                    <h5 className="text-lg font-semibold">Front Camera</h5>
                    <span>{isExpanded.frontCamera ? "▲" : "▼"}</span>
                  </div>
                  {isExpanded.frontCamera && (
                    <div className="mb-4">
                      <label>
                        <input type="checkbox" /> 8MP
                      </label>
                      <br />
                      <label>
                        <input type="checkbox" /> 12MP
                      </label>
                      {/* Add other options as needed */}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer with Apply and Remove All Buttons */}
              <div className="flex justify-between mt-4 p-2 border-t">
                <button
                  onClick={() => {
                    // Logic to remove all filters
                  }}
                  className="text-red-600 focus:outline-none"
                >
                  Remove all
                </button>
                <button
                  onClick={toggleMobileFilter}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Filters
