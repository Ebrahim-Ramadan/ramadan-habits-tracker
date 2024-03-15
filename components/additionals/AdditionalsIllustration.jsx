import React from 'react'

export const AdditionalsIllustration = ({ additionalPrayer }) => {
  React.useEffect(() => {
    if (!additionalPrayer || Object.keys(additionalPrayer).length === 0) {
      // If LastadditionalPrayer is undefined or an empty object, return early
      return;
    }
  }
    , [])
  console.log('additionalPrayer', additionalPrayer)
  return (
    <div className='mt-4 px-2 py-1 rounded bg-gradient-to-r from-[#00825A] via-[#00756B] to-[#006670]  text-white flex w-full justify-between mb-4'>
      <p >
        <div class="group relative">
          <button class="font-bold text-white">
            {additionalPrayer['NewPrayer'].length > 25 ?
          `${additionalPrayer['NewPrayer'].substring(0, 25)}...`
          :
          `${additionalPrayer['NewPrayer']}`}
  </button>
  <div class="absolute w-full z-10 hidden group-hover:block bg-gray-900 text-xs text-white px-2 py-1 rounded -top-10 left-1/2 -translate-x-1/2 transition-all duration-1000">
            {additionalPrayer['NewPrayer']}
  </div>
</div>

        

        </p>
      <p>
      {additionalPrayer['duration']}
        
       
      </p>
    </div>
  )
}
