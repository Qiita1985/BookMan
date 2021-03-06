import React from "react";
import { BiCrown } from "react-icons/bi";

export default function Ranking({ ranks }) {
  if (!ranks.Items) return null;
  return (
    <div>
      <h2 className="text-center">
        <BiCrown className="mx-auto " size={30} />
        ランキング
      </h2>
      <hr className="border-indigo-300 border-t-3 "></hr>
      {ranks.Items.map((rank, index) => {
        if (rank.Item.rank <= 10) {
          return (
            <div
              key={index}
              rank={rank}
              className="h-48  border-b-sky-400 border-b-2 max-w-md w-auto "
            >
              <p className="text-center">{rank.Item.rank}位</p>
              <div className="flex">
                <div className="pl-4 h-168 w-160 m-auto">
                  <a href={rank.Item.itemUrl}>
                    <img src={rank.Item.mediumImageUrls[0].imageUrl} />
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
}
