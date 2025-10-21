// console.log(cloudinary)
// const uploadFunction = 
const cloudinaryWidget = cloudinary.createUploadWidget({
    cloudName: "",
    uploadPreset: "",
    multiple: true,
    cropping: true
}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  })

document.getElementById("upload_widget").addEventListener("click", function(){
    cloudinaryWidget.open();
  }, false);

// const url = 'https://api.cloudinary.com/v1_1/{name}/image/upload';
// const btn = document.querySelector('#upload_image');
// const preview = document.querySelector('#preview');

// btn.addEventListener('click', (e) => {
//   e.preventDefault();

//   const files = document.querySelector('input').files;
//   const formData = new FormData();
//   console.log(URL.createObjectURL(files[0]))
//   preview.src = URL.createObjectURL(files[0])
//   for (let i = 0; i < files.length; i++) {
//     let file = files[i];
//     formData.append('file', file);
//     formData.append('upload_preset', '');

//     fetch(url, {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .then((data) => {
//         const result = JSON.parse(data)
//         console.log(result)
//         document.getElementById('data').src = result.secure_url;
//       });
//   }
// });

// const div_click = () => {
//     console.log("clicked on div")
// }

// const btn_click = (e) => {
//     e.stopPropagation()
//     console.log("clicked on btn")
// }

// const upload = (e) => {
//    const files = document.querySelector('[type=file]').files;
//     console.log(files[0])
// }
