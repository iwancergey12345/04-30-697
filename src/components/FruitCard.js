import PropTypes from 'prop-types';

FruitCard.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
}

export default function FruitCard({ data, className }) {
  const { id, imgSrc, name, price } = data;
  return (
    <div className={`flex flex-col gap-3 items-stretch rounded-xl border-4 border-white p-6 bg-black w-64 h-96  ${className}`}>
      <div className='flex items-center justify-between '>
        <div className=''>
          <span className='font-bold text-lg'>
            NFTFruit
          </span>
          <br />.club
        </div>
        <p className='opacity-70'>
          Version:1
        </p>

      </div>
      <div className='bg-yellow-300 grow flex items-center justify-center'>
        <img src={imgSrc} loading='lazy' width='100px' height='auto' className='object-center object-cover' />
      </div>
      <div className='flex justify-between '>
        <div className=''>
          <p className='opacity-70'>
            Fruit:
          </p>
          <p className='font-bold text-lg'>
            {name}
          </p>
        </div>
        <div className=''>
          <p className='opacity-70'>
            Price:
          </p>
          <p className='font-bold text-lg'>
            {price} ETH
          </p>
        </div>
      </div>
    </div>
  )
}