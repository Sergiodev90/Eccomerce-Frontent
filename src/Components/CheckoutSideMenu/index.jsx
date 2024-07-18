import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context/'
import './styles.css'

const CheckoutSideMenu = () => {

  return (
    <aside
      className='flex checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => console.log("hello")}></XMarkIcon>
        </div>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }