/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabsCategories = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData()
    }, [])



    return (
        <Tabs>
            <div className='container mx-auto py-10'>
                <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
                    Browse Jobs By Categories
                </h1>

                <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
                    Three categories available for the time being. They are Web
                    Development, Graphics Design and Digital Marketing. Browse them by
                    clicking on the tabs below.
                </p>

                <TabList>
                    <div className='flex items-center  justify-center'>

                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </div>


                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
                        {

                            jobs.filter(j => j.category === 'Web Development').map(job => <JobCard
                                key={job._id}
                                job={job}
                            ></JobCard>)
                        }
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
                        {

                            jobs.filter(j => j.category === 'Graphics Design').map(job => <JobCard
                                key={job._id}
                                job={job}
                            ></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
                        {

                            jobs.filter(j => j.category === 'Digital Marketing').map(job => <JobCard
                                key={job._id}
                                job={job}
                            ></JobCard>)
                        }
                    </div>
                </TabPanel>
            </div>

        </Tabs>
    );
};

export default TabsCategories;