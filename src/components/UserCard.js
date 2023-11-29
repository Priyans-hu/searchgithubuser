import React from 'react'

export default function UserCard({ card }) {
    if (card.html_url) {
        return (
        <main className='d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
            <div className='col-10 col-lg-7'>
                <div className='d-md-flex align-items-center rounded border p-4 px-md-4'>
                    {/* user avatar image */}
                    <div>
                        <img src={card.avatar_url} alt="userimage" width={'200px'} className='rounded' />
                    </div>
                    {/* username and links */}
                    <div className='my-4 p-md-4'>
                        {/* user primary detils */}
                        <div>
                            <div className='align-items-center'>
                                {/* user account name */}
                                <h3 className=''>{card.name}</h3>
                                <div className='d-flex justify-content-between'>
                                    {/* user username */}
                                    <a href={card.html_url} target='_blank' rel='noopener noreferrer'>
                                        <i className="fa-solid fa-user d-inline mx-1"></i>
                                        <p className='d-inline'>{card.login}</p>
                                    </a>
                                    {/* user website */}
                                    <a href={card.blog ? card.blog : '/'} target='_blank' rel='noopener noreferrer'>
                                        <i className='fa-solid fa-globe d-inline mx-1'></i>
                                        <p className='d-inline'>{card.blog ? card.blog : 'N/A'}</p>
                                    </a>
                                    <a href={`mailto:${card.email}`}>
                                        <i className='fa-solid fa-envelope d-inline mx-1'></i>
                                        <p className='d-inline'>{card.email ? card.email : 'N/A'}</p>
                                    </a>
                                </div>
                            </div>
                            {/* user bio */}
                            <div className='mt-2 mt-md-4'>
                                {/* user location */}
                                <p>
                                    <i className="fa-solid fa-location-dot mx-1"></i>
                                    {card.location}
                                </p>
                                <p>{card.bio}</p>
                            </div>
                        </div>
                        {/* user other details */}
                        <div>
                            <div className='d-flex'>
                                {/* user follower count */}
                                <div className='fw-bold'>
                                    <a href={card.followers_url} className='text-secondary'>
                                        <span>Followers</span>
                                        <span className='mx-2'>{card.followers}</span>
                                    </a>
                                </div>
                                {/* user following count */}
                                <div className='mx-4 fw-bold'>
                                    <a href={card.following_url} className='text-secondary'>
                                        <span>Following</span>
                                        <span className='mx-2'>{card.following}</span>
                                    </a>
                                </div>
                            </div>
                            <div className='my-2'>
                                <p>
                                    <span className='fw-bold'>Joined on: </span>
                                    {card.created_at.substring(0,10)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
    } else {
        return(
            <main className='d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
                <h2>Start searching someone, to see data here</h2>
            </main>
        )
    }
    
};
