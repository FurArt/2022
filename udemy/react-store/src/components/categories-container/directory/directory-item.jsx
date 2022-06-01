import CategoryItem from '../item/categories-container'
function Directory({categorys}) {
  return (
    <div className='categories-container'>
      {categorys.map((category) => (
       <CategoryItem category={category}/>
      ))}
    </div>
  )
}
export default Directory;
