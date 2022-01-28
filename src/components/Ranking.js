import React from "react";

const Ranking = ({ ranks }) => {
  if (!ranks.Items) return null;
  return (
    <div className='bg-white mx-10 py-10 rounded-lg w-240'>
      {ranks.Items.map((rank, index) => {
        return (
          <div key={index} rank={rank} >
            <div className='w-120'>
              <a href={rank.Item.itemUrl} className='block w-32' >
                <img src={rank.Item.mediumImageUrls[0].imageUrl} className='w-120' />
              </a>
            </div>

            <div>
              <div>{rank.Item.itemName}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ranking;
