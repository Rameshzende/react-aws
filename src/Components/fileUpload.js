import React, { useState } from 'react'

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const onFileChange = (event) => {
    if (event?.target.value) {
      setSelectedFile(event?.target?.files[0])
    }
    console.log(selectedFile)
  }

  const onFileUpload = () => {
    const formData = new FormData()

    formData.append(
        "demo file",
        selectedFile
    )
  }

  return (
    <div className='container'>
      <form>
        <input type='file' onChange={onFileChange} />
      </form>

      <button onClick={onFileUpload}>Submit</button>
    </div>
  )
}

export default FileUpload