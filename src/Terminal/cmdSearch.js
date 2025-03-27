import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import "./dark.css";

function DarkSearchContainer({ apiInstance, setItem }) {
  const { trackEvent } = useMatomo();
  const [itemList, setItemList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (apiInstance) {

        const queryParams = new URLSearchParams(location.search);
        const urlItem = queryParams.get('item');

        apiInstance
            .get("/market/items")
            .then((res) => {

                const items = res.data;
                setItemList(res.data);
                setFilteredItems(res.data);

                // Check if the item from the URL exists in the data
                if (urlItem && items.includes(urlItem)) {
                    setItem(urlItem);
                    setSearchQuery(urlItem);
                } else {
                    setItem(items[0]);
                }
            })
        .catch((err) => {
          console.error("Failed to get item list:", err);
        });
    } else {
      console.warn("api is not ready or is not an Axios instance");
    }
  }, [apiInstance]);

  useEffect(() => {
    const filtered = itemList.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchQuery, itemList]);

  return (
    <div className="bg-black text-green-400 font-mono shadow-inner rounded-lg p-4 h-[33vh] md:h-[85vh] flex flex-col">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border border-green-500 rounded-md w-full mb-4 sticky top-0 bg-black text-green-300 placeholder-green-700 z-10 font-mono"
      />

      {/* Scrollable List */}
      <ul className="overflow-y-auto flex-1 border-t border-green-700 pt-2">
        {filteredItems.map((item, index) => (
          <li
            key={index}
            className="p-2 bg-green-900/30 rounded-md m-1 cursor-pointer hover:bg-green-800/60 transition-colors duration-150"
            onClick={() => {
              setItem(item);
              navigate(`?item=${item}`, { replace: true });
              trackEvent({
                category: "Terminal",
                action: "Item Clicked",
                name: item,
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

export default DarkSearchContainer;