
import React, { useContext } from 'react';
import myContext from '../../context/data/MyContext';
import { Layout } from '../../components/layout/Layout';

function Order  () {
  const context = useContext(myContext)
  console.log(context);
  
  return (
   <div>
      <Layout>
          
      </Layout>
   </div>
  )
}

export default Order