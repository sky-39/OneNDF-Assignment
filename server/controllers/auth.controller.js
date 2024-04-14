import generateTokenAndSetCookie from "../utils/generateToken.js";
import User from "./../models/user.model.js";
import bcrypt from "bcryptjs";
import ShortUniqueId from 'short-unique-id';

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, referral_code } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const referral_code_generator = new ShortUniqueId({length:6});
    const rcode = referral_code_generator.rnd();

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      referral_code: rcode
    });

    if(referral_code && newUser){
      const referrer = await User.findOne({referral_code: referral_code});
      if(!referrer){
        return res.status(400).json({ error: "Invalid referral code"});
      }

      newUser.referrer = referral_code;
      await newUser.save();

      referrer.referred_users.push(newUser._id);
      await referrer.save();
      
      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        referral_code: newUser.referral_code,
      });
    }
    else if(newUser){
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        referral_code: newUser.referral_code,
      });
    }
    else{
      return res.status(400).json("Invalid user data");
    }

  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      res.status(400).json({ error: "Invalid Email or Password" });
    } else {

      generateTokenAndSetCookie(user._id, res);

      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      });
    }
  } catch (err) {
    console.log("Error in login controller.. ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Error in logout controller.. ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
