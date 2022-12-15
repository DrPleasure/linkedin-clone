import axios from "axios"


const Form = () => {
let formData = new FormData();


    const onFileChange = (e) => {
        console.log(e.target.files[0])
        if(e.target && e.target.files[0]) {
            formData.append("file", e.target.files[0]);
        }
    }

    const SubmitFileData = () => {
        axios.post(
            "https://v2convertapi.com/upload",
            {formData}
        ) 
        .then(res => {
            console.log(res);
        })
        .catch(error => 
            console.log(error))
    }

    return (
        <div>
        <div>
            <input type="file" name="file_upload" onChange={onFileChange} />
        </div>
        <div>
            <button onClick={SubmitFileData}>Submit Data</button>
        </div>
        </div>

    )
}


export default Form