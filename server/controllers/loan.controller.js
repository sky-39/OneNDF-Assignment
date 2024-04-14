import User from "../models/user.model.js"

export const applyLoanUsingReferral = async (req, res) => {
    try {
        const user = req.user;

        const referrer_id = user.referrer;
        const referrer = await User.findOne({_id: referrer_id});

        const is_referral_used = referrer.referrals_used.includes(user._id);

        if(!is_referral_used){
            referrer.referrals_used.push(user._id);
            await referrer.save();
        }
        else{
            return res.status(409).json({message:"Referral already used"});
        }

        res.send("loan aprroved")
        
    } catch (error) {
        console.log("Error in loan application controller", error);
        res.status(500).json({ error: "Internal eerver error"});
    }
}