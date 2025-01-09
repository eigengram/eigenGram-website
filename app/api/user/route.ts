import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from 'zod';
import { promisify } from "util";
const resolveMx = promisify(dns.resolveMx);
import dns from "dns";
const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    phonenumber: z
      .string()
      .min(10, { message: 'Must be a valid mobile number' })
      .max(14, { message: 'Must be a valid mobile number' }),
    name: z.string().min(1, 'Username is required').max(100),

  })
  async function isDomainValid(email: string): Promise<boolean> {
    const domain = email.split("@")[1]; // Extract domain from email
    try {
      const mxRecords = await resolveMx(domain);
      return mxRecords && mxRecords.length > 0; // Check if MX records exist
    } catch (error) {
      console.error("Domain validation error:", error);
      return false;
    }
  }
  
   
 
export async function POST(req:Request){
    try{
        const body=await req.json();
        const {email,username,password,phonenumber,name}=userSchema.parse(body);
        const existingUserByEmail=await db.user.findUnique({
            where:{email:email}
        });
        const isEmailDomainValid = await isDomainValid(email);
    if (!isEmailDomainValid) {
      return NextResponse.json(
        { user: null, message: "Invalid email domain" },
        { status: 400 }
      );
    }

        if(existingUserByEmail){
            return NextResponse.json({
                user:null,message:"user with this email already exist"
            },{status:409})
        }
        const existingUserByUsername=await db.user.findUnique({
            where:{username:username}
        });
        if(existingUserByUsername){
            return NextResponse.json({user:null,message:"User with this username already exist"

            },{status:409})
        }
        const hashedPassword=await hash(password,10)
        const newUser=await db.user.create({
            data:{
                username,
                email,
                name,
                password :hashedPassword,
                phoneNumber:phonenumber,
                
            }
        });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {password:newUserPassword ,...rest}=newUser;
        return NextResponse.json({
            user:rest,message:"User Created succesfully"
        },{status:201});
    }
    catch(error){
        console.log(error)
        return NextResponse.json({
        message:"something went wrong"
        },{status:500});
        
    }
   
}