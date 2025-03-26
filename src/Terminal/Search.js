import React, { useEffect, useState, useContext } from "react";
import { VioContext } from "../context";
import { useMatomo } from "@datapunt/matomo-tracker-react";

function SearchContainer({ apiInstance, setItem }) {
  const { VioUser } = useContext(VioContext);
  const { trackEvent } = useMatomo();
  const [itemList, setItemList] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [filteredItems, setFilteredItems] = useState([]); // State for filtered items

  useEffect(() => {
    if (apiInstance) {
      apiInstance
        .get("/market/items")
        .then((res) => {
          setItemList(res.data);
          setFilteredItems(res.data); // Initialize filtered items
          setItem(res.data[0]); // Set the first item as default
        })
        .catch((err) => {
          console.error("Failed to get item list:", err);
        });
    } else {
      console.warn("api is not ready or is not an Axios instance");
    }
  }, [apiInstance]);

  useEffect(() => {
    // Filter items based on the search query
    const filtered = itemList.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchQuery, itemList]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 h-[33vh] md:h-[85vh] flex flex-col">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full mb-4 sticky top-0 bg-white z-10"
      />

      {/* Scrollable List */}
      <ul className="overflow-y-auto flex-1">
        {filteredItems.map((item, index) => (
          <li
            key={index}
            className="p-2 bg-gray-100 rounded-md m-2 cursor-pointer hover:bg-gray-200"
            onClick={() => {
              setItem(item);
              trackEvent({
                category: "Terminal",
                action: "Item Clicked",
                name: item.name,
              });
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchContainer;
