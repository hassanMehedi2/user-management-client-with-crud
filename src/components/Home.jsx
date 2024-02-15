
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);
    let count = 0;

    const handleDelete = _id => {

        // confirming if wants to delete or not
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/user/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // update the list after deleteing
                            const remaining = users.filter(user => user._id !== _id);
                            setUsers(remaining);
                            // sweet alart 
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }


    return (
        <div>
            <h2 className='text-4xl font-bold text-purple-900 text-center mt-10 mb-10'>All Users</h2>

            <div className="overflow-x-auto bg-[#F4F3F0] m-10 p-10">
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
                                    <Link to={`/update/${user._id}`}><button className='bg-blue-600 text-white p-2 rounded-lg mr-4'>Update</button></Link>
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