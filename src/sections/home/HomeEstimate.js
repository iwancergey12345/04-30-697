import PropTypes from 'prop-types';
import Range from "../../components/Range";

HomeEstimate.propTypes = {
  data: PropTypes.object,
}


export default function HomeEstimate({ data }) {

  const salesPerWeek = 200;
  const defiApy = 70;
  const booster = 35;
  const total = 240;

  return (
    <div className="container mx-auto p-8 text-2xl">
      <p className="text-5xl mb-5">
        Estimate your total APY
      </p>
      <div className="flex flex-col gap-2">
        <p className="">
          Sales per week:
        </p>
        <Range max={250} value={salesPerWeek} readOnly />

        <p className="">
          Defi APY:
        </p>
        <Range max={100} value={defiApy} unit={'%'} readOnly />

        <p className="">
          NFT Staking Booster:
        </p>
        <Range max={100} value={booster} unit={'%'} readOnly />
      </div>
      <div className="mt-10">
        Total : { total}%
      </div>
    </div>
  )
}