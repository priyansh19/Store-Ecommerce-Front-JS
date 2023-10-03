import Featured from "@/components/Featured";
import Header from "@/components/header";
import { Product } from "@/models/Products";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";

export default function HomePage({featuredProduct, newProducts}) {
  console.log({newProducts})
  return (
    <div>
      <Header/>
      <Featured product={featuredProduct}/>
      <NewProducts product={newProducts}/>
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '6519752890aef1fd72848273';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),    
    },
  };
}