
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage"
import { storage } from "../../../firebase"
export const useImageUpload = ()=>{
    const getLink = async(imageUpload,id)=>{
        const imageListRef = ref(storage,`${id}/profile/`)
        const fileFolderRef = ref(storage,`${id}/profile/${imageUpload.name}`)
        await uploadBytes(fileFolderRef,imageUpload)
        const downloadUrls = []
        const result = await listAll(imageListRef)
        for(const item of result.items){
            const url = await getDownloadURL(item)
            downloadUrls.push(url)
        }
        return downloadUrls[downloadUrls.length-1];
    }

    return {getLink}
}