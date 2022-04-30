import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Lazy } from "swiper";
import FruitCard from "../../components/FruitCard";

const SORTtOKENS = [
  {
    id: '21',
    imgSrc: "/images/tokens/ethereum.svg",
  },
  {
    id: '21',
    imgSrc: "/images/tokens/solana.svg",
  },
  {
    id: '21',
    imgSrc: "/images/tokens/aet.svg",
  },
];

const NFTFRUITS = [
  {
    id: '12121',
    name: 'Pineapple',
    price: '1.37',
    imgSrc: '/images/fruits/pineapple.png',
  },
  {
    id: '12122',
    name: 'Strawberry',
    price: '1.37',
    imgSrc: '/images/fruits/strawberry.png',
  },
];

export default function HomeMain({ }) {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="flex flex-col items-stretch gap-6 grow px-7 py-10  bg-green-400 dark:bg-transparent">
        <div className="grow flex flex-col justify-between gap-6 p-5 rounded-xl  sm:pr-20 bg-red-400 dark:bg-transparent">
          <p className="text-5xl lg:text-6xl">
            Discover{' '}
            <strong >
              our collection{' '}
            </strong>
            of{' '}
            <strong className="relative">
              Fruit NFTs
              <span className="absolute h-10 w-36 rounded-xl bg-white/40 bottom-0 -right-10" />
            </strong>
          </p>
          <p className="mb-auto text-xl ">
            Cross-chain passive income NFTs for the rest of your life.
          </p>
          <div className="grow" />
          <div className="flex  flex-col lg:flex-row  justify-between gap-x-5 gap-y-10 items-center lg:items-end mb-10">
            <div>
              <p className="flex gap-3 items-center py-2 font-bold text-xl">
                Discover our NFTs
                <svg width="1em" height="1em" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 1.66666L22.6667 11L13.3333 20.3333M1.33334 11H22.6667H1.33334Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </p>
              <div className="h-[3px] bg-white rounded w-1/2" />
            </div>
            <button className="rounded-full border-[3px] border-white text-xl font-bold px-5 py-2 hover:bg-gray-500/30"
              onClick={() => { }}
            >
              Mint Now
            </button>

          </div>
        </div>
        <div className="flex  gap-3 px-5 py-3  rounded-xl items-center bg-indigo-500 dark:bg-transparent">
          <p className="font-bold text-lg mr-auto">
            Supported by:
          </p>
          {
            SORTtOKENS.map((item, index) =>
              <img src={item.imgSrc} alt="" loading="lazy" className="mx-auto h-10 lg:h-16" key={index} />
            )
          }
        </div>
      </div>
      <div className=" grow max-w-md w-full flex items-center bg-yellow-300 dark:bg-sky-300 dark:rounded-lg">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-size": "16px"
          }}
          lazy={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination, Lazy]}
        >
          {NFTFRUITS.map((item, index) =>
            <SwiperSlide key={index}>
              <div className="relative p-20">
                <FruitCard className="rotate-12" data={item} />
                <div className="-z-10 opacity-80 absolute inset-0 p-20">
                  <FruitCard className="-rotate-12 " data={item} />
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>


      </div >
      <div className="flex flex-col justify-evenly min-w-[320px] p-16  gap-10 bg-sky-300 dark:bg-stone-100/10">
        <div >
          <p className="font-bold text-3xl mb-4">
            1000
          </p>
          Fruits Minted
        </div>
        <div >
          <p className="font-bold text-3xl mb-4">
            720
          </p>
          Fruits Sold
        </div>
        <div >
          <p className="font-bold text-3xl mb-4">
            15k
          </p>
          People Achieved Lifetime Financial Freedom
        </div>
      </div>
    </div >
  )
}