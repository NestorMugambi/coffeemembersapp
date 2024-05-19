import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const people = [
  {
    name: 'Nathan Sikalo',
    role: 'Project Leader',
    
  },
  // More people...
  {
    name:"Njuki Nestor Mugambi",
    role:"Frontend Developer",
    
  },

  {
    name:"Anthony Njuguna",
    role:"System lead",
  },

  {
    name:"Deborah Wanjiku",
    role:"UI/UX Designer",
  },

  {
    name:"Julius Mwangi",
    role:"System Analyst",
  },
  {
    name:"Boniface Wagoya",
    role:"Backend Developer",
  },
]

export default function App() {
  return (
   
    <div className="bg-white flex justify-center">    
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      
      <div className="max-w-5xl max-h-80 bg-blueGray-200 rounded">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Coffee CO-Operatives Members App</h2>
          <p className="mt-6 text-lg leading-8 text-black">
          Coffee cooperatives function as organized groups of farmers which process and market their coffee beans. They consist primarily of small-scale farmers who meet specific criteria for membership, including land ownership etc.
          </p>
          <p className="mt-6 text-lg leading-8 text-black">
          They operate within a complex ecosystem where efficient data management, streamlined service delivery and transparent financial management are paramount.
          </p>
      </div>   

      <div className = " justify-center  max-w-7xl grid grid-cols-2 gap-6">
          <div className = "bg-blueGray-200 rounded">
            <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Problem</h4>
            <p>-Inefficient Data Management</p>
            <p>-Challenges in Service Delivery</p>
            <p>-Inadequate Financial Management</p>
            <p>-Lack of  Reporting and Analysis</p>
            <p>-Manual Time-Consuming processes</p>
          </div>
          <div className = "bg-blueGray-200 rounded">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solution</h5>
            <p>-Improved Service Delivery</p>
            <p>-Transparent Financial Management</p>
            <p>-Expanded Integration capabilities i.e weather forecasting capabilities </p>
            <p>-Efficient Data Management</p>
            <p>-Advanced Reporting and Analysis </p>            
          </div>
         
        </div>  
        <div className="max-w-4xl max-h-72">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We are a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
   
  )
}

