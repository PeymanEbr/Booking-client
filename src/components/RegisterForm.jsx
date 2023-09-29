const RegisterForm = ({handleSubmit,name,setName,email,setEmail,password,setPassword}) => {
    return(
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="form-group mb-3">
                <label className="form-lable">Your Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Name ..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label className="form-lable">Your Email</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email ..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label className="form-lable">Your Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Email ..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button disabled={!name || !email || !password} type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default RegisterForm;