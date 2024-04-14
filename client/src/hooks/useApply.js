import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useApply = () => {

    const {authUser} = useAuthContext();

    const applyforloan = async () => {
        if(authUser.referrer){
            try {
                const res = await fetch('/api/loan/apply/', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
    
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                else{
                    toast.success(data.message);
                }
    
    
            } catch (error) {
                toast.error(error.message);
            }
        }
        else{
            toast.success("Click again to continue without referral")
        }
        
    }

    return {applyforloan};

}

export default useApply;