import React from 'react';

const Blogs = () => {
const string=`const products=[
    {name:'tablet',description:'pink', price:50},
    {name:'mobile',description:'black', price:15000},
    {name:'watch',description:'pink', price:8000},
    {name:'laptop',description:'black', price:35000}
]

const searchByName=products.filter(product=>product.name == 'mobile');`

    return (
        <div >
        <div className='flex justify-center mt-10 mb-10'>
            <div class="card w-4/6 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Questions / Answer</h2>
    <p className='text-xl'>Q1. How will you improve the performance of a React Application?</p>
    <p className='text-lg'>To improve the performance of React application, one can apply below items:</p>
    <ul className='px-8'>
        <li className='list-disc'>Only transfer the necessary props to component</li>
        <li className='list-disc'>Avoid loading too much information in one page. Introduce pagination to show more information on demand basis.</li>
        <li className='list-disc'>Code splitting in React using dynamic import</li>
        <li className='list-disc'>Lazy loading images in React</li>
    </ul>
    <p className='text-xl mb-5 mt-10'>Q2. What are the different ways to manage a state in a React application?</p>
    <p className='text-lg'>There are mainly four types to manage a state</p>
    <ul className='px-8'>
        <li className='list-disc'>Local state</li>
        <li className='list-disc'>Global state</li>
        <li className='list-disc'>Server state</li>
        <li className='list-disc'>URL state</li>

    </ul>

    <p className='text-xl mb-5 mt-10'>Q3. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
    </p>
    <p className='text-lg'>
            We should never update the state directly for the following reasons:
    </p>
    <ul className='px-8'>
        <li className='list-disc'>If we update it direcltly, then calling setState() may just replace the new update, not whole.</li>
        <li className='list-disc'>It does not change the state immediately. </li>
        <li className='list-disc'>Losing control of state accross all components.</li>
        <li className='list-disc'>URL state</li>

    </ul>
    <p className='text-xl mb-5 mt-10'>Q4. What is a unit test? Why should write unit tests?</p>
    <p className='text-lg'>
        This is a type of testing, done by developers, in which the granular testable components of an application, such as, functions, procedures are tested that they are ready for using.
    </p>
    <p className='text-lg'>This actually guarantees that all code pass the defects and meets the quality before it been deployed. Its also reusable. So if any changes happens in any parts, it helps to identify whether rest of the components are still working as per the logic. Saves lots of time and increase efficiency. </p>
    <p className='text-xl mb-5 mt-10'>Q5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
    <p className='text-lg'>
        By running the filter methods on an array to find out all the products that matched with the name.</p>
       <p> {string}

</p>
  </div>
</div>
        </div>
        </div>
    );
};

export default Blogs;