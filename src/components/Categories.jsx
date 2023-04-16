import styled from "styled-components"
import { Categoriess } from "../Data"
import CategoryItem from "./CategoryItem"





const Container=styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`


const Categories = () => {
  return (
    <Container>
        {Categoriess.map((item)=>(
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories