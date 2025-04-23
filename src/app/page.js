
import React from 'react'
import Featured from './components/featured/Featured'
import CategoryList from './components/categoryList/CategoryList'
import CardList from './components/cardList/CardList'

const page = () => {
  return (
    <main>
      <Featured />
      <CategoryList />
      <div className=''>
        <CardList />
        <menu/>
      </div>
    </main>
  )
}

export default page

