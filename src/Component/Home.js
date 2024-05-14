import React, { useState } from 'react'

const Home = () => {

  const [collapse, setCollapse] = useState([true, true, true,true])
  const [clr, setClr] = useState(false)
  
     
  const [select, setSelect] =useState({
      jobCategory: [], service: [], tasks: [], taskDetail:[]  })  


  const data = [{
   
    title: "jobCategory",
    content : ["Dry Wall and Paint", "Doors, Knobs, Handles ", "Clogs, Leakes, Fixtures", "Caulking", "TV & Furniture Mounting", "Furniture Assembly", "Vent Cleaning", "Other Categories"],
    isMoreContent: true,
    MoreContent: "Need HVAC or Water Filtration Services? <b>Call to Request Home Advisor<b>"
  } ,
{
  
  title: "service",
  content : ["Denting", "Plumber ", "Electrician", "Carpenter"],
  isMoreContent: false,
  MoreContent: null
},

 {
title: "tasks",
content : ["Cleaning", "Washing ", "Painting"],
isMoreContent: false,
MoreContent: null
},

{
  title: "taskDetail",
  content : ["Held at 20.05.24", "Held at 21.05.24", "Held at 5.05.24", "Held at 10.05.24"],
  isMoreContent: false,
  MoreContent: null
  },


]


const handler = (i) => {
  setCollapse(prev => {

    const updatedCollapse = [...prev];
    updatedCollapse[i] = !updatedCollapse[i];
    return updatedCollapse;
  });
}

const handleSelect =(list, i, e )=>{
  
  e.target.style.backgroundColor = 'green' 
  if (select[data[i].title].includes(list)) return; 
  setSelect(prev=>({...prev, [data[i].title]:[...select[data[i].title], list]}))
}

const removeSelect = (title, numlist, selectone)=>{

  let y = select[title].filter((one, i)=> i != numlist)  

  setSelect(prev=>({...prev, [title]:[...y]}))

  let title1 = data.find(one=>one.title == title)

  let id = title1.content.indexOf(selectone)

document.getElementById(title).children[id].style.backgroundColor = ''

}




  return (
    <div className=" flex flex-col space-y-4">

<div className="w-[818] h-[74] ">
<h1 className="font-sans text-2xl font-semibold pb-3">Task Selection</h1>
<p>Select Your Desired Category and Service to Find the Right Task You Need To Done</p>
</div>

{data.map((one, i)=>(

<div key={i} className="w-[1216] h-[296]  border border-grey-600 shadow-lg shadow-grey-700/40 rounded-xl px-8 py-4">

<div className="w-[1120] h-fit mb-10 flex justify-between ">

<div className="flex">

<div className="flex cursor-pointer" onClick={()=>{handler(i)}}>
<h2 className="font-sans text-1xl font-semibold " >{one.title.toUpperCase()}</h2>

 <div className="pl-4">{collapse[i] ? '>' : 'v'}</div>
</div>


{select[one.title].length>0 && <div className="flex flex-wrap">{select[one.title].map((selectone, numlist)=>(
      <div key={numlist} className="w-fit px-2 py-1 border rounded-md cursor-pointer"
      >
  
       {selectone}
       <i className="fa fa-times bg-amber-500 ml-2" aria-hidden="true" onClick={()=>{removeSelect(one.title, numlist, selectone)}} ></i>
       </div>
       
))}</div>}
  
</div>

<div>{i+1 +'/' + data.length }</div>
</div>


<div id={one.title} className="w-[1120] h-[176] flex flex-wrap ">

{!collapse[i] && one.content.map((list, num)=>(
    
    <div key={num} className={` w-fit px-5 py-3 border rounded-md mr-3 mb-3 cursor-pointer`}
     onClick={(e)=>handleSelect(list, i, e)}>
      <i className="fa fa-object-group mr-2 bg-yellow-400" aria-hidden="true" ></i>
      {list}</div>
    
      ))}

</div>
  
  </div>

))}


 </div>
  )
}

export default Home
