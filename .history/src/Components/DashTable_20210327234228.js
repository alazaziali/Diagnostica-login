import React from 'react'

const DashTable = () => {
  //   const Table =()=>{
  // const[element,setElement] = useEffect(elements)
  //   }
  const elements = [
    { number: "1", theDiagnosis: 'Heart Attack', category: 'Heart Diseases' },
    { number: "2", theDiagnosis: 'Heart Attack', category: 'Heart Diseases' },
    { number: "3", theDiagnosis: 'Heart Attack', category: 'Heart Diseases' }
  ];


  const renderTable = (element, index) => {
    return (
      <tr key={index}>
        <td>{element.number}</td>
        <td>{element.theDiagnosis}</td>
        <td>{element.category}</td>


      </tr>
    )
  }

  return (

);

}

export default DashTable;