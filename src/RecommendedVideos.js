import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
             <VideoCard 
             title="Basics of ReactJS | 2020/2021"
             views="2.3M Views"
             timestamp="7 days ago"
             channelImage="https://st3.depositphotos.com/3261171/18407/i/1600/depositphotos_184073602-stock-photo-clever-programmer-standing-in-front.jpg"
             channel="Code"
             image="https://code.visualstudio.com/assets/docs/nodejs/reactjs/jsx-intellisense.png"
             /> 
             <VideoCard 
             title="React Crash Course 2021"
             views="54K Views"
             timestamp="6 days ago"
             channelImage="https://code.visualstudio.com/assets/docs/nodejs/reactjs/jsx-intellisense.png"
             channel="Traversy Media"
             image="https://i4.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
             /> 
             <VideoCard 
             title="Design a Portfolio Website"
             views="35K Views"
             timestamp="12 days ago"
             channelImage="https://1.bp.blogspot.com/-mtsTzTN2t6c/XzkpoVBvAaI/AAAAAAAABZk/c4tyF5cd51wzL5cqCJ9l4z0Zy2I8n98lQCPcBGAYYCw/s1600/BLsCcSfoat.jpg"
             channel="Dennis Ivanov"
             image="https://img.youtube.com/vi/r_hYR53r61M/0.jpg"
             /> 
             <VideoCard 
             title="Become a Web Developer in 10 minutes | 2020/2021"
             views="1.3M Views"
             timestamp="10 days ago"
             channelImage="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
             channel="Sonny Sangha"
             image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
             /> 
             <VideoCard 
             title="Learn Python from scratch"
             views="27K Views"
             timestamp="2 days ago"
             channelImage="https://c8.alamy.com/comp/P2FD8E/clever-programmer-pointing-to-the-screen-and-feeling-satisfied-P2FD8E.jpg"
             channel="Brad Traversy"
             image="https://i.ytimg.com/vi/JJmcL1N2KQs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAHC14dcQbHSi2dTLFSIm8GkmyBbw"
             /> 
             <VideoCard 
             title="What is a React Hook and Context API?"
             views="4K Views"
             timestamp="1 days ago"
             channelImage="https://comps.canstockphoto.com/clever-programmer-looking-at-the-screen-pictures_csp56818786.jpg"
             channel="Florin Pop"
             image="https://i.ytimg.com/vi/XuFDcZABiDQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAB5EG9VLWSb4KV0jvijme2j4lwiw"
             /> 
             <VideoCard 
             title="Your Web development setup"
             views="2K Views"
             timestamp="8 days ago"
             channelImage="https://cdn-images-1.listennotes.com/podcasts/unleash-your-inner-wolf-with-rafeh-qazi-a0TmdCtv_zQ-ISlDR3vdqKW.300x300.jpg"
             channel="Rafeh Qazi"
             image="https://miro.medium.com/max/2560/1*_KSPyxBt9qrwlh7RaQZQJQ.jpeg"
             /> 
              
             <VideoCard 
             title="Jamstack Crash Course for beginners"
             views="2.3M Views"
             timestamp="7 days ago"
             channelImage="https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/mernstack.png"
             channel="James Q Quick"
             image="https://pbs.twimg.com/media/EcVCq3lWAAAxcZJ.jpg"
             /> 
             <VideoCard 
             title="Watch great movies"
             views="54K Views"
             timestamp="6 days ago"
             channelImage="https://synergytop.com/wp-content/uploads/2020/05/LAMP-1-600x338.png"
             channel="Traversy Media"
             image="https://i.ytimg.com/vi/gZTCRe8Hr9g/maxresdefault.jpg"
             /> 
             <VideoCard 
             title="React Crash Course for beginners"
             views="35K Views"
             timestamp="12 days ago"
             channelImage="https://i.ytimg.com/vi/f4iLZENMEeE/maxresdefault.jpg"
             channel="Dennis Ivanov"
             image="https://dev-to-uploads.s3.amazonaws.com/i/iplsbo37x2oujohn7ulc.png"
             /> 
             <VideoCard 
             title="What is Node.js and MongoDB?"
             views="1.3M Views"
             timestamp="10 days ago"
             channelImage="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
             channel="The Net Ninja"
             image="https://i.ytimg.com/vi/bxsemcrY4gQ/maxresdefault.jpg"
             /> 
             <VideoCard 
             title="All you need to know about GraphQL"
             views="27K Views"
             timestamp="2 days ago"
             channelImage="https://i.ytimg.com/vi/JJmcL1N2KQs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAHC14dcQbHSi2dTLFSIm8GkmyBbw"
             channel="Hitesh Choudhary"
             image="https://i.ytimg.com/vi/_Zss2Mbz4Bs/maxresdefault.jpg"
             /> 
             <VideoCard 
             title="Learn Web Development UI/UX Designs with DesignCourse"
             views="4K Views"
             timestamp="1 days ago"
             channelImage="https://comps.canstockphoto.com/clever-programmer-looking-at-the-screen-pictures_csp56818786.jpg"
             channel="DesignCourse"
             image="https://i.ytimg.com/vi/QA0XpGhiz5w/maxresdefault.jpg"
             /> 
             <VideoCard 
             title="HTML Crash Course for Absolute Beginners"
             views="2K Views"
             timestamp="8 days ago"
             channelImage="https://cdn-images-1.listennotes.com/podcasts/unleash-your-inner-wolf-with-rafeh-qazi-a0TmdCtv_zQ-ISlDR3vdqKW.300x300.jpg"
             channel="Rafeh Qazi"
             image="https://img.youtube.com/vi/UB1O30fR-EE/maxresdefault.jpg"
             /> 
              
            </div>
        </div>
    )
}

export default RecommendedVideos
