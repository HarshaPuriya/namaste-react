const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
            <form>
                <input type="text" placeholder="name" className="border border-black p-2 m-2"/>
                <input type="text" placeholder="message" className="border border-black p-2 m-2"/>
                <button className="m-2 p-2 border bg-blue-400 rounded-md font-bold">Submit</button>

            </form>
        </div>
    )
}
export default Contact;