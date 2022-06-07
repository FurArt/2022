import CategoryItem from '../item/categories-container'
function Directory({categorys}) {
  return (
    <div  className='categories-container'>
      {categorys.map((category) => (
       <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}
export default Directory;
