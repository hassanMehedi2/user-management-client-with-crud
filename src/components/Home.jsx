import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);
    let count = 0;



    return (
        <div>
            <h2 className='text-4xl font-bold text-purple-900 text-center mt-10 mb-10'>All Users</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr><th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>age</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <tr className="hover"
                                key={user._id}
                            >
                                <th>{(count = count + 1)}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.status}</td>
                                <td>
                                    <Link><button className='bg-blue-600 text-white p-2 rounded-lg mr-2'>Update</button></Link>
                                    <button onClick={() => handleDelete(user._id)} className='bg-red-600 text-white p-2 px-3 rounded-lg'>Delete</button>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;