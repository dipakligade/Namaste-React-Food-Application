const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
            <form>
                <input className="border border-black m-4 rounded p-2" placeholder="name" />
                <input className="border border-black m-4 rounded p-2" placeholder="Phone number" />
                <button className="bg-slate-300 border border-black p-1 rounded-lg" >Submit</button>
            </form>
        </div>
    )
}

export default Contact;