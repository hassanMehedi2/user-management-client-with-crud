import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateUser = () => {
    const user = useLoaderData(null);
    const [name, setName] = useState(user.name);


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;

        const updatedUser = { name, email, gender, status }

        fetch(`https://user-management-server-with-crud.vercel.app/user/${user._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setName(updatedUser.name);
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        }

return (
    <div>
        <div>

            <form onSubmit={handleUpdate} className="m-10 p-5 bg-[#F4F3F0] " >
                <h2 className="text-center font-semibold text-3xl text-purple-800 mt-8 mb-5">Update User : <span className="text-black text-2xl">{name}</span></h2>
                <div className="flex gap-4 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" defaultValue={user.name} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user.email} placeholder="email" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* row 2  */}
                <div className="flex gap-4 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <input type="text" name="gender" placeholder="gender" defaultValue={user.gender} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" name="status" placeholder="status" defaultValue={user.status} className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* roew 3 */}


                <div className="flex">
                    <input type="submit" className="btn btn-block mt-10 bg-slate-800 mb-8 text-white" value={'Update'} />
                </div>
            </form>
        </div>
    </div>
    );
};


export default UpdateUser;