import React from "react";
import { BiCrown } from "react-icons/bi";

const Ranking = ({ ranks }) => {
  function convertrank(string) {
    const name = string;
    if (name.length > 15) {
      const splitName = name.substring(0, 15);
      return splitName + "...";
    } else {
      return name;
    }
  }
  if (!ranks.Items) return null;
  return (
    <div className="bg-stone-100 mx-10  py-5 rounded-lg mr-auto">
      <h2 className="text-center">
        <BiCrown className="mx-auto " size={30} />
        ランキング
      </h2>
      <hr className="border-indigo-300 border-t-3 "></hr>
      {ranks.Items.map((rank, index) => {
        if (rank.Item.rank <= 10) {
          return (
            <div key={index} rank={rank} className="h-48  border-b-sky-400 border-b-2 max-w-md w-auto ">
              <p className="text-center">{rank.Item.rank}位</p>
              <div className="flex">
                <div className="px-4 h-168 w-160">
                  <a href={rank.Item.itemUrl} className="">
                    <img
                      src={rank.Item.mediumImageUrls[0].imageUrl}
                      className=""
                    />
                  </a>
                </div>
                <div className="w-240 px-auto">
                  <div>{rank.Item.itemName}</div>
                </div>
              </div>
            </div>
          );
        } else return null;
      })}
    </div>
  );
};

export default Ranking;
