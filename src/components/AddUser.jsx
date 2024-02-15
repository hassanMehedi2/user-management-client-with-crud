
import Swal from 'sweetalert2'
const AddUser = () => {

    const handleAddUser = e =>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const email= form.email.value;
        const gender= form.gender.value;
        const status= form.status.value;

        const user = {name,email,gender,status}

        console.log(user);

        // connect to the server 
        fetch('https://user-management-server-with-crud.vercel.app/user',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "User has been added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
           
            <form onSubmit={handleAddUser} className="m-10 p-5 bg-[#F4F3F0] " >
            <h2 className="text-center font-semibold text-3xl text-purple-800 mt-8 mb-5">Add User</h2>
                <div className="flex gap-4 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* row 2  */}
                <div className="flex gap-4 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <input type="text" name="gender" placeholder="gender" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" name="status" placeholder="status" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* roew 3 */}
               

               <div className="flex">
               <input type="submit" className="btn btn-block mt-10 bg-slate-800 mb-8 text-white"  value={'Add User'}/>
               </div>
            </form>
        </div>
    );
};

export default AddUser;