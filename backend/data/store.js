import bcrypt from 'bcryptjs';
export const users = [
 {id:'u1',name:'Keerthi Reddy',email:'demo@campusride.com',password:bcrypt.hashSync('demo123',10),phone:'9876543210',college:'CBIT',rating:4.9,totalRides:18,ridesOffered:5,role:'student'},
 {id:'u2',name:'Rahul Verma',email:'rahul@cbit.edu',password:bcrypt.hashSync('demo123',10),phone:'9876543211',college:'CBIT',rating:4.8,totalRides:34,ridesOffered:20,role:'student'},
 {id:'u3',name:'Aarav Sharma',email:'aarav@cbit.edu',password:bcrypt.hashSync('demo123',10),phone:'9876543212',college:'CBIT',rating:4.7,totalRides:11,ridesOffered:3,role:'student'},
 {id:'admin',name:'Campus Admin',email:'admin@campusride.com',password:bcrypt.hashSync('admin123',10),phone:'9000000000',college:'CBIT',rating:5,totalRides:0,ridesOffered:0,role:'admin'}
];
export let rides = [
 {id:'r1',driverId:'u2',from:'Mehdipatnam',to:'CBIT Campus',date:'2026-08-19',time:'08:15',seats:3,availableSeats:2,price:40,vehicle:{type:'Car',model:'Hyundai i20',number:'TS 09 AB 1234',color:'White'},status:'active',notes:'Pickup near Metro station',duration:'35 min'},
 {id:'r2',driverId:'u3',from:'Gachibowli',to:'CBIT Campus',date:'2026-08-19',time:'09:00',seats:4,availableSeats:3,price:35,vehicle:{type:'Bike',model:'Honda Activa',number:'TS 07 CD 4432',color:'Blue'},status:'active',notes:'Helmet available',duration:'30 min'},
 {id:'r3',driverId:'u2',from:'CBIT Campus',to:'Hyderabad Airport',date:'2026-08-20',time:'16:30',seats:3,availableSeats:2,price:180,vehicle:{type:'Car',model:'Hyundai i20',number:'TS 09 AB 1234',color:'White'},status:'active',notes:'Terminal drop',duration:'55 min'},
 {id:'r4',driverId:'u3',from:'CBIT Campus',to:'Secunderabad Railway Station',date:'2026-08-21',time:'12:00',seats:2,availableSeats:1,price:95,vehicle:{type:'Car',model:'Tata Punch',number:'TS 10 EF 9912',color:'Red'},status:'active',notes:'Main gate pickup',duration:'50 min'}
];
export let requests = [{id:'q1',rideId:'r1',passengerId:'u1',status:'pending',requestedSeats:1,createdAt:new Date().toISOString()}];
export let notifications = [{id:'n1',userId:'u1',message:'Welcome to CampusRide! Your profile is verified.',type:'success',read:false,createdAt:new Date().toISOString()}];
export const id = p => `${p}${Date.now()}${Math.random().toString(36).slice(2,6)}`;
export const safeUser = u => { const {password,...safe}=u; return safe; };
export const getRide = r => ({...r,driver:safeUser(users.find(u=>u.id===r.driverId))});
