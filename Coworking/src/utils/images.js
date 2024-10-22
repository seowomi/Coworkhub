
export default async function getImg (pictureName, setImgSrc)  {
    await setImgSrc(`http://localhost:8081/assets/coworkings/${pictureName}`)
}