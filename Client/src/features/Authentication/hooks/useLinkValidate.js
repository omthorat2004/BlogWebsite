import Swal from 'sweetalert2'
import { checkUrl } from '../../../utils'
export const useLinkValidate = (aboutLinks)=>{
    const {valid,message} = checkUrl(aboutLinks)
    if(!valid){
      Swal.fire({
        title:message,
        icon:'error'
      })
      return false
    }
    return true;
}
