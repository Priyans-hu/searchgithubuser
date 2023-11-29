import React from 'react'

export default function SearchForm({ username, setUsername, search }) {
    const submittionHandler = (e) => {
        e.preventDefault();
        search(username);
    }
    return (
        <header className='m-4 p-md-4 py-4 d-md-flex justify-content-between align-items-center'>
            <div>
                <h2>Github User search</h2>
            </div>
            <div className='my-4 my-md-0'>
                <form action="" onSubmit={(e) => submittionHandler(e)}>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>@</span>
                        <div className='form-floating'>
                            <input
                                type='text'
                                className='form-control'
                                id='username'
                                placeholder='Username'
                                name='username'
                                value={username}
                                onChange={
                                    (e) => {
                                        setUsername(e.target.value);
                                        // search(username);
                                    }
                                }
                            />
                            <label htmlFor='username'>Username</label>
                        </div>
                        <span className='input-group-text bg-transparent border-0'>
                            <button
                                className='btn btn-primary'
                                onClick={() => search(username)} value={'Search'}>
                                Go
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </header>
    )
};
