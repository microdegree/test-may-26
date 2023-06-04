import React from 'react'
import CourseCard from '../components/CourseCard'
function SearchedOutput({searchedResults, setSearchedResults}) {

    // id:2,
    // img: require('../assets/home/Section2/courseImg2.png'),
    // category:'Data Science',
    // title:'Power BI + Tableau Developer Course',
    // price:'20,000',
    // courseLink:'https://courses.microdegree.work/courses/power-bi-tableau-certification',
    // status:'live',
    // <CourseCard key={item.id} courseLink={item.courseLink} title={item.title} category={item.category} cardImg={item.img} price={item.price} ></CourseCard>
  return (
    <div className='w-full px-20 py-10'>
    <div className='flex flex-wrap items-center'>
        {
            searchedResults.map((item)=>(
                <div className='mr-7 mb-7'>
                <CourseCard cardImg={item.course_img} courseLink={item.course_link} title={item.course_name} category={item.course_category} price={item.course_price} desc={item.course_desc} course_details={item.course_details} ></CourseCard></div>
            ))
        }


    </div>
    </div>
  )
}

export default SearchedOutput