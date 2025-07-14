import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const[newsData,changeNewsData]=useState(
        {"status":"ok","totalResults":34,"articles": [

        ]}

    )
const fetchData=()=>{axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then((response)=>{changeNewsData(response.data)})
.catch()}
useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                           
                           {newsData.articles.map(
                            (value,index)=>{
                                return(
                                    <div class="card mb-3" >
                                    <div class="row g-0">
                                      <div class="col-md-4">
                                        <img src={value.urlToImage} class="img-fluid rounded-start" alt="..."></img>
                                        <a href={value.url} className="">click here to read more</a>
                                      </div>
                                      <div class="col-md-8">
                                        <div class="card-body">
                                          <h5 class="card-title">{value.source.name}</h5>
                                          <p class="card-text">{value.author}</p>
                                          <p class="card-text">{value.title}</p>
                                          <p class="card-text">{value.description}</p>
                                          <p class="card-text">{value.publishedAt}</p>
                                          <p class="card-text">{value.content}</p>
                                          <p class="card-text"><small class="text-body-secondary">Read now</small></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                            }
                           )}
                            
                        </div>
                       



                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Viewall