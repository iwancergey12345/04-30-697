import Range from "../../components/Range";




export default function HomeEstimate({ }) {
  return (
    <div className="container mx-auto p-8">
      <p className="text-5xl mb-5">
        Estimate your total APY
      </p>
      <div className="flex flex-col gap-3">
        <p className="">
          Sales per week:
        </p>
        <Range max={250} value={200} />

        <p className="">
          Defi APY:
        </p>
        <Range max={100} value={70} unit={'%'} />

        <p className="">
          NFT Staking Booster:
        </p>
        <Range max={100} value={30} unit={'%'} />
      </div>
    </div>
  )
}