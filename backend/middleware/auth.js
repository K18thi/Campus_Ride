import jwt from 'jsonwebtoken';
export const auth=(req,res,next)=>{const token=req.headers.authorization?.split(' ')[1];try{req.user=jwt.verify(token,process.env.JWT_SECRET||'campusride-demo-secret');next()}catch{return res.status(401).json({message:'Please log in to continue.'})}};
export const admin=(req,res,next)=>req.user.role==='admin'?next():res.status(403).json({message:'Admin access required.'});
