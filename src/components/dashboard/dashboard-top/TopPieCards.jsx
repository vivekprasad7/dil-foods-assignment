import React from 'react'
import TopPieCard from './TopPieCard'

const TopPieCards = () => {
  return (
    <section className=' flex flex-wrap  md:flex-row justify-between items-center gap-4 w-[100%]'>
        <TopPieCard
          colors={["#e4e8ef", "#475be8"]}
          percentFillValue={80}
          cardInfo={{
            title: "Todays Sales",
            value: "75,121",
            text: "121 Orders Fulfilled",
          }}
        />
         <TopPieCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Todays Expenses",
          value: "52,103",
          text: "Accumulative",
        }}
      />
      <TopPieCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Today's Profit",
          value: "23018",
          text: "Available",
        }}
      />

    </section>
  )
}

export default TopPieCards