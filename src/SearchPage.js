import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            
            <ChannelRow 
                image="https://media-exp1.licdn.com/dms/image/C5603AQEH0touzW9sfg/profile-displayphoto-shrink_800_800/0/1574228760576?e=1616630400&v=beta&t=Yp-NyBGkj3XbTB_7AWbLugllAZRQAhf22lv3V5P2eDM"
                channel="Bongani The Programmer"
                verified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level"
            />
            <hr/>
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="59 seconds ago"
                channel="Bongani The Programmer"
                title="Let's Build a YouTube Clone with React JS"
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
             />
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="1 week ago"
                channel="Bongani The Programmer"
                title="Let's Build a Social Media App with React"
                image="https://i.ytimg.com/vi/GIIvn6V2GSY/maxresdefault.jpg"
             />
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="1 month ago"
                channel="Bongani The Programmer"
                title="How to code in React JS"
                image="https://miro.medium.com/max/1940/1*P57RfOzNHlHAP4MiVSmfow.gif"
             />
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="1 month ago"
                channel="Bongani The Programmer"
                title="Building a React CRUD Application using MERN Stack"
                image="https://www.chapter247.com/wp-content/uploads/2019/07/How-to-build-a-react-CRUD-application-using-MERN-stack0A.png"
             />
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="3 months ago"
                channel="Bongani The Programmer"
                title="React is taking Over Front-End Development"
                image="https://www.cmarix.com/blog/wp-content/uploads/2018/09/React-is-Taking-Over-Front-End-Development.jpg"
             />
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="3 weeks ago"
                channel="Bongani The Programmer"
                title="Web Design & Development"
                image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/125493451/original/5242d954a10b3ce70f3736bd141cc7b5878d835b/do-professional-web-development-web-design-for-you.jpg"
             />
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="2 months ago"
                channel="Bongani The Programmer"
                title="How to build a MERN Stack App with Material UI"
                image="https://blog.crowdbotics.com/content/images/2019/05/build-a-MERN-stack-app.png"
             />
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="1 week ago"
                channel="Bongani The Programmer"
                title="Building an Exercise Tracker - MERN Tutorial"
                image="https://miro.medium.com/max/1200/1*t7GMvlZmrR_eZHgYZ058gQ.png"
             />
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="7 months ago"
                channel="Bongani The Programmer"
                title="Build a Serverless MERN Story App with Webtask.io"
                image="https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/10/9g67hQ9iSGKHsCVusYUH_part1.png.jpg"
             />
            <VideoRow
                views="1.4M"
                subs="656K"
                description="Let's learn and build"
                timestamp="3 years ago"
                channel="Bongani The Programmer"
                title="MERN vs MEAN"
                image="https://pattemdigital.com/production/wp-content/uploads/2020/03/PD-Leverage-MERN-Stack-for-building-efficient-websites-Thumbnail.png"
             />
             
             
        </div>
    )
}

export default SearchPage
